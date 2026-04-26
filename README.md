# By Dimeh — Portfolio

Portfolio vidéaste en **Next.js 16** (App Router), **React 19.2**, **TailwindCSS**, **shadcn/ui**, rendu **server-side** pour un SEO optimal.

---

## 🚀 Démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Placer les vidéos dans /public/videos/
#    (noms attendus listés ci-dessous)

# 3. Lancer le dev server
npm run dev
# → http://localhost:3000
```

### Vidéos attendues dans `/public/videos/`

- `V2_ALONZO_ARDENTES.mp4`
- `REVEAL_3RD_JERSEY_OM.mp4`
- `CAPSULE_GERTRUDE_30S.mp4`
- `CROCS_V2.mp4`
- `H265_MP4_MULTIPASS.mp4`
- `V3_EDIT_VRK_CEBE_1.mp4`

---

## 🏗️ Architecture

```
app/
  layout.tsx          → Root layout + metadata SEO globale + JSON-LD
  page.tsx            → Homepage (Server Component)
  sitemap.ts          → Sitemap dynamique (auto-généré)
  robots.ts           → Robots.txt
  not-found.tsx       → 404
  globals.css         → Tokens shadcn + base styles
  projets/[slug]/
    page.tsx          → Page détail projet (SSG via generateStaticParams)

components/
  cursor.tsx          → Curseur custom (client)
  nav.tsx             → Navigation sticky (client)
  sections/
    hero.tsx          → Hero vidéo rotative (client)
    ticker.tsx        → Bande défilante clients (server)
    projects-list.tsx → Liste projets (server)
    project-row.tsx   → Row avec hover preview (client)
    about.tsx         → À propos (server)
    contact.tsx       → Contact (server)

data/
  projects.ts         → Source unique des projets

lib/
  utils.ts            → Helper `cn()` shadcn
```

---

## 🔎 SEO — Ce qui est fait

- ✅ **SSR/SSG** : toutes les pages sont rendues côté serveur, HTML complet livré aux crawlers
- ✅ **Metadata dynamique** par page (title, description, OpenGraph, Twitter Card)
- ✅ **JSON-LD schema.org** (Person sur la home, VideoObject sur chaque projet)
- ✅ **Sitemap.xml** généré dynamiquement à partir des projets
- ✅ **Robots.txt** généré
- ✅ **Pages individuelles par projet** crawlables (`/projets/alonzo-ardentes`, etc.)
- ✅ **URLs propres** en français
- ✅ **Balises sémantiques** (`<main>`, `<section>`, `<article>`, `<nav>`, `<h1>`)
- ✅ **Breadcrumb** sur les pages projet
- ✅ **Canonical URLs**

### À faire avant mise en ligne

1. **Remplacer `https://bydimeh.com`** par ton vrai domaine dans :
   - `app/layout.tsx` (metadataBase, openGraph.url)
   - `app/sitemap.ts`
   - `app/robots.ts`
   - `app/projets/[slug]/page.tsx`

2. **Créer une image OpenGraph** `public/og-image.jpg` (1200×630px)

3. **Ajouter un favicon** `app/icon.png` (512×512px)

4. **Google Search Console** : soumettre `https://bydimeh.com/sitemap.xml`

---

## 📦 Production

```bash
npm run build    # Build optimisé (Turbopack par défaut)
npm run start    # Lance en production
```

### Déploiement recommandé : **Vercel**

1. Push sur GitHub
2. Importer le repo sur [vercel.com](https://vercel.com)
3. Connecter le domaine → c'est en ligne

Alternative : Netlify, Cloudflare Pages.

---

## 🎥 Vidéos en production

Les `.mp4` dans `/public/videos/` fonctionnent pour le dev, mais pour la production :

### Option 1 — Vimeo Pro (recommandé)

Héberge tes vidéos sur Vimeo, récupère les URLs directes, et remplace les `videoSrc` dans `data/projects.ts`.

### Option 2 — Cloudflare Stream

Meilleure performance mondiale. Nécessite un abonnement (~5$/mois).

### Option 3 — Garder en local (.mp4 dans /public)

OK pour un petit trafic, mais compresse bien tes fichiers (< 10 Mo idéalement). Vercel a une limite de bande passante sur le plan gratuit.

---

## 🎨 Personnalisation

### Changer les couleurs

Édite les variables CSS dans `app/globals.css` (`:root { --background, --foreground, ... }`).

### Ajouter un projet

Dans `data/projects.ts`, ajoute un objet dans le tableau `projects`. La page détail `/projets/[slug]` + l'entrée sitemap seront générées automatiquement.

### Changer les polices

Dans `app/layout.tsx`, remplace `Playfair_Display`, `DM_Sans`, `DM_Mono` par d'autres imports `next/font/google`.

---

## 📝 Licence

Portfolio privé — tous droits réservés © 2025 By Dimeh
