# Togo China Marketplace

Plateforme B2B qui met en relation les commerçants togolais avec des fournisseurs et agents en Chine.

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Base de données: PostgreSQL
- Auth: JWT
- Architecture: microservice-ready monorepo

## Prérequis
- Node.js 20+
- PostgreSQL 16+
- npm

## Installation locale

### 1. Installer les dépendances
```bash
npm install --prefix backend
npm install --prefix frontend
```

### 2. Configurer l'environnement
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### 3. Créer la base PostgreSQL
```bash
createdb togo_china
psql togo_china < database/schema.sql
```

### 4. Lancer le projet
```bash
npm run dev
```

Le backend est accessible sur http://localhost:4000 et le frontend sur http://localhost:5173.

## Modules inclus
- Authentification JWT
- Catalogue produits
- Fournisseur / produits
- Agent / devis
- Admin / supervision
- Paiements
- Dashboard commercial

## Production
Le projet est préparé pour être conteneurisé avec Docker et déployé sur Render, Railway ou un VPS.

## Commandes utiles
```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev

# Docker
npm run docker:up
npm run docker:down
```
