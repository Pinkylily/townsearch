# Enoncé

## Livrables attendus

1. Un repo avec un Back (idéalement NestJS mais pas obligatoire) et un Front
   React
2. Une base de donnée est présente et elle est utilisée
3. Une documentation succinte pour installer / lancer le projet
4. Bonus : un déploiement est mis en place

## Enoncé de l'exercice

Mettre en place une application composée d'un front en React consommant une API
fournit par un back en NestJS (idéalement mais pas obligatoire). Cette application
permet de lister les villes qui correspondent à une chaîne de caractères en entrée.
Les données sont à récupérer de data.gouv.fr
(https://www.data.gouv.fr/fr/datasets/codes-postaux/)
Specs :
Seules les 100 premières villes doivent être affichées
Les villes doivent-être découpées en deux catégories, celles de la métropole et
les autres
Les villes doivent être ordonnées d'après leurs noms
Le filtrage des villes doit être fait dans le back pour éviter de faire transiter trop
de données

🔥 Il est demandé de rajouter au choix un des éléments suivants et
d’argumenter pourquoi avoir choisi cet élément plutôt que les autres :

- State management
- GraphQL
- Tests front & back

# Lancement du projet

1. Récupérer le contenu du répo
2. Faire un `npm install` à la racine, puis dans client et dans server
3. Créer une connexion mongodb avec une table towns, changer la config dans `config.ts` si besoin
4. Faire `npm run build` à la racine (c'est un peu long c'est un point d'amélioration)
5. Faire `npm run start:server` à la racine
6. Faire en parallèle `npm run start:client`

NB: l'url pour appeler le back depuis le front est en dur, c'est un gros point d'amélioration que j'aurais aimer corriger avec + de temps (à minima faire un fichier de configuration). Le projet ne lance pas en même temps le back et le front c'est aussi un point d'amélioration.
