"use strict";

const fields = ["categorie", "profil", "genre", "texte"];
const genres = ["masculin", "féminin"];
const databaseName = "appsgenerator:" + new URL("./", location.href).pathname;
const seedDatabase = fetch("./appreciations.db").then(response => {
  if (!response.ok) throw new Error("La base initiale est indisponible.");
  return response.arrayBuffer();
});
const sqlite = initSqlJs({ locateFile: file => "./" + file });
const persistentStore = new Promise((resolve, reject) => {
  const request = indexedDB.open(databaseName, 1);
  request.onupgradeneeded = () => request.result.createObjectStore("files");
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});

function normalized(value) {
  return value.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
}

function validatedRow(values, label) {
  const [category, profile, genre, phrase] = values.map(value => String(value ?? "").trim());
  if (!phrase) return null;
  const categoryKey = categories.find(([value]) => normalized(value) === normalized(category))?.[0];
  const profileNumber = /^profil ([1-8])$/i.exec(profile);
  const profileKey = profileNumber ? profiles[Number(profileNumber[1]) - 1][0] :
    profiles.find(([value, title]) => [value, title].some(text => normalized(text) === normalized(profile)))?.[0];
  const genreKey = genres.find(value => normalized(value) === normalized(genre));
  if (!categoryKey || !profileKey || !genreKey) {
    throw new Error(label + " · catégorie, profil ou genre inconnu.");
  }
  if (/[{}]/.test(phrase.replace(/\{\{|\}\}|\{prenom\}/g, ""))) {
    throw new Error(label + " · utilisez {prenom} pour le prénom.");
  }
  return [categoryKey, profileKey, genreKey, phrase];
}

function checkedRows(rows, firstNumber, label) {
  const valid = [];
  let skipped = 0;
  rows.forEach((row, index) => {
    const result = validatedRow(row, label + " " + (index + firstNumber));
    if (result) valid.push(result);
    else skipped++;
  });
  return { valid, skipped };
}

async function csvRows(file) {
  if (file.size > 10 * 1024 * 1024) throw new Error("Choisissez un CSV de 10 Mo maximum.");
  const content = new TextDecoder("utf-8", { fatal: true }).decode(await file.arrayBuffer());
  const firstLine = content.split(/\r?\n/, 1)[0];
  const { data, errors } = Papa.parse(content, {
    delimiter: firstLine.includes(";") ? ";" : ",",
    skipEmptyLines: "greedy"
  });
  if (errors.length) throw new Error("Le fichier CSV contient des guillemets mal fermés.");
  const headers = (data.shift() ?? []).map(field => field.trim());
  if (new Set(headers).size !== headers.length || !fields.every(field => headers.includes(field))) {
    throw new Error("Colonnes attendues : categorie, profil, genre, texte.");
  }
  const indexes = fields.map(field => headers.indexOf(field));
  const rows = data.map((row, index) => {
    if (row.length !== headers.length) throw new Error("Ligne " + (index + 2) + " · nombre de colonnes incorrect.");
    return indexes.map(column => row[column]);
  });
  return checkedRows(rows, 2, "Ligne");
}

async function dbRows(file) {
  if (file.size > 20 * 1024 * 1024) throw new Error("Choisissez une base de 20 Mo maximum.");
  const SQL = await sqlite;
  const incoming = new SQL.Database(new Uint8Array(await file.arrayBuffer()));
  try {
    const result = incoming.exec("SELECT categorie, profil, genre, texte FROM appreciations");
    return checkedRows(result[0]?.values ?? [], 1, "Entrée");
  } finally {
    incoming.close();
  }
}

function makeBank(db) {
  const result = {};
  const rows = db.exec("SELECT categorie, profil, genre, texte FROM appreciations")[0]?.values ?? [];
  for (const [category, profile, genre, phrase] of rows) {
    ((result[category] ??= {})[profile] ??= {})[genre] ??= [];
    result[category][profile][genre].push(phrase);
  }
  return result;
}

async function database(action, write = false) {
  const [SQL, initial, store] = await Promise.all([sqlite, seedDatabase, persistentStore]);
  return new Promise((resolve, reject) => {
    const transaction = store.transaction("files", write ? "readwrite" : "readonly");
    const files = transaction.objectStore("files");
    const request = files.get("appreciations.db");
    let result;
    let failure;
    request.onsuccess = () => {
      let db;
      try {
        db = new SQL.Database(new Uint8Array(request.result ?? initial));
        result = action(db);
        if (write) files.put(db.export(), "appreciations.db");
      } catch (error) {
        failure = error;
        transaction.abort();
      } finally {
        db?.close();
      }
    };
    transaction.oncomplete = () => resolve(result);
    transaction.onabort = () => reject(failure ?? transaction.error ?? new Error("Écriture locale impossible."));
  });
}

function saveRows(rows, excludeDuplicates) {
  return database(db => {
    const insert = db.prepare("INSERT INTO appreciations(categorie, profil, genre, texte) VALUES (?, ?, ?, ?)");
    const existing = excludeDuplicates ? new Set(
      (db.exec("SELECT categorie, profil, genre, texte FROM appreciations")[0]?.values ?? []).map(row => JSON.stringify(row))
    ) : null;
    let imported = 0;
    try {
      db.run("BEGIN");
      for (const row of rows) {
        const signature = JSON.stringify(row);
        if (existing?.has(signature)) continue;
        insert.run(row);
        existing?.add(signature);
        imported++;
      }
      db.run("COMMIT");
    } finally {
      insert.free();
    }
    return { bank: makeBank(db), imported };
  }, true);
}
