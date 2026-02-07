const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per il parsing JSON
app.use(express.json());

// Array in memoria per i dati degli utenti
const users = [
  { id: 1, name: 'Mario Rossi', email: 'mario.rossi@example.com' },
  { id: 2, name: 'Laura Bianchi', email: 'laura.bianchi@example.com' },
  { id: 3, name: 'Giuseppe Verdi', email: 'giuseppe.verdi@example.com' },
  { id: 4, name: 'Anna Neri', email: 'anna.neri@example.com' }
];

// Endpoint GET /users
app.get('/users', (req, res, next) => {
  try {
    // Simulazione di possibile errore (opzionale per demo)
    if (!users) {
      throw new Error('Dati utenti non disponibili');
    }
    
    // Restituisce l'array degli utenti in formato JSON
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    next(error);
  }
});

// Endpoint root per test
app.get('/', (req, res) => {
  res.json({
    message: 'Benvenuto alla REST API',
    endpoints: {
      users: '/users'
    }
  });
});

// Middleware di gestione degli errori
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || 'Errore interno del server'
  });
});

// Middleware per gestire route non trovate
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint non trovato'
  });
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
  console.log(`Prova l'endpoint: http://localhost:${PORT}/users`);
});

module.exports = app;
