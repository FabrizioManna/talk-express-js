# Talk ExpressJS

Un semplice guestbook realizzato con ExpressJS e Bootstrap.

## Avvio

1. Avvia i servizi con `docker-compose up --build`.
2. Installa le dipendenze con `npm install`.
3. Avvia il progetto in modalità sviluppo  `npm run dev`.

## Uso

1. Accedi all'applicazione all'indirizzo `http://localhost:3000/formguest`.
2. Compila il form con il tuo nome e messaggio.
3. Clicca sul pulsante "Invia".
4. Vai alla pagina `http://localhost:3000` e vedi i messaggi caricati.
   
## Entrypoint

1. GET <http://localhost:3000/guestbook> per avere la lista json dei messaggi.
2. POST <http://localhost:3000/guestbook> per crearne uno nuovo.

## Un saluto a tutta la community
