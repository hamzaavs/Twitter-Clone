const mysql = require("mysql2");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "twitter_deneme"
});

con.connect((err) => {
    if (err) {
        console.log("Error in DB connect " + JSON.stringify(err, undefined, 2));
    } else {
        console.log("DB Connected Successfull");
    }
});

module.exports = con;