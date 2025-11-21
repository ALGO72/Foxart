# 🚀 Landing Page React - SaaS Moderne pour Startups

Une landing page professionnelle et moderne construite avec **React**, **TypeScript** et **Vite**. Ce projet propose une solution complète pour présenter une application SaaS ou un service en ligne avec un design épuré et performant.

## 📋 Vue d'ensemble

**Landing Page React** est une template de landing page prête pour les startups SaaS. Elle intègre tous les éléments essentiels pour convertir les visiteurs : header avec authentification, hero section inspirante, features showcase, pricing table, call-to-action et footer complet.

### ✨ Caractéristiques principales

- ✅ **Design moderne et responsive** avec Tailwind CSS v4
- ✅ **Performance optimale** grâce à Vite et React 19
- ✅ **TypeScript strict** pour une meilleure qualité de code
- ✅ **Firebase intégré** pour l'authentification et la base de données
- ✅ **Composants réutilisables** bien structurés
- ✅ **ESLint configuré** avec support TypeScript
- ✅ **Vite HMR** pour un développement ultra-rapide

---

## 🛠️ Stack technologique

| Technologie      | Version | Utilisation          |
| ---------------- | ------- | -------------------- |
| **React**        | 19.1.1  | Framework UI         |
| **TypeScript**   | 5.8.3   | Typage statique      |
| **Vite**         | 7.1.2   | Bundler & dev server |
| **Tailwind CSS** | 4.1.12  | Styling utilitaire   |
| **Firebase**     | 12.6.0  | Auth & Backend       |
| **ESLint**       | 9.33.0  | Linting              |

---

## 📁 Structure du projet

```
src/
├── components/              # Composants réutilisables
│   ├── Header.tsx          # En-tête avec logo et bouton login
│   ├── Hero.tsx            # Section héros principale
│   ├── Features.tsx        # Showcase des fonctionnalités
│   ├── Princing.tsx        # Table de tarification
│   ├── BulletPoints.tsx    # Points clés / avantages
│   ├── CallToAction.tsx    # Boutons CTA
│   ├── Footer.tsx          # Pied de page
│   ├── Branding.tsx        # Section branding
│   ├── Button.tsx          # Composant bouton réutilisable
│   ├── Container.tsx       # Wrapper layout
│   └── theme/              # Éléments visuels (formes, grilles)
│       ├── Header.tsx      # Effets visuels header
│       ├── Headings.tsx    # Styles titres
│       └── Hero.tsx        # Grille/effets hero
├── assets/                 # Images et ressources
│   ├── branding/           # Logos et branding
│   ├── bullet-points/      # Icônes points clés
│   ├── hero/               # Images héro
│   └── ico/                # Icônes générales
├── App.tsx                 # Composant principal
├── main.tsx                # Point d'entrée
└── index.css              # Styles globaux
```

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js 16+
- npm ou yarn

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/ALGO72/Foxart.git
cd "Landing page React"

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Le site sera disponible à `http://localhost:5173` avec HMR activé.

### Build pour production

```bash
# Générer la version optimisée
npm run build

# Prévisualiser la build
npm run preview
```

### Linting

```bash
# Vérifier la qualité du code
npm run lint
```

---

## 🎨 Sections de la landing page

1. **Header** - Navigation et authentification
2. **Hero Section** - Message principal avec CTA
3. **Branding** - Logos des partenaires/clients
4. **Features** - Showcase des fonctionnalités principales
5. **Call-to-Action** - Sections d'engagement
6. **Bullet Points** - Avantages clés
7. **Pricing** - Plans de tarification
8. **Footer** - Liens et informations légales

---

## 🔐 Configuration Firebase

Pour activer Firebase (authentification, base de données), créez un fichier `src/config/firebase.ts` :

```typescript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

## 📝 Notes de développement

- **TypeScript strict** : Les erreurs de typage sont ignorées lors du build (voir `package.json`). Pour une qualité maximale, corrigez les `any` progressivement.
- **Tailwind CSS** : Tous les styles sont en classes utilitaires. Voir la documentation [Tailwind](https://tailwindcss.com/).
- **Vite** : Configuration minimale dans `vite.config.ts` avec React et Tailwind plugins.

---

## 📦 Scripts disponibles

| Commande          | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Lancer le serveur développement |
| `npm run build`   | Build production                |
| `npm run preview` | Prévisualiser la build          |
| `npm run lint`    | Vérifier qualité du code        |

---

## 🤝 Contribution

Les contributions sont bienvenues ! N'hésitez pas à :

- Ouvrir une issue pour signaler un bug
- Proposer une amélioration via une PR
- Améliorer la documentation

---

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation !

---

## 👨‍💻 Auteur

**Djabir ALGO** - Créateur du projet Foxart

💡 _Construit pour les startups modernes qui veulent lancer rapidement._
