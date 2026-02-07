# REST API Node.js con Express

Una semplice REST API realizzata con Node.js e Express che gestisce un endpoint per gli utenti.

## Caratteristiche

- ✅ Endpoint GET `/users` per recuperare la lista degli utenti
- ✅ Dati memorizzati in un array in memoria
- ✅ Risposta in formato JSON
- ✅ Gestione completa degli errori
- ✅ Middleware per endpoint non trovati (404)
- ✅ Middleware per errori del server (500)

## Requisiti

- Node.js (versione 14 o superiore)
- npm (Node Package Manager)

## Installazione

1. Clona il repository:
```bash
git clone https://github.com/fx97debug/supreme-octo-robot.git
cd supreme-octo-robot
```

2. Installa le dipendenze:
```bash
npm install
```

## Utilizzo

### Avvio del server

```bash
npm start
```

Il server verrà avviato sulla porta 3000 (o sulla porta specificata nella variabile d'ambiente PORT).

### Endpoint disponibili

#### GET /
Endpoint di benvenuto che mostra gli endpoint disponibili.

**Esempio di richiesta:**
```bash
curl http://localhost:3000/
```

**Risposta:**
```json
{
  "message": "Benvenuto alla REST API",
  "endpoints": {
    "users": "/users"
  }
}
```

#### GET /users
Recupera la lista di tutti gli utenti.

**Esempio di richiesta:**
```bash
curl http://localhost:3000/users
```

**Risposta:**
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "id": 1,
      "name": "Mario Rossi",
      "email": "mario.rossi@example.com"
    },
    {
      "id": 2,
      "name": "Laura Bianchi",
      "email": "laura.bianchi@example.com"
    },
    {
      "id": 3,
      "name": "Giuseppe Verdi",
      "email": "giuseppe.verdi@example.com"
    },
    {
      "id": 4,
      "name": "Anna Neri",
      "email": "anna.neri@example.com"
    }
  ]
}
```

### Gestione degli errori

La API include una gestione completa degli errori:

- **404 Not Found**: Restituito quando si tenta di accedere a un endpoint non esistente
- **500 Internal Server Error**: Restituito in caso di errori del server

**Esempio di errore 404:**
```bash
curl http://localhost:3000/nonexistent
```

**Risposta:**
```json
{
  "success": false,
  "error": "Endpoint non trovato"
}
```

## Struttura del progetto

```
supreme-octo-robot/
├── server.js         # File principale del server Express
├── package.json      # Dipendenze e script npm
├── .gitignore        # File da ignorare in git
└── README.md         # Documentazione
```

## Tecnologie utilizzate

- **Node.js**: Runtime JavaScript
- **Express**: Framework web per Node.js

## Licenza

ISC

