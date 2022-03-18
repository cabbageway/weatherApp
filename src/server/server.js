const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 8000;
const table = 'users';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "reactdb",
});

const pool2 = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
});

app.listen(port, () => {
    console.log(`App server now listening to port ${port}`);
});

app.get('/api/users', (req, res) => {
    pool.query(`select * from ${table}`, (err, rows) => {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    });
});