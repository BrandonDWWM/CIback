require('dotenv').config();
const express = require('express');
const db = require('../config/db');
const router = express.Router();


// router.get('/list', (req, res) => {
//     const sql = 'SELECT * FROM `titre`';
//     db.query(sql, (err, results) =>{
//         if (err) { return res.status(500).send(err); }
//         else{ res.status(200).json(results); }
//     })
// })

router.get('/message', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.json({ message: 'Coucou' });
});

module.exports = router;