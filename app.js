"use strict";

const categories = [
  ["Resultats", "Résultats"], ["Travail", "Travail"], ["Participation", "Participation"],
  ["Conseils", "Conseils"], ["Comportement", "Comportement"], ["Bilan Complet", "Bilan complet"]
];
const profiles = [
  ["Excellent", "Excellent", "#86db9a"], ["Très satisfaisant", "Très satisfaisant", "#9fe4a2"],
  ["Satisfaisant", "Satisfaisant", "#bdeac8"], ["Convenable", "Convenable", "#ffdf84"],
  ["Juste convenable", "Juste convenable", "#ffd099"], ["Fragile", "Fragile", "#ffb77e"],
  ["Très fragile", "Très fragile", "#ffafad"], ["Grand difficulté", "Grande difficulté", "#f28f9d"]
];
const byId = id => document.getElementById(id);
const form = byId("student-form");
const nameField = byId("name");
const preview = byId("preview");
const draft = byId("draft");
const csv = byId("csv");
let bank = null;
let student = null;
let category = "";

function status(message, error = false) {
  byId("status").textContent = message;
  byId("status").dataset.error = String(error);
}

async function refreshLibrary() {
  bank = await database(makeBank);
}

const loading = refreshLibrary().catch(() => {});

function choice(list, label, callback, color) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.setAttribute("aria-pressed", "false");
  if (color) button.style.setProperty("--profile-color", color);
  button.addEventListener("click", () => {
    list.querySelector('[aria-pressed="true"]')?.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-pressed", "true");
    callback();
  });
  list.append(button);
}

function generate(profile) {
  const phrases = bank?.[category]?.[profile]?.[student.genre];
  if (!phrases?.length) {
    preview.value = "";
    byId("add").disabled = true;
    status(bank ? "Aucune phrase trouvée pour cette sélection." : "La banque de phrases est indisponible.", true);
    return;
  }
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  const replacements = { "{{": "{", "}}": "}", "{prenom}": student.name };
  preview.value = phrase.replace(/\{\{|\}\}|\{prenom\}/g, match => replacements[match]);
  byId("add").disabled = false;
  status("Suggestion prête à ajouter.");
}

function chooseCategory(value) {
  category = value;
  preview.value = "";
  byId("add").disabled = true;
  byId("choose-category").hidden = true;
  const list = byId("profiles");
  list.replaceChildren();
  for (const [profile, label, color] of profiles) {
    choice(list, label, () => generate(profile), color);
  }
  status("");
}

for (const [value, label] of categories) {
  choice(byId("categories"), label, () => chooseCategory(value));
}

form.addEventListener("submit", async event => {
  event.preventDefault();
  const name = nameField.value.trim();
  if (!name) {
    status("Veuillez entrer un prénom.", true);
    nameField.focus();
    return;
  }
  student = { name, genre: new FormData(form).get("genre") };
  byId("student").textContent = "Appréciation de " + name;
  byId("home").hidden = true;
  byId("editor").hidden = false;
  byId("student").focus();
  status(bank ? "" : "Chargement de la banque de phrases…");
  if (!bank) {
    const current = student;
    await loading;
    if (student === current && !category) {
      status(bank ? "" : "Impossible de charger la banque SQLite sur cet appareil.", !bank);
    }
  }
});

byId("reset").addEventListener("click", () => {
  student = null;
  category = "";
  form.reset();
  preview.value = "";
  draft.value = "";
  byId("add").disabled = true;
  byId("copy").disabled = true;
  byId("categories").querySelector('[aria-pressed="true"]')?.setAttribute("aria-pressed", "false");
  byId("profiles").replaceChildren();
  byId("choose-category").hidden = false;
  byId("editor").hidden = true;
  byId("home").hidden = false;
  status("");
  nameField.focus();
});

byId("add").addEventListener("click", () => {
  if (!preview.value) return;
  draft.value = [draft.value.trim(), preview.value].filter(Boolean).join(" ");
  byId("copy").disabled = false;
  status("Phrase ajoutée à l’appréciation.");
});

draft.addEventListener("input", () => {
  byId("copy").disabled = !draft.value.trim();
});
byId("copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(draft.value);
    status("Appréciation copiée.");
  } catch {
    draft.focus();
    draft.select();
    status("Texte sélectionné. Utilisez la commande de copie de votre appareil.");
  }
});

const sqliteFile = byId("sqlite-file");
const importButton = byId("import");
const mergeButton = byId("merge-db");
const exportButton = byId("export-db");
importButton.addEventListener("click", () => csv.click());
mergeButton.addEventListener("click", () => sqliteFile.click());

function bindImport(input, readRows, merge) {
  input.addEventListener("change", async () => {
    const file = input.files[0];
    input.value = "";
    if (!file) return;
    importButton.disabled = mergeButton.disabled = true;
    status("Import en cours…");
    try {
      await loading;
      const { valid, skipped } = await readRows(file);
      const saved = await saveRows(valid, merge);
      bank = saved.bank;
      status(`Phrases importées : ${saved.imported}. Lignes sans texte ignorées : ${skipped}.`);
    } catch (error) {
      const message = error instanceof TypeError
        ? "Vérifiez l’encodage UTF-8 du fichier."
        : error.message;
      status("Import impossible. " + message, true);
    } finally {
      importButton.disabled = mergeButton.disabled = false;
    }
  });
}
bindImport(csv, csvRows, false);
bindImport(sqliteFile, dbRows, true);

exportButton.addEventListener("click", async () => {
  try {
    const bytes = await database(db => db.export());
    const url = URL.createObjectURL(new Blob([bytes], { type: "application/vnd.sqlite3" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "appreciations.db";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status("Base SQLite exportée.");
  } catch {
    status("Export de la base SQLite impossible.", true);
  }
});

const install = byId("install");
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  install.hidden = false;
  install.onclick = async () => {
    install.hidden = true;
    await event.prompt();
  };
});
window.addEventListener("appinstalled", () => { install.hidden = true; });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
