# 🏗 Architecture du Projet

Ce projet suit une architecture **Feature-Based modulaire**, inspirée des standards utilisés en entreprise (Clean Architecture simplifiée).

L’objectif :

* Code lisible
* Séparation claire des responsabilités
* Scalabilité
* Travail collaboratif simplifié

---

# 📱 Mobile — React Native (Expo)

```
src/
├── app/
├── features/
├── shared/
├── services/
├── store/
├── theme/
├── types/
```

## 📁 app/

Structure de navigation (Expo Router).

---

## 📁 features/

Organisation par domaine métier.

Structure interne :

```
feature-name/
├── screens/
├── components/
├── hooks/
├── services/
├── schemas/
└── types.ts
```

* `screens/` → pages complètes
* `components/` → composants internes
* `hooks/` → logique métier
* `services/` → appels API
* `schemas/` → validation

---

## 📁 shared/

Composants UI globaux et design system.

---

## 📁 services/

Client API centralisé.

---

## 📁 store/

State global.

---

## 📁 theme/

Couleurs, typographie, spacing.

---

# 🎯 Règle d’or du projet

* Une feature = un dossier
* Pas de logique métier dans `app/`
* Le code réutilisable va dans `shared/`
* Les appels API vont dans `services/`
* La validation va dans `schemas/`

---
