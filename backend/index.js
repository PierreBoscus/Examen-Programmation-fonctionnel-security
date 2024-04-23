const express = require('express');
const mysql = require('mysql');
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
  
  app.listen(5000, () => {
    console.log('Serveur démarré sur http://localhost:5000');
  });

