# Gestion des soutenances — Tics Master

Application de gestion des soutenances universitaires développée pendant un stage chez Tics Master. Elle couvre le suivi des étudiants, la vérification des conditions de passage, la programmation des soutenances et l'import/export des données.

## Stack

- **Frontend** : Vue 3, Nuxt 3, TypeScript, Tailwind CSS, Flowbite
- **Backend** : API Nuxt (`server/api`)
- **Base de données** : MySQL via Prisma ORM
- **Authentification** : `@sidebase/nuxt-auth` avec rôles

## Fonctionnalités

- Authentification multi-rôles : étudiant, direction, admin
- Gestion des étudiants : création, modification, suppression, liste
- Conditions de passage : frais de scolarité, crédits, profil complet
- Programmation des soutenances : date, salle, statut
- Import et export CSV
- Tableau de bord avec indicateurs (étudiants, dossiers en cours, éligibles, terminés)

## Rôles

| Rôle | Accès |
|---|---|
| `student` | Consultation de son dossier |
| `direction` | Gestion des étudiants et des soutenances de son établissement |
| `admin` | Administration complète |

## Lancer le projet

```bash
npm install
```

Créer un fichier `.env` à la racine avec la connexion MySQL :

```env
DATABASE_URL="mysql://user:password@localhost:3306/nom_de_la_base"
```

Appliquer les migrations Prisma et lancer le serveur :

```bash
npx prisma migrate dev
npm run dev
```

L'application tourne sur `http://localhost:3000`.

## Structure

```text
app.vue
pages/                 # pages Nuxt
components/            # composants Vue
layouts/               # layouts (auth, dashboard)
middleware/            # guards de rôles
server/api/            # endpoints Nuxt
prisma/
  schema.prisma        # modèles Student, Direction, Admin
  migrations/          # migrations SQL
assets/                # styles et ressources
```

## Modèle de données

Trois entités principales :

- `student` : informations personnelles, parcours, conditions de passage, soutenance.
- `direction` : établissement, date limite, étudiants rattachés.
- `admin` : administration de la plateforme.

Les mots de passe sont stockés via le mécanisme d'authentification du projet. Aucune donnée nominative réelle n'est versionnée dans le dépôt.

## Notes

- Projet réalisé en stage chez Tics Master.
- L'import/export CSV est une fonctionnalité métier : les fichiers importés ne doivent pas être commités.
- Les variables d'environnement et la chaîne de connexion MySQL restent locales.

## Auteur

Russell Dossou-Yovo — [GitHub](https://github.com/russell-sedj)
