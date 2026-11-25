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
const additionalPhrases = {
  "Resultats": [
    [
      "Les acquis de {prenom} sont solides.",
      "{prenom} maîtrise très bien les notions évaluées.",
      "Les évaluations témoignent d’une excellente maîtrise."
    ],
    [
      "{prenom} obtient de très bons résultats.",
      "Les acquis de {prenom} sont bien maîtrisés.",
      "Les résultats sont très réguliers."
    ],
    [
      "Les acquis essentiels sont bien maîtrisés.",
      "{prenom} atteint les objectifs attendus.",
      "Les évaluations montrent une bonne compréhension."
    ],
    [
      "{prenom} obtient des résultats corrects.",
      "Les notions principales sont comprises.",
      "Les acquis sont globalement suffisants."
    ],
    [
      "Les acquis de {prenom} demandent encore à être consolidés.",
      "Les résultats sont passables et peuvent progresser.",
      "Certaines notions restent à revoir."
    ],
    [
      "{prenom} rencontre des difficultés sur plusieurs notions.",
      "Les acquis manquent de solidité.",
      "Les résultats nécessitent davantage de consolidation."
    ],
    [
      "Les évaluations révèlent des lacunes importantes.",
      "{prenom} doit reprendre plusieurs notions essentielles.",
      "Les acquis restent très incertains."
    ],
    [
      "Les bases essentielles sont encore à acquérir.",
      "{prenom} rencontre de grandes difficultés dans les évaluations.",
      "Une reprise des notions fondamentales est nécessaire."
    ]
  ],
  "Travail": [
    [
      "Le travail de {prenom} est soigné et constant.",
      "{prenom} mène les tâches avec rigueur et autonomie.",
      "La qualité du travail est remarquable."
    ],
    [
      "{prenom} travaille avec constance et soin.",
      "Le travail fourni est sérieux et approfondi.",
      "{prenom} s’investit régulièrement dans les tâches."
    ],
    [
      "Le travail demandé est réalisé avec soin.",
      "{prenom} s’applique de façon régulière.",
      "Le travail fourni répond aux attentes."
    ],
    [
      "{prenom} réalise l’essentiel du travail demandé.",
      "Les tâches sont généralement menées à bien.",
      "Le travail est correct dans l’ensemble."
    ],
    [
      "Le travail gagnerait en régularité.",
      "{prenom} devrait approfondir davantage les tâches.",
      "Le soin apporté au travail reste inégal."
    ],
    [
      "{prenom} doit mieux organiser son travail.",
      "Les efforts fournis restent irréguliers.",
      "Le travail demande davantage de méthode."
    ],
    [
      "Une remise en ordre des habitudes de travail est nécessaire.",
      "{prenom} gagnerait à reprendre les tâches pas à pas.",
      "Le travail fourni reste très incomplet."
    ],
    [
      "{prenom} doit reprendre le travail sur des objectifs accessibles.",
      "Les tâches essentielles doivent être réalisées plus régulièrement.",
      "Un accompagnement rapproché aiderait à reprendre les habitudes de travail."
    ]
  ],
  "Participation": [
    [
      "Les interventions de {prenom} enrichissent les échanges.",
      "{prenom} prend la parole avec justesse et écoute les autres.",
      "Les contributions orales font avancer le groupe."
    ],
    [
      "{prenom} contribue régulièrement aux échanges.",
      "Les prises de parole sont fréquentes et pertinentes.",
      "{prenom} s’implique avec sérieux dans les discussions."
    ],
    [
      "Les interventions de {prenom} sont pertinentes.",
      "{prenom} prend part aux échanges quand l’occasion se présente.",
      "La participation est régulière et constructive."
    ],
    [
      "{prenom} participe quand on sollicite son avis.",
      "Les interventions sont globalement adaptées.",
      "La participation répond aux attentes lors des activités."
    ],
    [
      "{prenom} gagnerait à prendre plus souvent la parole.",
      "Les interventions sont encore peu nombreuses.",
      "La participation pourrait être plus régulière."
    ],
    [
      "{prenom} doit s’engager davantage dans les échanges.",
      "Une prise de parole plus régulière est attendue.",
      "L’implication dans les discussions reste en retrait."
    ],
    [
      "{prenom} intervient rarement dans les échanges.",
      "Une participation plus active est nécessaire.",
      "Les occasions de prendre la parole sont encore peu saisies."
    ],
    [
      "L’implication dans les activités de classe est très limitée.",
      "{prenom} gagnerait à commencer par de courtes interventions.",
      "Une contribution simple à chaque séance serait un premier objectif."
    ]
  ],
  "Conseils": [
    [
      "{prenom} peut se fixer des objectifs plus ambitieux.",
      "Approfondir les notions serait une bonne façon de poursuivre.",
      "{prenom} peut continuer à développer son autonomie."
    ],
    [
      "{prenom} peut conserver les méthodes qui lui réussissent.",
      "Il serait utile de poursuivre avec la même régularité.",
      "{prenom} gagnerait à approfondir les points déjà bien maîtrisés."
    ],
    [
      "{prenom} peut consolider ses acquis en revoyant ses corrections.",
      "Il serait utile de continuer les révisions régulières.",
      "{prenom} peut s’appuyer sur ses méthodes actuelles pour progresser."
    ],
    [
      "{prenom} gagnerait à maintenir un rythme de travail régulier.",
      "Il serait utile de revoir les points difficiles après chaque séance.",
      "Des révisions courtes et fréquentes aideraient à consolider les acquis."
    ],
    [
      "{prenom} gagnerait à mieux planifier ses révisions.",
      "Relire les corrections permettrait d’éviter certaines erreurs.",
      "Un travail plus régulier aiderait à franchir un palier."
    ],
    [
      "{prenom} peut commencer par reprendre les exercices corrigés.",
      "Mieux organiser les étapes du travail faciliterait les progrès.",
      "Il serait utile de demander de l’aide dès qu’une difficulté apparaît."
    ],
    [
      "{prenom} doit retravailler les notions de base régulièrement.",
      "Reprendre les exercices simples aiderait à retrouver des repères.",
      "Un accompagnement et des objectifs courts seraient utiles."
    ],
    [
      "{prenom} devrait reprendre une notion essentielle à la fois.",
      "Un plan de travail avec des étapes courtes est nécessaire.",
      "Il est important de solliciter de l’aide et de reprendre les bases."
    ]
  ],
  "Comportement": [
    [
      "{prenom} contribue à un climat de classe serein.",
      "L’attitude de {prenom} favorise le travail du groupe.",
      "Le respect des règles et des autres est exemplaire."
    ],
    [
      "{prenom} adopte une attitude constructive en classe.",
      "Le comportement est respectueux et constant.",
      "{prenom} favorise le bon déroulement des activités."
    ],
    [
      "{prenom} respecte les règles de la classe.",
      "L’attitude en classe est adaptée et respectueuse.",
      "Le comportement contribue au bon déroulement du travail."
    ],
    [
      "{prenom} respecte globalement le cadre de la classe.",
      "L’attitude est généralement adaptée aux activités.",
      "Le comportement répond dans l’ensemble aux attentes."
    ],
    [
      "{prenom} doit rester davantage à l’écoute des consignes.",
      "Une attention plus régulière aux règles est attendue.",
      "L’attitude gagnerait à être plus constante."
    ],
    [
      "{prenom} doit mieux respecter le cadre de travail.",
      "Il est nécessaire de canaliser les interventions.",
      "Une attitude plus posée permettrait de mieux travailler."
    ],
    [
      "{prenom} doit faire des efforts réguliers pour respecter les règles.",
      "Le comportement gêne trop souvent le déroulement des activités.",
      "Un effort soutenu est nécessaire pour retrouver un cadre de travail serein."
    ],
    [
      "{prenom} doit changer rapidement d’attitude en classe.",
      "Le respect des règles communes doit devenir une priorité.",
      "Un cadre clair et un suivi régulier sont nécessaires."
    ]
  ]
};
const byId = id => document.getElementById(id);
const form = byId("student-form");
const nameField = byId("name");
const suggestions = byId("suggestions");
const customPhrase = byId("custom-phrase");
const draft = byId("draft");
const csv = byId("csv");
let bank = null;
let student = null;
let category = "";
let offered = [];

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

function withStudent(phrase, template = false) {
  const escapedName = student.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const eitherName = `(?<![\\p{L}\\p{M}])${escapedName}(?![\\p{L}\\p{M}])`;
  const token = template ? "\\{\\{|\\}\\}|\\{prenom\\}|" : "";
  const occurrences = new RegExp(`${token}(?:[dD][’'])?(?:\\{prenom\\}|${eitherName})`, "giu");
  let nameAllowed = !draft.value.trim();
  return phrase.replace(occurrences, (match, offset) => {
    if (match === "{{") return "{";
    if (match === "}}") return "}";
    const contraction = /^[dD][’']/.test(match) && match.length > 2 ? match.slice(0, 2) : "";
    const source = match.slice(contraction.length);
    if (nameAllowed && !/[.!?…]\s+\S/u.test(phrase.slice(0, offset) + "X")) {
      nameAllowed = false;
      return contraction + (source.toLowerCase() === "{prenom}" ? student.name : source);
    }
    if (category === "Conseils" && template && !contraction &&
        /^(?:Poursuis|Continue|Il faut maintenir)/u.test(phrase) &&
        /[.!?,]/u.test(phrase.charAt(offset + match.length))) return "";
    const uppercase = offset === 0 || /[.!?…]\s*$/u.test(phrase.slice(0, offset));
    if (contraction) return uppercase ? "De l’élève" : "de l’élève";
    return uppercase ? "L’élève" : "l’élève";
  }).replace(/[ \t]+([,.])/g, "$1");
}

function renderSuggestions() {
  suggestions.replaceChildren();
  offered.forEach((phrase, index) => {
    const item = document.createElement("li");
    const text = document.createElement("p");
    const add = document.createElement("button");
    text.textContent = withStudent(phrase, true);
    add.type = "button";
    add.className = "quiet";
    add.textContent = "Ajouter";
    add.setAttribute("aria-label", "Ajouter la proposition " + (index + 1));
    add.addEventListener("click", () => appendPhrase(withStudent(phrase, true), index));
    item.append(text, add);
    suggestions.append(item);
  });
}

function appendPhrase(phrase, index) {
  draft.value = [draft.value.trim(), phrase].filter(Boolean).join(" ");
  byId("copy").disabled = false;
  renderSuggestions();
  if (index !== undefined) suggestions.children[index].querySelector("button").focus();
  status("Phrase ajoutée à l’appréciation.");
}

function generate(profile) {
  const available = new Set(bank?.[category]?.[profile]?.[student.genre] ?? []);
  const profileIndex = profiles.findIndex(([value]) => value === profile);
  if (bank && available.size < 4) {
    for (const phrase of additionalPhrases[category]?.[profileIndex] ?? []) available.add(phrase);
  }
  const pool = [...available];
  for (let index = pool.length - 1; index > 0; index--) {
    const random = Math.floor(Math.random() * (index + 1));
    [pool[index], pool[random]] = [pool[random], pool[index]];
  }
  offered = pool.slice(0, 4);
  renderSuggestions();
  byId("suggestion-hint").hidden = offered.length > 0;
  byId("suggestion-hint").textContent = bank
    ? "Aucune phrase trouvée pour cette sélection."
    : "La banque de phrases est indisponible.";
  status("");
}

function clearSuggestions() {
  offered = [];
  renderSuggestions();
  byId("suggestion-hint").hidden = false;
  byId("suggestion-hint").textContent = "Choisissez un profil pour voir les propositions.";
}

function chooseCategory(value) {
  category = value;
  clearSuggestions();
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
  cancelDictation();
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
  cancelDictation();
  clearSuggestions();
  customPhrase.value = "";
  byId("add-custom").disabled = true;
  draft.value = "";
  byId("copy").disabled = true;
  byId("categories").querySelector('[aria-pressed="true"]')?.setAttribute("aria-pressed", "false");
  byId("profiles").replaceChildren();
  byId("choose-category").hidden = false;
  byId("editor").hidden = true;
  byId("home").hidden = false;
  status("");
  nameField.focus();
});

const customForm = byId("custom-form");
customPhrase.addEventListener("input", () => {
  byId("add-custom").disabled = !customPhrase.value.trim();
});
customForm.addEventListener("submit", event => {
  event.preventDefault();
  const phrase = customPhrase.value.trim();
  if (!phrase) return;
  cancelDictation();
  appendPhrase(withStudent(phrase));
  customPhrase.value = "";
  byId("add-custom").disabled = true;
  customPhrase.focus();
});

draft.addEventListener("input", () => {
  byId("copy").disabled = !draft.value.trim();
  renderSuggestions();
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

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let activeDictation = null;

function cancelDictation() {
  if (!activeDictation) return;
  const { recognition, finish } = activeDictation;
  finish();
  recognition.abort();
}

function enableDictation(buttonId, infoId, field, isName = false) {
  const button = byId(buttonId);
  const info = byId(infoId);
  const label = button.textContent;
  const defaultMessage = "Le navigateur peut traiter la voix via un service en ligne.";
  button.setAttribute("aria-pressed", "false");
  info.textContent = SpeechRecognition
    ? defaultMessage
    : "Vous pouvez saisir le texte ou utiliser le micro du clavier, si disponible.";

  button.addEventListener("click", () => {
    if (!SpeechRecognition) {
      field.focus();
      return;
    }
    if (activeDictation?.button === button) {
      activeDictation.recognition.stop();
      return;
    }
    cancelDictation();
    const recognition = new SpeechRecognition();
    recognition.lang = "fr-FR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    function finish(message = defaultMessage) {
      activeDictation = null;
      button.setAttribute("aria-pressed", "false");
      button.textContent = label;
      info.textContent = message;
    }

    activeDictation = { recognition, button, finish };
    recognition.onresult = event => {
      if (activeDictation?.recognition !== recognition) return;
      const transcript = Array.from(event.results, result => result[0].transcript).join(" ").trim();
      if (!transcript) return;
      if (isName) {
        const name = transcript.replace(/[.!?,;:…]+$/u, "").trim().slice(0, field.maxLength);
        field.value = name.charAt(0).toLocaleUpperCase("fr") + name.slice(1);
      } else {
        const start = field.selectionStart ?? field.value.length;
        const end = field.selectionEnd ?? start;
        const before = field.value.slice(0, start);
        const after = field.value.slice(end);
        const left = before && !/\s$/u.test(before) ? " " : "";
        const right = after && !/^[\s.,!?;:]/u.test(after) ? " " : "";
        field.setRangeText(left + transcript + right, start, end, "end");
      }
      field.dispatchEvent(new Event("input", { bubbles: true }));
      finish("Dictée transcrite. Vous pouvez corriger le texte.");
      field.focus();
    };
    recognition.onerror = event => {
      if (activeDictation?.recognition !== recognition) return;
      const messages = {
        "not-allowed": "Microphone refusé. Autorisez-le dans le navigateur ou saisissez le texte.",
        "audio-capture": "Microphone indisponible. Vous pouvez saisir le texte.",
        "no-speech": "Aucune parole détectée. Réessayez ou saisissez le texte."
      };
      finish(messages[event.error] ?? "Dictée indisponible. Vous pouvez saisir le texte ou utiliser le micro du clavier.");
    };
    recognition.onend = () => {
      if (activeDictation?.recognition === recognition) finish();
    };

    button.textContent = "Arrêter la dictée";
    button.setAttribute("aria-pressed", "true");
    info.textContent = "Écoute en cours…";
    try {
      recognition.start();
    } catch {
      finish("Impossible de démarrer la dictée. Vous pouvez saisir le texte.");
    }
  });
}

enableDictation("dictate-name", "name-voice-info", nameField, true);
enableDictation("dictate-phrase", "phrase-voice-info", customPhrase);
