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
2. Faire un `npm install` dans client et dans server
3. Faire un `npm run init-db` pour initialiser la database
4. Faire `npm run start` dans server
5. Faire en parallèle `npm run start` dans client

# Commentaires

Dans le client on utilise `useCallback` avec une fonction de debounced, il aurait été possible d'utiliser plutôt le last patern ref pour mettre à jour la référence de la fonction `debouncedSearch` uniquement quand nécessaire.

A noter que sans `useCallback` ou last pattern ref, `debouncedSearch` se met à jour à chaque rendu et donc on perd l'intérêt du debounced.

# TODO

- Error handling côté front
- Offline page côté front
- Config front
- Versionning bdd
- test back et front
