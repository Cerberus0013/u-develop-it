const express = require('express');
const PORT = process.env.PORT || 3001;

const mysql = require('mysql2');

const app = express();

//adding express middleware

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//connect to DB
const db =mysql.createConnection({
    host: 'localhost',
    //your SQL username,
    user: 'root',
    //your mysqql password
    password:'MyNewPassword',
    database: 'election'
},
console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
}); 

app.get('/', (req, res) => {
    res.json( {
message: 'Hello, this is difficult'
    })
});

//default response to user for requets not found

app.use((req, res) => {

    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})