# Portfolio — Giorgio La Manna

Sito portfolio personale (single-page) per visual designer / graphic designer.
Realizzato in **HTML + CSS + JavaScript** puro: nessun framework, nessuna build.
Pronto per essere aperto in locale o pubblicato online (Netlify, Vercel, GitHub Pages, hosting classico via FTP).

---

## 1. Come aprire il sito

### In locale (più semplice)
1. Vai nella cartella `site/`
2. Apri `index.html` con doppio clic — si aprirà nel browser predefinito

### In locale (server consigliato per evitare warning su font/svg)
Da terminale, dentro la cartella `site/`:

```bash
python3 -m http.server 8000
```

Poi apri http://localhost:8000

### Pubblicarlo online
Carica l'intero contenuto della cartella `site/` (file e sottocartelle) sul tuo hosting.
Su Netlify/Vercel basta trascinare la cartella `site/` nella dashboard.

---

## 2. Struttura dei file

```
site/
├─ index.html              ← Tutta la pagina
├─ assets/
│  ├─ css/styles.css       ← Tutti gli stili
│  ├─ js/main.js           ← Interazioni (menu, filtro, lightbox, form)
│  ├─ img/                 ← Foto personale (estratta dal PSD)
│  ├─ works/               ← I tuoi progetti in formato SVG
│  ├─ badges/              ← Certificazioni Adobe
│  └─ cv-giorgio-la-manna.indd  ← copia del tuo CV InDesign
└─ README.md
```

---

## 3. Sezioni del sito

| # | Sezione        | Cosa contiene                                                    |
|---|----------------|-------------------------------------------------------------------|
| — | Hero           | Nome, presentazione, CTA, foto personale                          |
| 01| Chi sono       | Bio breve + due certificazioni Adobe                              |
| 02| Formazione     | Timeline con percorso di studi                                    |
| 03| Esperienze     | Card con esperienze + skills (software, discipline, soft, lingue) |
| 04| Lavori         | 6 progetti con concept e filtro per categoria                     |
| 05| Contatti       | Email, social placeholder, form mailto                            |

Navigazione: **Chi sono · Formazione · Esperienze · Lavori · Contatti**.

---

## 4. Dove modificare le cose

Tutti i contenuti testuali sono in **`index.html`**.
È pensato per essere modificato anche senza esperienza di codice: cerca le sezioni
con i commenti `<!-- ============== ... -->`.

### Modificare il nome / la presentazione (Hero)
Apri `index.html`, cerca `<!-- ============== HERO -->`.
Modifica il contenuto dentro `<h1 class="display">`, `<p class="lead">` e `<ul class="hero-meta">`.

### Sostituire la foto
Sostituisci `assets/img/foto-personale.jpg` (e la versione `-sm`) con le tue.
Mantieni i nomi file uguali, oppure aggiorna i `src` nell'`<img>` della Hero.

### Aggiornare formazione (Sezione 02)
Cerca `<!-- ============== FORMAZIONE -->`.
Ogni voce della timeline è un `<li class="timeline-item">`.
Modifica `t-date`, `<h3>`, `t-meta`, `<p>`. Per aggiungerne una nuova, copia un blocco intero.

### Aggiornare esperienze (Sezione 03)
Cerca `<!-- ============== ESPERIENZE -->`.
Ogni esperienza è `<article class="exp-card">`.
La quarta card è un placeholder (`exp-placeholder`): sostituiscila o rimuovila.
Le competenze sotto si modificano nelle quattro `<div>` dentro `.skills-grid`.

### Aggiungere/modificare un lavoro (Sezione 04)
Cerca `<!-- ============== LAVORI -->`.
Ogni progetto è `<article class="work" data-cat="...">`.

- `data-cat="..."` → categorie separate da spazio. Es: `data-cat="branding editoriale"`.
  Le categorie usate dal filtro sono: `branding`, `locandina`, `infografica`, `editoriale`.
  Per aggiungere una nuova categoria di filtro, aggiungi anche un `<button class="filter-btn">`.
- `<img src="assets/works/xxx.svg">` → percorso del file (anche .jpg/.png va bene).
- `style="--bg:#hex"` sul `.work-img-wrap` → colore di sfondo dietro l'immagine.
- `.work-cat`, `.work-title`, `.work-concept`, `.work-tags` → testo del progetto.
- Alterna `class="work"` e `class="work work-reverse"` per il layout immagine destra/sinistra.

### Cambiare email / social (Sezione 05)
Cerca `<!-- ============== CONTATTI -->`.
- L'email è in 3 punti: `mailto:` del header (nessuno), nella `contact-list`, nella `socials`,
  nel `<form action>` e nello script JS — usa Cerca/Sostituisci con
  `giorgio.lamanna2002@gmail.com` per cambiarla ovunque.
- I link social (`Instagram`, `LinkedIn`, `Behance`) hanno `href="#"` e l'attributo
  `data-placeholder`. Sostituisci `href="#"` con il tuo URL e rimuovi `data-placeholder="..."`.

---

## 5. Personalizzare lo stile

Apri `assets/css/styles.css`. In cima trovi i **token** dentro `:root { ... }`:

```css
--bg:       #f5f1ea;   /* sfondo principale (crema) */
--ink:      #1a1a18;   /* testo principale */
--accent:   #c44d2e;   /* colore accento — usa un colore tuo */
--serif:    "Fraunces", ...
--sans:     "Inter", ...
```

Cambiando solo questi valori cambi tono al sito intero.
I font sono caricati da Google Fonts in `index.html` (`Fraunces` + `Inter`).

---

## 6. Cosa è già incluso

- ✅ **Responsive** — desktop, tablet, smartphone (menu hamburger sotto i 980px)
- ✅ **Accessibile** — focus-visible, alt text, ARIA, `prefers-reduced-motion`, contrasto AA
- ✅ **SEO base** — title, meta description, Open Graph, Twitter Card, lang="it"
- ✅ **Performance** — nessuna libreria JS, immagini lazy, font con `display=swap`
- ✅ **Animazioni leggere** — reveal on scroll, hover sulle card, lightbox
- ✅ **Filtro lavori** per categoria
- ✅ **Form contatti** con fallback `mailto:`
- ✅ **Compatibile** Chrome, Firefox, Safari, Edge moderni

---

## 7. Note importanti

- Le voci di **Formazione** ed **Esperienze** sono basate sulle informazioni
  ricavabili dai materiali in cartella (Concept.docx, file dei progetti, certificazioni
  Adobe). **Il file CV è in formato InDesign (.indd)**, che non è leggibile
  automaticamente: alcuni dettagli (date precise, ruoli specifici, esperienze esterne)
  potrebbero richiedere un controllo manuale. Le card contrassegnate come
  `t-placeholder` o `exp-placeholder` sono i punti più ovvi da personalizzare.
- I link social sono **placeholder**: aggiornali con i tuoi profili reali.
- Il file CV originale `.indd` è copiato in `assets/`, ma non viene linkato dalla
  pagina perché non aprubile in browser. Per offrire il CV in download, esportalo in
  PDF da InDesign, salvalo come `assets/cv.pdf`, poi aggiungi nella Hero un pulsante:
  ```html
  <a href="assets/cv.pdf" class="btn btn-ghost" download>Scarica il CV</a>
  ```

Buon lavoro!
