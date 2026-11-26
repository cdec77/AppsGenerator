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
const observations = {
  "Resultats": [
    "les notions ont été assimilées avec une remarquable précision et les résultats obtenus ont confirmé une maîtrise solide des compétences évaluées",
    "des résultats très réguliers ont été obtenus et les connaissances ont été restituées avec clarté dans les exercices comme dans les évaluations",
    "les objectifs essentiels ont été atteints et les acquis ont été mobilisés avec une justesse satisfaisante dans la plupart des situations",
    "les résultats obtenus sont globalement corrects et les notions principales ont été comprises, malgré quelques imprécisions dans les justifications",
    "des acquis ont été constatés, mais leur mobilisation reste irrégulière dès que les situations demandent davantage d’autonomie",
    "des progrès ponctuels ont été observés, mais plusieurs notions restent fragiles et les erreurs se répètent dans les exercices d’application",
    "quelques acquis ont été repérés, mais des lacunes importantes ont été relevées dans la compréhension et la restitution des notions",
    "les compétences fondamentales ont encore été peu mobilisées et les résultats obtenus montrent qu’une reprise progressive des bases est nécessaire"
  ],
  "Travail": [
    "un travail approfondi, rigoureux et soigné a été fourni avec constance, et les difficultés ont été abordées avec méthode et autonomie",
    "un travail sérieux et régulier a été fourni, avec un soin apprécié dans la préparation, la rédaction et la vérification des réponses",
    "les tâches demandées ont été menées à bien avec application et les corrections ont généralement été exploitées pour améliorer la méthode",
    "l’essentiel du travail a été réalisé et un réel souci de bien faire a été observé, même si la préparation reste parfois inégale",
    "des efforts ont été fournis, mais le travail manque encore de régularité et plusieurs tâches auraient gagné à être approfondies",
    "une implication a été observée par moments, mais le manque de méthode a limité la qualité du travail et la précision des réponses",
    "le travail fourni a été trop irrégulier pour consolider les apprentissages, et plusieurs tâches essentielles ont été rendues incomplètes",
    "trop peu de tâches ont été menées à terme et les habitudes de préparation, de révision et d’organisation restent à construire"
  ],
  "Participation": [
    "des interventions pertinentes ont été appréciées et les échanges ont été enrichis par une écoute attentive et une argumentation précise",
    "une participation active a été remarquée et les prises de parole ont régulièrement contribué à faire progresser les échanges",
    "des interventions adaptées ont été entendues et les échanges ont été suivis avec attention, même lorsque la parole a été moins fréquente",
    "la participation a été convenable quand la parole a été sollicitée, avec des réponses généralement claires et en lien avec les activités",
    "quelques interventions pertinentes ont été observées, mais la participation est demeurée trop discrète pour rendre la réflexion pleinement visible",
    "de courtes prises de parole ont été relevées, mais l’implication est restée irrégulière et les réponses ont souvent manqué de développement",
    "peu d’interventions spontanées ont été entendues et les occasions de poser une question ou de proposer un raisonnement ont rarement été saisies",
    "les occasions de participer ont été peu investies et un accompagnement est nécessaire pour prendre progressivement confiance à l’oral"
  ],
  "Conseils": [
    "les démarches les plus exigeantes ont été abordées avec assurance et les méthodes employées se sont révélées efficaces dans des situations variées",
    "des méthodes de travail efficaces ont été mises en place et leur régularité a permis de confirmer la qualité des acquis",
    "des habitudes utiles ont été acquises et les corrections ont généralement été comprises, ce qui donne de bons repères pour la suite",
    "des méthodes adaptées ont été utilisées dans les tâches courantes, mais la relecture et la préparation pourraient être rendues plus systématiques",
    "des efforts de révision ont été constatés, mais le travail a parfois été entrepris trop tard pour permettre une assimilation durable",
    "plusieurs erreurs ont été corrigées avec aide, mais elles ont parfois été reproduites faute d’entraînement et de relecture régulière",
    "des difficultés récurrentes ont été relevées dans l’organisation des révisions et l’utilisation des corrections pour progresser",
    "les méthodes de base ont été peu mises en pratique et il paraît nécessaire de reconstruire des habitudes de travail accessibles et régulières"
  ],
  "Comportement": [
    "une attitude exemplaire a été appréciée, et le respect des règles comme la qualité de l’écoute ont favorisé le travail collectif",
    "un comportement respectueux et coopératif a été remarqué, et les activités collectives ont été abordées avec beaucoup de sérieux",
    "les règles de vie ont été respectées et une attitude calme et constructive a été observée dans la plupart des activités",
    "le cadre de la classe a été globalement respecté, malgré quelques moments où l’attention aurait pu être mieux maintenue",
    "les consignes ont généralement été suivies, mais plusieurs rappels ont été nécessaires pour maintenir une écoute régulière",
    "des efforts de concentration ont été observés, mais les distractions ont parfois gêné le déroulement du travail individuel ou collectif",
    "des rappels répétés ont été nécessaires pour retrouver le calme, respecter les consignes et préserver l’attention du groupe",
    "le déroulement des activités a été perturbé à plusieurs reprises, ce qui appelle des efforts soutenus pour retrouver un cadre propice au travail"
  ],
  "Bilan Complet": [
    "des résultats remarquables ont été obtenus grâce à un travail constant, et la pertinence des interventions a enrichi les apprentissages du groupe",
    "des acquis solides ont été confirmés, soutenus par un travail régulier, une participation constructive et une attitude appréciée en classe",
    "les objectifs de la période ont été globalement atteints grâce à des efforts réguliers, et l’implication dans les activités a été satisfaisante",
    "le bilan est correct dans l’ensemble, avec des acquis utiles et un travail généralement sérieux, malgré une implication encore variable selon les activités",
    "des progrès ont été observés, mais le bilan demeure inégal en raison d’un travail irrégulier et d’acquis qui demandent à être consolidés",
    "des efforts ont été relevés dans certaines activités, mais les difficultés persistent dans les résultats, la méthode et la régularité du travail",
    "quelques points d’appui ont été repérés, mais les acquis restent très fragiles et l’investissement demeure trop irrégulier pour les consolider",
    "les difficultés se sont accumulées au cours de la période, et les résultats comme le travail fourni montrent qu’une reprise progressive est nécessaire"
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

const nextSteps = {
  Resultats: [
    ["approfondir les raisonnements en justifiant chaque étape", "s’entraîner à mobiliser les acquis dans des situations nouvelles", "consolider la précision des réponses par une relecture systématique", "savoir expliquer les démarches avec clarté"],
    ["reprendre les erreurs qui reviennent dans les évaluations", "s’entraîner sur les notions encore hésitantes", "consolider les acquis en reprenant les exercices corrigés", "mieux justifier les réponses avant de passer à des exercices plus complexes"],
    ["reprendre les notions essentielles une à une", "s’entraîner régulièrement sur des exercices courts et corrigés", "demander un éclaircissement dès qu’une notion reste mal comprise", "vérifier les premières étapes d’un raisonnement avant de poursuivre"]
  ],
  Travail: [
    ["approfondir les tâches et expliciter les choix de méthode", "continuer à s’investir avec constance dans le travail personnel", "poursuivre les efforts de préparation et de relecture", "s’organiser pour mener des travaux plus autonomes"],
    ["s’appliquer à vérifier les réponses avant de rendre le travail", "planifier les tâches pour gagner en régularité", "soigner la présentation et approfondir les réponses", "reprendre les corrections pour rendre la méthode plus efficace"],
    ["s’organiser autour de tâches courtes et régulières", "préparer le matériel et terminer le travail commencé", "s’appliquer à reprendre les exercices avec l’aide proposée", "planifier les tâches essentielles avant d’en aborder de nouvelles"]
  ],
  Participation: [
    ["continuer à argumenter et à écouter les réponses du groupe", "s’impliquer dans les échanges en reformulant les idées complexes", "approfondir les interventions en donnant des exemples précis", "aider le groupe à comparer les démarches proposées"],
    ["prendre la parole plus régulièrement pendant les activités", "s’entraîner à expliquer un raisonnement en quelques phrases", "poser des questions précises lorsque la consigne reste incertaine", "s’impliquer davantage en préparant une intervention avant les échanges"],
    ["s’exprimer d’abord sur des réponses courtes et préparées", "poser une question dès qu’une difficulté empêche de suivre", "essayer d’intervenir à un moment choisi de chaque séance", "s’impliquer progressivement dans les échanges en petit groupe"]
  ],
  Conseils: [
    ["s’entraîner à transférer les méthodes vers des tâches nouvelles", "approfondir les connaissances en confrontant plusieurs démarches", "continuer à réviser et à justifier les choix de méthode", "poursuivre les efforts tout en fixant des objectifs plus exigeants"],
    ["planifier les révisions sur plusieurs séances courtes", "s’entraîner à refaire seul les exercices corrigés", "prendre des notes plus structurées et les relire régulièrement", "consolider les notions hésitantes avant chaque évaluation"],
    ["reprendre une notion fondamentale à la fois", "s’appuyer sur les corrections pour refaire les premiers exercices", "préparer un calendrier simple de révisions et s’y tenir", "demander de l’aide pour cerner précisément les difficultés"]
  ],
  Comportement: [
    ["continuer à respecter la parole des autres pendant les échanges", "poursuivre les efforts d’écoute et de coopération", "s’impliquer dans le maintien d’un climat calme et respectueux", "savoir prendre des initiatives sans gêner le travail du groupe"],
    ["se concentrer dès le début des consignes", "s’appliquer à limiter les échanges hors sujet", "respecter les temps de travail individuel et d’échange", "se recentrer plus vite lorsqu’une distraction survient"],
    ["se recentrer à chaque début d’activité et écouter les consignes", "respecter les tours de parole et limiter les interruptions", "s’entraîner à retrouver le calme avant de reprendre le travail", "s’appuyer sur des règles claires pour coopérer plus sereinement"]
  ],
  "Bilan Complet": [
    ["poursuivre les efforts tout en approfondissant les raisonnements", "continuer à s’investir avec la même régularité dans le travail et les échanges", "se fixer des objectifs plus exigeants en conservant une méthode rigoureuse", "consolider les acquis et les mobiliser dans des situations plus complexes"],
    ["travailler plus régulièrement et mieux exploiter les corrections", "consolider les acquis encore fragiles par un entraînement ciblé", "s’organiser avec davantage de constance et participer plus volontiers", "renforcer la méthode et justifier les raisonnements avec plus de précision"],
    ["reprendre les bases et planifier un travail court mais régulier", "s’appuyer sur des objectifs accessibles et des corrections reprises pas à pas", "se responsabiliser en terminant les tâches essentielles et en demandant de l’aide", "redoubler d’efforts pour consolider les apprentissages et s’impliquer en classe"]
  ]
};

const directAddress = /(?<![\p{L}\p{M}])(?:tu|te|toi|ton|ta|tes|vous|votre|vos|l[’']élève)(?![\p{L}\p{M}])|(?:^|[.!?]\s+)(?:continue|poursuis|poursuivez|travaille|travaillez|révise|révisez|fais|faites|reste|restez|essaie|essayez)\b/iu;

function namePattern() {
  const escaped = student.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return `(?<![\\p{L}\\p{M}])${escaped}(?![\\p{L}\\p{M}])`;
}

function withStudent(phrase, template = false) {
  const feminine = student.genre === "féminin";
  const filled = phrase.replace(/\{([^{}|]+)\|([^{}|]+)\}/g, (_, masculine, female) => feminine ? female : masculine);
  const references = new RegExp(`(?:[dD][’']|\\bde\\s+)?(?:\\{prenom\\}|${namePattern()})`, "giu");
  const first = !draft.value.trim();
  let named = false;
  const rendered = filled.replace(references, (match, offset) => {
    const prefix = /^(?:[dD][’']|de\s+)/iu.exec(match)?.[0] ?? "";
    const atStart = !filled.slice(0, offset).trim() || /[.!?…]\s*$/u.test(filled.slice(0, offset));
    if (first && !named && !/[.!?…]\s+\S/u.test(filled.slice(0, offset) + "X")) {
      named = true;
      return prefix + student.name;
    }
    if (prefix) return atStart ? "De sa part" : "de sa part";
    if (!atStart && /\b(?:à|pour|avec|chez|par|sur)\s*$/iu.test(filled.slice(0, offset))) {
      return feminine ? "elle" : "lui";
    }
    if (atStart) return feminine ? "Elle" : "Il";
    return feminine ? "elle" : "il";
  });
  if (template && first && !named) return `Pour ${student.name}, ${rendered[0].toLocaleLowerCase("fr")}${rendered.slice(1)}`;
  return rendered;
}

function editorialPhrases(index) {
  const observation = observations[category][index];
  const level = index < 3 ? 0 : index < 5 ? 1 : 2;
  const [first, second, third, fourth] = nextSteps[category][level];
  const capitalized = observation[0].toLocaleUpperCase("fr") + observation.slice(1);
  return [
    `Il a été constaté que ${observation}. Il convient de ${first} afin de poursuivre la progression.`,
    `Au fil de la période, ${observation}. Pour progresser, {il pourra|elle pourra} ${second}.`,
    `${capitalized}. Pour la suite, il sera nécessaire de ${third}.`,
    `Le bilan montre que ${observation}. Pour la suite, {il devra rester engagé|elle devra rester engagée} dans les apprentissages et ${fourth}.`
  ];
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
  const profileIndex = profiles.findIndex(([value]) => value === profile);
  const custom = [...new Set(bank?.[category]?.[profile]?.[student.genre] ?? [])].filter(phrase =>
    phrase.trim().split(/\s+/u).length >= 24 && !directAddress.test(phrase) &&
    /\b(?:devoir|doit|devra|pouvoir|peut|pourra|savoir|sait|faudra|convient)\b/iu.test(phrase)
  );
  offered = editorialPhrases(profileIndex);
  if (custom.length) offered[3] = custom[Math.floor(Math.random() * custom.length)];
  renderSuggestions();
  byId("suggestion-hint").hidden = true;
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
  principalForm.reset();
  principalDraft.value = "";
  byId("copy-principal").disabled = true;
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
  if (directAddress.test(phrase)) {
    byId("phrase-voice-info").textContent = "Reformulez à la troisième personne ou avec une tournure impersonnelle.";
    customPhrase.focus();
    return;
  }
  appendPhrase(withStudent(phrase));
  customPhrase.value = "";
  byId("add-custom").disabled = true;
  customPhrase.focus();
});

draft.addEventListener("input", () => {
  byId("copy").disabled = !draft.value.trim();
  renderSuggestions();
});
function bindCopy(button, field, message) {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(field.value);
      status(message);
    } catch {
      field.focus();
      field.select();
      status("Texte sélectionné. Utilisez la commande de copie de votre appareil.");
    }
  });
}

bindCopy(byId("copy"), draft, "Appréciation copiée.");

const principalSummaries = [
  "Un bilan d’ensemble remarquable a été établi grâce à la solidité des acquis, à la constance du travail et à la qualité de l’implication, et {il pourra|elle pourra} poursuivre sur cette lancée en approfondissant encore ses méthodes.",
  "Un bilan d’ensemble très satisfaisant a été établi à partir de résultats solides et d’efforts réguliers, et {il pourra|elle pourra} s’appuyer sur cette dynamique pour gagner encore en autonomie.",
  "Le bilan d’ensemble est satisfaisant et des acquis solides ont été constatés, ce qui devrait permettre de poursuivre les progrès en maintenant la régularité du travail et en exploitant davantage les corrections.",
  "Un bilan d’ensemble convenable a été établi, avec des acquis sur lesquels il est possible de s’appuyer, et {il devra|elle devra} s’organiser avec davantage de constance pour consolider les progrès.",
  "Des acquis ont été constatés au cours de la période, mais le bilan demeure inégal et il faudra renforcer la régularité du travail pour mieux mobiliser les connaissances dans les différentes disciplines.",
  "Des efforts ont été relevés, mais le bilan d’ensemble reste fragile et {il devra|elle devra} s’organiser autour d’objectifs précis, reprendre les corrections et demander de l’aide dès que les difficultés persistent.",
  "Quelques points d’appui ont été repérés, mais des difficultés importantes ont été constatées et il paraît nécessaire de reprendre les acquis essentiels, de planifier un entraînement régulier et de s’appuyer sur l’accompagnement proposé.",
  "Les difficultés relevées dans le bilan d’ensemble appellent une reprise progressive des bases, et {il devra|elle devra} s’investir dans des tâches courtes et régulières pour retrouver des repères et consolider les premiers acquis."
];

const principalForm = byId("principal-form");
const principalProfile = byId("principal-profile");
const principalDraft = byId("principal-draft");
for (const [profile, label] of profiles) {
  const option = document.createElement("option");
  option.value = profile;
  option.textContent = label;
  principalProfile.append(option);
}

principalForm.addEventListener("submit", event => {
  event.preventDefault();
  const index = profiles.findIndex(([profile]) => profile === principalProfile.value);
  if (index < 0) return;
  principalDraft.value = principalSummaries[index].replace(/\{([^{}|]+)\|([^{}|]+)\}/g,
    (_, masculine, feminine) => student.genre === "féminin" ? feminine : masculine);
  byId("copy-principal").disabled = false;
  principalDraft.focus();
  status("Synthèse du professeur principal générée.");
});

principalDraft.addEventListener("input", () => {
  byId("copy-principal").disabled = !principalDraft.value.trim();
});
bindCopy(byId("copy-principal"), principalDraft, "Synthèse copiée.");

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
