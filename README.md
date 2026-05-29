# gaia-homepage
Landing page di presentazione per **Gaia HSE** — piattaforma SaaS B2B per compliance HSE in ogni luogo di lavoro (uffici, stabilimenti, cantieri, ecc.).

## Sezioni
Hero · Problema · Prodotto (6 pillar) · Come funziona · Sparks · Target · Perché Gaia · FAQ · Contatti

## Deploy (Cloudflare Pages)

Sito pubblicato sull’account **Gaia HSE** via Cloudflare Pages.

| URL | Uso |
|-----|-----|
| https://gaia-homepage.pages.dev | Produzione |
| Preview | URL `*.gaia-homepage.pages.dev` per ogni deploy |

Deploy manuale dalla cartella del progetto:

```bash
npm install
CLOUDFLARE_ACCOUNT_ID=85bbb6066e81e0c1c8306596bdf766e0 npm run deploy
```

**Dominio custom** (es. `gaiahse.com`): Cloudflare Dashboard → Workers & Pages → `gaia-homepage` → Custom domains → aggiungi il dominio e segui i record DNS.

### CI GitHub Actions

Il workflow `.github/workflows/deploy-cloudflare-pages.yml` deploya su ogni push su `main`. Imposta i secret del repository:

- `CLOUDFLARE_API_TOKEN` — token con permesso **Cloudflare Pages — Edit**
- `CLOUDFLARE_ACCOUNT_ID` — `85bbb6066e81e0c1c8306596bdf766e0`

## Come provare in locale

Apri la cartella del progetto e avvia un server statico (es. Python):

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000/index.html
```

File principali creati:

- `index.html` — pagina principale (tone & brand: minimal, tech-forward, dark)
- `css/styles.css` — stili (tema dark/neutral)
- `js/main.js` — script minimo (toggle nav, form)

Briefing integrato:

- **Cos'è:** Piattaforma SaaS B2B per compliance HSE (Health, Safety & Environment).
- **Problema:** Carta, email e consulenti esterni → inefficienza, errori, rischio sanzioni.
- **Soluzione:** Piattaforma cloud per documenti HSE, scadenze, figure normative e luoghi di lavoro, con Sparks (AI integrata).
- **Sparks:** Generazione documenti, classificazione, alert predittivi, analisi immagini da sede/campo.
- **Target:** Imprese e PMI multi-settore, figure della sicurezza (RSPP, CSE, preposti), consulenti.
- **Estetica:** Glassmorphism + hero/Sparks in stile HUD — base `#050a1b`, 6 sfere SVG ai bordi con parallax.

## Form contatti

1. **Formspree (consigliato):** crea un form su [formspree.io](https://formspree.io), imposta le notifiche su **info@gaiahse.com** e metti l’ID in `data-formspree-id` sul tag `<form id="contact-form">` in `index.html`.
2. **Senza Formspree:** il submit apre `mailto:info@gaiahse.com` con messaggio precompilato e conferma in pagina.

Modulo con checkbox privacy obbligatoria → sezione `#privacy`.
