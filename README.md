# gaia-homepage
Landing page di presentazione per **Gaia HSE** — piattaforma SaaS B2B per compliance HSE in ogni luogo di lavoro (uffici, stabilimenti, cantieri, ecc.).

## Sezioni
Hero · Problema · Prodotto (6 pillar) · Come funziona · Sparks · Target · Piani · Perché Gaia · FAQ · Contatti

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
- **Soluzione:** Dashboard cloud per documenti HSE, scadenze, figure normative e luoghi di lavoro, con Sparks (AI integrata).
- **Sparks:** Generazione documenti, classificazione, alert predittivi, analisi immagini da sede/campo.
- **Target:** Imprese e PMI multi-settore, figure della sicurezza (RSPP, CSE, preposti), consulenti.
- **Estetica:** Glassmorphism — base `#050a1b`, 15 sfere SVG viola→blu (7 taglie) con parallax allo scroll, pannelli vetro satinato.
- **Pricing:** Starter €49, Professional €149, Business €299.

Personalizzazioni possibili: colori, testi, logo, immagini, integrazione API per invio form.
