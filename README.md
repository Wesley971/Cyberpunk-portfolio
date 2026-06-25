# Cyberpunk Portfolio

Portfolio personnel cyberpunk japonais — Wesley, développeur Full Stack TypeScript.

## Aperçu

Single-page portfolio avec ambiance Tokyo night : torii gate 3D wireframe animé,
pluie néon, scroll reveals GSAP et background cyberpunk.

## Stack technique

- **React 18** + **Vite 4**
- **Three.js** — torii gate 3D wireframe avec interaction souris et particules flottantes
- **GSAP** + **ScrollTrigger** — animations de révélation au scroll sur toutes les sections
- **Tailwind CSS v3**
- **@react-three/fiber** + **@react-three/drei** + **@react-three/postprocessing**

## Structure

```
src/
├── App.jsx              # Root, curseur custom GSAP
├── main.jsx
├── index.css            # Variables CSS, grain overlay, curseur
└── components/
    ├── Navbar.jsx       # Navigation fixe avec animation d'entrée
    ├── Hero.jsx         # Texte reveal + torii gate 3D + background Tokyo
    ├── ToriiGate.jsx    # Scène Three.js vanilla : wireframe, particules, mouse
    ├── About.jsx        # Section reconversion avec scroll reveal
    ├── Projects.jsx     # Cards Lockr / My Bibs / Portfolio
    └── Contact.jsx      # Liens email, GitHub, LinkedIn
```

## Sections

- **Hero** — titre FULL STACK DEV. en reveal slide-up, torii gate 3D wireframe cyan/magenta qui tourne et réagit à la souris, background Tokyo night rain
- **About** — reconversion SNCF, passion dev, disponibilité
- **Projects** — Lockr (NestJS/React/Docker), My Bibs (React Native/Expo), Portfolio (Three.js/GSAP)
- **Contact** — email, GitHub, LinkedIn

## Design

- Palette : cyan `#38BFFF` / magenta `#D4257A` / violet `#7B4FFF` / noir `#04040f`
- Typographie : Urbanist (Google Fonts)
- Grain de texture subtil en overlay
- Curseur custom : point cyan + ring animé GSAP
- Scrollbar fine cyan

## Lancer en local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Auteur

Wesley — Full Stack TypeScript Developer
React · NestJS · Prisma · MySQL · Docker

Île-de-France — remote/hybride
[GitHub](https://github.com/Wesley971) · [LinkedIn](https://linkedin.com/in/wesley-dev)
