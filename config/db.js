const mysql = require('mysql2');
require('dotenv').config();

function getCurrentTimestamp() {
    const now = new Date();
    return now.toLocaleString(); 
}

const isProduction = process.env.NODE_ENV === 'production';
const db = mysql.createConnection({
    host: isProduction ? process.env.PROD_DB_HOST : process.env.DB_HOST,
    user: isProduction ? process.env.PROD_DB_USER : process.env.DB_USER,
    password: isProduction ? process.env.PROD_DB_PASSWORD : process.env.DB_PASSWORD,
    database: isProduction ? process.env.PROD_DB_NAME : process.env.DB_NAME,
    port: isProduction ? process.env.PROD_DB_PORT : process.env.PORT,
});

db.connect((err) => {
    const timestamp = getCurrentTimestamp();
    if (err) {
        console.error(`[${timestamp}] Erreur de connexion à la base de données :`, err);
    } else {
        console.log(`[${timestamp}] Connecté à la base de données`);
    }
});

module.exports = db;