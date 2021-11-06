var mysql = require('mysql');
var Connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_haircut"
  });
Connection.connect((Error) => {
    if(Error){
        console.log("Connecting to database is false :" + Error);
    }
    console.log("Connecting to database ...");
});
module.exports = Connection;
