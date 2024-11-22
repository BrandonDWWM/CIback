require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); 
const app = express();

app.use(express.json());

const titreRoute = require('./routes/titreRoute');
app.use('/api/titre', titreRoute);

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

db.connect((err) => {
    if (err) {
        console.error('Impossible de se connecter à la base de données:', err);
        process.exit(1); 
    } else {
        const port = process.env.PORT || process.env.PROD_DB_PORT;
        app.listen(port, () => {
            console.log(`Serveur en cours d'exécution sur le port ${port}`);
        });
    }
});

module.exports = app;