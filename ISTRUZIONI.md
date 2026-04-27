# Materiale per GitHub Pages — Istruzioni rapide

In questa cartella trovi tutto il necessario per pubblicare il portfolio online su GitHub Pages.

## Cosa c'è qui dentro

```
Materiale GitHub/
├── ISTRUZIONI.md         ← questo file
├── portfolio.zip         ← archivio compresso (2.5 MB) — alternativa per upload
├── index.html            ← homepage del sito
├── README.md             ← descrizione tecnica
└── assets/
    ├── css/styles.css    ← tutto lo stile
    ├── js/main.js        ← interazioni
    ├── img/              ← foto personale + marchio
    ├── works/            ← 6 progetti (5 SVG + 1 JPG)
    ├── badges/           ← certificazioni Adobe
    └── cv-giorgio-la-manna.pdf
```

Totale: 16 file utili, 3.2 MB.

## ⚠️ Regola d'oro

Su GitHub Pages, `index.html` deve trovarsi alla **radice del repository**.
Quando carichi i file, devi caricare il **contenuto** di questa cartella (non la cartella stessa).

Cosa devi vedere su GitHub dopo l'upload:
```
✅ Corretto                  ❌ Sbagliato
├── index.html               └── Materiale GitHub/
├── README.md                    ├── index.html
└── assets/                      └── ...
```

## Procedura passo passo (~15 minuti)

### 1. Crea l'account
Vai su https://github.com/signup e registrati (gratis). Scegli un nome utente come `giorgiolamanna` — sarà parte dell'URL del sito.

### 2. Crea il repository
- Clicca `+` in alto a destra → **New repository**
- **Repository name**: ti consiglio `tuoutente.github.io` (esempio: `giorgiolamanna.github.io`). Avrai così l'URL pulito `https://giorgiolamanna.github.io/`
- Spunta **Public** e **Add a README file**
- Clicca **Create repository**

### 3. Carica i file
- Sul repository nuovo, clicca **Add file** → **Upload files**
- Apri questa cartella `Materiale GitHub/` sul tuo Mac
- Seleziona TUTTO il contenuto (`Cmd+A`):
  - `index.html`
  - `README.md`
  - la cartella `assets/`
  - (NON serve caricare `ISTRUZIONI.md` né `portfolio.zip`)
- Trascina il tutto nel riquadro di GitHub
- Aspetta che si carichi tutto (~1 minuto)
- In fondo clicca **Commit changes**

> Alternativa: estrai `portfolio.zip` (doppio click) e carica il contenuto della cartella estratta. Stesso risultato.

### 4. Attiva GitHub Pages
- Sul repository, vai su **Settings** (in alto)
- Nel menu a sinistra, **Pages**
- **Source**: Deploy from a branch
- **Branch**: `main` + `/ (root)`
- Clicca **Save**
- Aspetta 1-3 minuti, poi ricarica la pagina

In cima vedrai un riquadro verde con scritto "Your site is live at https://...". Cliccalo!

### 5. Verifica
Apri il sito online e controlla:
- Marchio visibile in alto a sinistra
- Foto personale carica
- Tutti e 6 i lavori si vedono (incluso "Italia in bici")
- Pulsante "Scarica il CV" funzionante
- Funziona da cellulare (apri il link sullo smartphone)

## Aggiornamenti futuri

Per modificare un testo: clicca sul file su GitHub → icona matita → modifica → Commit.
Per aggiungere file: vai nella cartella → Add file → Upload files.

Il sito si aggiorna online automaticamente in 1-2 minuti dopo ogni commit.

## Costo: zero

GitHub e GitHub Pages sono gratis per repository pubblici, per sempre. Limiti generosi: 1 GB di spazio, 100 GB di banda al mese, HTTPS automatico.

## Problemi comuni

- **"404 Not Found" sul sito**: probabilmente `index.html` non è alla radice. Su GitHub deve apparire `index.html` direttamente, non dentro una sottocartella.
- **Immagini rotte**: nomi file con maiuscole/minuscole sbagliate. Su GitHub Pages è case-sensitive (a differenza di macOS). Controlla che corrispondano esattamente.
- **Pagina ancora bianca dopo il deploy**: aspetta 5 minuti, la prima volta GitHub ci mette di più.

Buona pubblicazione!
