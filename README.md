# AppsGenerator

Générateur d’appréciations scolaires individuelles. Reprend les six catégories, les huit profils, les deux genres et le tirage aléatoire d’AppsGenerator 1.2.1. Fonctionne dans le navigateur avec SQLite WebAssembly, sans serveur applicatif ni compilation.

## Publier sur GitHub Pages

1. Créez un dépôt dédié nommé **AppsGenerator**. Vérifiez que le mode de visibilité choisi permet l’hébergement GitHub Pages avec votre compte.
2. Décompressez l’archive et placez **le contenu** de son dossier `AppsGenerator-GitHub` à la racine du dépôt, y compris le fichier masqué `.nojekyll`. Le fichier `index.html` doit être à la racine.
3. Sur GitHub, ouvrez **Settings → Pages**. Sous **Build and deployment**, choisissez **Deploy from a branch**. Sélectionnez **main** et **/ (root)**, puis enregistrez.
4. Après le déploiement, ouvrez l’adresse HTTPS affichée dans **Settings → Pages**. Pour un site de projet, elle prend généralement la forme `https://VOTRE-COMPTE.github.io/AppsGenerator/`.

[Configurer la source de publication GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Installer l’application

- **Android** (Chrome ou navigateur compatible) : ouvrez l’adresse HTTPS, puis utilisez **Installer l’app** ou l’option d’installation du menu du navigateur.
- **iPhone et iPad** (Safari) : ouvrez l’adresse HTTPS, touchez **Partager**, puis **Sur l’écran d’accueil** et **Ajouter**. Si Safari propose **Ouvrir comme app web**, activez cette option.
- **Ordinateur** : utilisez la commande d’installation du navigateur si elle est disponible. L’application reste utilisable dans un onglet sur les autres navigateurs.

Après le premier chargement en ligne et la mise en cache, la PWA fonctionne hors connexion. Elle inclut des PNG de 48 à 512 px, trois tailles pour Apple, deux icônes Android adaptatives et le favicon .ico d’origine.

## Banque de phrases SQLite

La base distribuée contient 2 000 entrées. Les ajouts effectués par import CSV sont enregistrés dans la copie SQLite de chaque navigateur sur chaque appareil. Pour transférer vos ajouts, utilisez **Exporter la base .db**, puis **Importer une base .db** sur l’autre appareil. L’import d’une base fusionne les phrases et ignore celles déjà présentes. Effacer les données du site efface les ajouts locaux, d’où l’utilité de l’export.

Le CSV accepte les virgules ou les points-virgules et doit être encodé en UTF-8. Les quatre colonnes sont `categorie`, `profil`, `genre` et `texte`. Le texte peut contenir `{prenom}`. Le modèle historique comprend des lignes de profil 9. Pour les utiliser, attribuez-leur l’un des huit profils de la version 1.2.1.

Le prénom et le texte en cours restent dans l’onglet. Copiez l’appréciation avant de fermer ou d’actualiser la page.

## Tester localement

Depuis le dossier de l’application, lancez `python3 -m http.server 8080 --bind 127.0.0.1`, puis ouvrez `http://localhost:8080/`.

Le projet inclut sql.js 1.13.0 et Papa Parse 5.5.3, avec leurs licences.
