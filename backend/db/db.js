const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "axeqwe2543",
    database: "nodejs",
    port: "3306",
})

conn.connect((err) => {
    if(err){
        return console.log("connect database fail because:",err);
    }
    console.log("connect database succesfully");
})

module.exports = conn