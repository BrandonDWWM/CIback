require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); 
const app = express();

app.use(express.json());

const titreRoute = require('./routes/titreRoute');
app.use('/api', titreRoute);

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

db.connect((err) => {
    const timestamp = new Date().toLocaleString();
    if (err) {
        console.error(`[${timestamp}] Impossible de se connecter à la base de données :`, err);
        process.exit(1); 
    } else {
        const port = process.env.DB_PORT || 3306;
        console.log(`[${timestamp}] Connecté à la base de données`);
        app.listen(port, () => {
            console.log(`[${timestamp}] Serveur en cours d'exécution sur le port ${port}`);
        });
    }
});

module.exports = app;