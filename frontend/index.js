const express = require('express');
const app = express();


// Connexion à MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });

  connection.connect(err => {
    if (err) {
      return console.error('Erreur de connexion: ' + err.message);
    }
    console.log('Connecté au serveur MySQL');
  });
  
  app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
  });

