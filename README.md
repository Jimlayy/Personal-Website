# Personlig hemsida – Jimi Henricsson

Portfoliosida byggd i React och Vite.

## Kom igång

```bash
npm install
npm run dev      # utvecklingsserver på http://localhost:5173
npm run build    # bygger sidan till dist/
npm run preview  # visar det byggda resultatet lokalt
```

Innehållet i `dist/` är en statisk sida som kan läggas ut var som helst
(GitHub Pages, Netlify, Vercel, eget webbhotell). Sökvägarna är relativa,
så sidan fungerar både på en egen domän och i en undermapp.

## Uppdatera innehållet

- **All text** finns i `src/data/cv.js` (svenska och engelska).
- **Knappar och rubriker** finns i `src/data/ui.js`.
- **Bilder** ligger i `src/assets/`. Skala ner nya bilder innan du lägger in dem
  (profilbild ca 800 px bred, bakgrund ca 1600 px).
- **CV som PDF:** lägg filen i `public/` och ange sökvägen i `cvFile` i `cv.js`,
  t.ex. `"./Jimi_Henricsson_CV.pdf"`. Då dyker en nedladdningsknapp upp.

## Inställningar

- `SHOW_TODOS` i `src/data/fyll.js`: `true` visar platshållare och utkast
  (röda) så att du ser vad som saknas. Ska vara `false` när sidan läggs ut.
- `ENGLISH_ENABLED` i `src/i18n.js`: `true` visar språkknappen och den
  engelska versionen.
