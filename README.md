# Selwyn — React Portfolio

A responsive, single-page portfolio built with React and Vite, using the two images supplied in chat.

## Run locally

1. Install Node.js (LTS recommended).
2. Open this folder in VS Code and open a terminal.
3. Run `npm install`.
4. Run `npm run dev` and open the URL shown in the terminal.

To produce production assets, run `npm run build`. The result will be inside `dist/` and can be deployed to Vercel.

## Customize

- `src/App.jsx`: text, sections, skills, email address, and project descriptions.
- `src/styles.css`: colors, layout, typography, and responsive breakpoints.
- `src/assets/portrait.jpg`: your supplied portrait.
- `src/assets/homegrowns.png`: your supplied café project screenshot.

The featured project panel currently has no live/demo link because none was provided. Add a verified URL if you want an active link. The contact button opens an email composer; the copy email button uses the clipboard API when available.
