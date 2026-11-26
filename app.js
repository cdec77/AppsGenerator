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
    [
      "a obtenu des résultats remarquables",
      "a démontré une maîtrise précise des notions",
      "a justifié ses démarches avec rigueur",
      "a dépassé les objectifs attendus"
    ],
    [
      "a obtenu de très bons résultats",
      "a confirmé la solidité de ses acquis",
      "a mené des raisonnements précis",
      "a réussi les exercices avec constance"
    ],
    [
      "a atteint les objectifs essentiels",
      "a mobilisé ses connaissances avec justesse",
      "a démontré une bonne compréhension",
      "a obtenu des résultats satisfaisants"
    ],
    [
      "a obtenu des résultats corrects",
      "a assimilé les notions principales",
      "a montré des acquis convenables",
      "a réussi les tâches courantes"
    ],
    [
      "a obtenu des résultats irréguliers",
      "a assimilé une partie des notions",
      "a montré des acquis encore inégaux",
      "a parfois manqué de précision"
    ],
    [
      "a rencontré des difficultés dans les évaluations",
      "a mobilisé des acquis encore fragiles",
      "a commis des erreurs récurrentes",
      "a progressé sur certains exercices"
    ],
    [
      "a rencontré des difficultés importantes",
      "a restitué peu de connaissances",
      "a montré des lacunes dans les notions centrales",
      "a rarement atteint les objectifs"
    ],
    [
      "a peu mobilisé les compétences fondamentales",
      "a accumulé des lacunes importantes",
      "a rarement réussi les exercices de base",
      "a obtenu des résultats très insuffisants"
    ]
  ],
  "Travail": [
    [
      "a fourni un travail rigoureux",
      "a su approfondir les tâches",
      "a travaillé avec constance",
      "a mené les activités en autonomie"
    ],
    [
      "a travaillé avec sérieux",
      "a fourni des réponses soignées",
      "a préparé les activités avec méthode",
      "a fait preuve d’une implication soutenue"
    ],
    [
      "a fourni un travail régulier",
      "a exploité les corrections avec application",
      "a mené les tâches à bien",
      "a travaillé avec méthode"
    ],
    [
      "a réalisé l’essentiel du travail",
      "a fourni des efforts appréciables",
      "a préparé les tâches courantes",
      "a montré un soin globalement convenable"
    ],
    [
      "a fourni un travail inégal",
      "a parfois négligé la préparation",
      "a manqué de constance",
      "a rendu des réponses trop peu approfondies"
    ],
    [
      "a travaillé de manière irrégulière",
      "a manqué de méthode",
      "a fourni des efforts ponctuels",
      "a présenté un travail parfois brouillon"
    ],
    [
      "a rendu plusieurs tâches incomplètes",
      "a trop peu exploité les corrections",
      "a manqué de régularité dans les révisions",
      "a fourni un travail très fragile"
    ],
    [
      "a rarement terminé les tâches essentielles",
      "a peu préparé les activités",
      "a trop souvent négligé les corrections",
      "a fourni un travail très insuffisant"
    ]
  ],
  "Participation": [
    [
      "a enrichi les échanges",
      "a argumenté avec pertinence",
      "a écouté les autres avec attention",
      "a participé activement aux activités"
    ],
    [
      "a contribué régulièrement aux discussions",
      "a posé des questions précises",
      "a formulé des réponses pertinentes",
      "a su expliquer ses démarches"
    ],
    [
      "a participé avec sérieux",
      "a écouté les échanges attentivement",
      "a proposé des réponses adaptées",
      "a contribué de façon constructive"
    ],
    [
      "a participé quand la parole lui a été donnée",
      "a suivi les échanges",
      "a apporté des réponses généralement claires",
      "a pris part aux activités demandées"
    ],
    [
      "a pris la parole de manière ponctuelle",
      "a fait preuve de réserve",
      "a répondu surtout après sollicitation",
      "a parfois manqué d’aisance à l’oral"
    ],
    [
      "a peu développé ses interventions",
      "a rarement pris l’initiative de répondre",
      "a participé de façon irrégulière",
      "a éprouvé des difficultés à s’exprimer"
    ],
    [
      "a rarement pris la parole",
      "a peu argumenté ses réponses",
      "a saisi peu d’occasions de participer",
      "a montré une participation très limitée"
    ],
    [
      "a très peu pris part aux échanges",
      "a rarement formulé une réponse",
      "a peu sollicité d’aide à l’oral",
      "a éprouvé de grandes difficultés à intervenir"
    ]
  ],
  "Conseils": [
    [
      "a développé des méthodes efficaces",
      "a su examiner plusieurs démarches",
      "a assimilé les corrections avec précision",
      "a acquis une solide autonomie"
    ],
    [
      "a adopté des habitudes régulières",
      "a exploité les corrections avec méthode",
      "a préparé les évaluations avec sérieux",
      "a gagné en efficacité"
    ],
    [
      "a acquis des méthodes utiles",
      "a corrigé la plupart de ses erreurs",
      "a suivi les étapes avec application",
      "a montré une organisation satisfaisante"
    ],
    [
      "a utilisé des méthodes convenables",
      "a mis en œuvre les conseils les plus accessibles",
      "a commencé à structurer ses révisions",
      "a exploité une partie des corrections"
    ],
    [
      "a entrepris ses révisions de façon irrégulière",
      "a parfois commencé la préparation trop tard",
      "a peu vérifié ses réponses",
      "a manqué de méthode dans la relecture"
    ],
    [
      "a parfois reproduit des erreurs déjà corrigées",
      "a manqué d’entraînement",
      "a peiné à organiser ses révisions",
      "a eu besoin d’aide pour analyser ses erreurs"
    ],
    [
      "a peu exploité les corrections",
      "a rencontré des difficultés récurrentes de méthode",
      "a peiné à structurer les étapes du travail",
      "a rarement révisé de façon régulière"
    ],
    [
      "a peu mis en pratique les méthodes de base",
      "a rencontré de grandes difficultés à s’organiser",
      "a rarement repris les exercices corrigés",
      "a trop peu préparé les évaluations"
    ]
  ],
  "Comportement": [
    [
      "a fait preuve d’une attitude exemplaire",
      "a favorisé un climat de travail serein",
      "a coopéré avec tact",
      "a respecté les règles avec constance"
    ],
    [
      "a adopté une attitude constructive",
      "a écouté les consignes avec attention",
      "a coopéré avec sérieux",
      "a contribué au calme du groupe"
    ],
    [
      "a respecté le cadre de la classe",
      "a fait preuve d’une attitude posée",
      "a écouté les consignes",
      "a participé aux activités avec respect"
    ],
    [
      "a globalement respecté le cadre",
      "a suivi l’essentiel des consignes",
      "a retrouvé son calme après les rappels",
      "a adopté une attitude convenable"
    ],
    [
      "a parfois manqué d’attention",
      "a eu besoin de rappels ponctuels",
      "a parfois interrompu les échanges",
      "a eu du mal à rester concentré{|e}"
    ],
    [
      "a parfois gêné le déroulement des activités",
      "a éprouvé des difficultés à se concentrer",
      "a dû être rappelé{|e} aux consignes",
      "a eu tendance à se disperser"
    ],
    [
      "a eu besoin de rappels répétés",
      "a fréquemment perdu sa concentration",
      "a parfois perturbé le travail collectif",
      "a eu des difficultés à respecter les tours de parole"
    ],
    [
      "a perturbé plusieurs activités",
      "a peiné à respecter les règles communes",
      "a eu des difficultés à retrouver le calme",
      "a rarement maintenu une écoute attentive"
    ]
  ],
  "Bilan Complet": [
    [
      "a obtenu d’excellents résultats",
      "a fourni des efforts constants",
      "a démontré une remarquable autonomie",
      "a enrichi les activités du groupe"
    ],
    [
      "a confirmé des acquis solides",
      "a travaillé avec régularité",
      "a fait preuve d’une implication constructive",
      "a progressé avec assurance"
    ],
    [
      "a globalement atteint les objectifs",
      "a fourni un travail sérieux",
      "a consolidé des compétences essentielles",
      "a participé à la dynamique du groupe"
    ],
    [
      "a acquis des repères utiles",
      "a fourni un travail convenable",
      "a montré une implication variable",
      "a obtenu des résultats corrects"
    ],
    [
      "a réalisé des progrès ponctuels",
      "a présenté des acquis inégaux",
      "a manqué de régularité dans ses efforts",
      "a rencontré des difficultés dans certaines activités"
    ],
    [
      "a fourni des efforts dans certaines activités",
      "a rencontré des difficultés de méthode",
      "a obtenu des résultats fragiles",
      "a montré une implication irrégulière"
    ],
    [
      "a trouvé quelques points d’appui",
      "a montré des acquis très fragiles",
      "a trop peu investi les activités",
      "a rencontré des difficultés persistantes"
    ],
    [
      "a rencontré des difficultés dans plusieurs domaines",
      "a peu mobilisé les bases essentielles",
      "a fourni un travail très irrégulier",
      "a rarement atteint les objectifs de la période"
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
let selectedProfile = "";
const batches = new Map();

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
    ["planifier les révisions sur plusieurs séances courtes", "s’entraîner à refaire les exercices corrigés en autonomie", "prendre des notes plus structurées et les relire régulièrement", "consolider les notions hésitantes avant chaque évaluation"],
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

const alternateSteps = {
  "Resultats": [
    [
      "vérifier la cohérence des conclusions",
      "s’exercer à comparer plusieurs solutions",
      "expliquer le raisonnement à partir d’exemples",
      "approfondir les exercices de synthèse"
    ],
    [
      "mémoriser les définitions essentielles",
      "s’entraîner à identifier les données utiles",
      "revoir les points mal compris",
      "répondre avec des justifications plus précises"
    ],
    [
      "s’appuyer sur des exemples simples",
      "s’exercer à restituer une règle à la fois",
      "reprendre les erreurs avec une aide ciblée",
      "chercher à comprendre chaque consigne"
    ]
  ],
  "Travail": [
    [
      "se fixer des objectifs plus ambitieux",
      "anticiper les échéances du travail personnel",
      "chercher des méthodes plus efficaces",
      "enrichir les réponses par des exemples"
    ],
    [
      "répartir les tâches sur plusieurs jours",
      "s’appliquer à rendre un travail plus précis",
      "préparer une liste des points à vérifier",
      "poursuivre le travail après une première correction"
    ],
    [
      "préparer le matériel en amont",
      "terminer une tâche avant d’en commencer une autre",
      "s’investir dans des exercices courts et réguliers",
      "solliciter un soutien pour structurer le travail"
    ]
  ],
  "Participation": [
    [
      "reformuler les arguments entendus",
      "s’exprimer en confrontant plusieurs points de vue",
      "poser des questions qui approfondissent les échanges",
      "collaborer à la mise en commun des démarches"
    ],
    [
      "s’entraîner à parler à partir de notes courtes",
      "répondre plus spontanément lors des échanges",
      "lever la main lorsqu’une réponse est prête",
      "prendre le temps de justifier une intervention"
    ],
    [
      "s’exercer d’abord en binôme",
      "préparer une réponse simple avant la mise en commun",
      "chercher à poser une question par séance",
      "écouter une réponse et essayer de la reformuler"
    ]
  ],
  "Conseils": [
    [
      "réviser les points les plus complexes",
      "justifier les choix à l’aide d’exemples",
      "s’entraîner à mobiliser les notions sans les notes",
      "approfondir la comparaison entre plusieurs méthodes"
    ],
    [
      "privilégier des révisions brèves et fréquentes",
      "anticiper les évaluations avec un calendrier",
      "noter les erreurs récurrentes pour mieux les corriger",
      "s’entraîner à restituer les notions sans aide"
    ],
    [
      "établir un ordre de priorité pour les révisions",
      "s’exercer à refaire une tâche corrigée",
      "mémoriser les notions essentielles par étapes",
      "revenir sur les consignes avec un soutien adapté"
    ]
  ],
  "Comportement": [
    [
      "coopérer avec la même attention",
      "poursuivre les efforts de maîtrise de soi",
      "soutenir le travail du groupe avec discrétion",
      "veiller à maintenir la qualité de l’écoute"
    ],
    [
      "se concentrer sur une tâche à la fois",
      "s’exercer à attendre son tour de parole",
      "préparer le matériel avant le début de l’activité",
      "chercher à limiter les sources de distraction"
    ],
    [
      "se calmer avant de reprendre une activité",
      "demander de l’aide pour rester concentré{|e}",
      "s’engager à suivre une consigne à la fois",
      "s’efforcer d’écouter sans interrompre"
    ]
  ],
  "Bilan Complet": [
    [
      "se fixer un objectif d’approfondissement",
      "consolider l’autonomie dans les différentes disciplines",
      "poursuivre l’investissement dans les activités collectives",
      "développer la précision des raisonnements"
    ],
    [
      "planifier le travail et mieux répartir les révisions",
      "approfondir les notions encore mal maîtrisées",
      "consolider les méthodes de travail personnel",
      "s’impliquer plus régulièrement dans les échanges"
    ],
    [
      "reprendre les apprentissages essentiels avec méthode",
      "se concentrer sur des objectifs atteignables",
      "chercher un soutien dès les premières difficultés",
      "persévérer en vérifiant les progrès étape par étape"
    ]
  ]
};

const directAddress = /(?<![\p{L}\p{M}])(?:tu|te|toi|ton|ta|tes|vous|votre|vos|l[’']élève)(?![\p{L}\p{M}])|(?:^|[.!?]\s+)(?:continue|poursuis|poursuivez|travaille|travaillez|révise|révisez|fais|faites|reste|restez|essaie|essayez)\b/iu;

function namePattern() {
  const escaped = student.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return `(?<![\\p{L}\\p{M}])${escaped}(?![\\p{L}\\p{M}])`;
}

function withStudent(phrase) {
  const feminine = student.genre === "féminin";
  const filled = phrase.replace(/\{([^{}|]*)\|([^{}|]*)\}/g, (_, masculine, female) => feminine ? female : masculine);
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
  return rendered;
}

function editorialPhrases(index, batch) {
  const facts = observations[category][index];
  const level = index < 3 ? 0 : index < 5 ? 1 : 2;
  const steps = batch % 2 ? alternateSteps[category][level] : nextSteps[category][level];
  const openings = ["Il convient", "Il sera utile", "Il est recommandé", "Il importe"];
  return facts.map((fact, number) => {
    const step = steps[(number + Math.floor(batch / 2)) % steps.length];
    const opening = openings[(number + Math.floor(batch / 8)) % openings.length];
    const link = /^[aeiouyàâäéèêëîïôöùûüœ]/iu.test(step) ? "d’" : "de ";
    if (batch % 2) {
      const modal = (number + Math.floor(batch / 2)) % 2 ? "devra" : "pourra";
      const observed = facts[(number + 1) % facts.length];
      return `{prenom} ${modal} ${step}. {Il|Elle} ${observed}.`;
    }
    return `{prenom} ${fact}. ${opening} ${link}${step}.`;
  });
}

function sentenceList(text) {
  return text.trim().match(/[^.!?…]+(?:[.!?…]+|$)/gu)?.map(sentence => sentence.trim()) ?? [];
}

function sentenceKey(sentence) {
  const subject = new RegExp(`^(?:${namePattern()}|il|elle)\\s+`, "iu");
  return sentence.replace(subject, "")
    .replace(/^(?:(?:devra|pourra) |(?:convient|sera utile|est recommandé|importe) d(?:e |’))/iu, "")
    .replace(/[.!?…]+$/u, "").trim().toLocaleLowerCase("fr");
}

function unusedSentences(phrase) {
  const existing = new Set(sentenceList(draft.value).map(sentenceKey));
  return sentenceList(withStudent(phrase)).filter(sentence => {
    const key = sentenceKey(sentence);
    if (existing.has(key)) return false;
    existing.add(key);
    return true;
  }).join(" ");
}

function renderSuggestions() {
  suggestions.replaceChildren();
  offered.forEach((phrase, index) => {
    const item = document.createElement("li");
    const text = document.createElement("p");
    const add = document.createElement("button");
    const available = unusedSentences(phrase);
    text.textContent = available || withStudent(phrase);
    add.disabled = !available;
    add.type = "button";
    add.className = "quiet";
    add.textContent = "Ajouter";
    add.setAttribute("aria-label", "Ajouter la proposition " + (index + 1));
    add.addEventListener("click", () => appendPhrase(unusedSentences(phrase), index));
    item.append(text, add);
    suggestions.append(item);
  });
}

function appendPhrase(phrase, index) {
  if (!phrase) {
    status("Cette formulation figure déjà dans l’appréciation.");
    return;
  }
  const text = draft.value.trim();
  const separator = text && !/[.!?…]$/u.test(text) ? ". " : " ";
  draft.value = text ? text + separator + phrase : phrase;
  byId("copy").disabled = false;
  renderSuggestions();
  if (index !== undefined) suggestions.children[index].querySelector("button").focus();
  status("Phrase ajoutée à l’appréciation.");
}

function generate(profile, refresh = false) {
  selectedProfile = profile;
  const profileIndex = profiles.findIndex(([value]) => value === profile);
  const key = category + "/" + profile;
  const batch = refresh ? (batches.get(key) ?? 0) + 1 : (batches.get(key) ?? 0);
  batches.set(key, batch);
  offered = editorialPhrases(profileIndex, batch);
  const custom = [...new Set(bank?.[category]?.[profile]?.[student.genre] ?? [])].filter(phrase =>
    /^\{prenom\} /u.test(phrase) && !directAddress.test(phrase) && sentenceList(phrase).length === 1 &&
    phrase.trim().split(/\s+/u).length <= 16
  );
  if (custom.length && batch % 4 === 0) {
    const [, step] = sentenceList(offered[3]);
    offered[3] = custom[Math.floor(batch / 4) % custom.length].replace(/[.!?…]*$/u, ".") + " " + step;
  }
  renderSuggestions();
  byId("suggestion-hint").hidden = true;
  byId("refresh-suggestions").hidden = false;
  status(refresh ? "Quatre nouvelles propositions sont disponibles." : "");
}

byId("refresh-suggestions").addEventListener("click", () => generate(selectedProfile, true));

function clearSuggestions() {
  offered = [];
  selectedProfile = "";
  byId("refresh-suggestions").hidden = true;
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
  batches.clear();
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
  appendPhrase(unusedSentences(phrase));
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
  principalDraft.value = principalSummaries[index].replace(/\{([^{}|]*)\|([^{}|]*)\}/g,
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
