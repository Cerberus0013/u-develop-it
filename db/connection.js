
const mysql = require("mysql2");


const db = mysql.createConnection(
  {
    host: "localhost",
    //your SQL username,
    user: "root",
    //your mysqql password
    password: "MyNewPassword",
    database: "election",
  },
  console.log("Connected to the election database.")
);


module.exports = db;