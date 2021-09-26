const mysql = require("mysql");
const { HOST, USER, PASSWORD, DB_NAME } = require("../config/secrets");

//database connection
let connection; 

// function handleDisconnect() {
//   connection = mysql.createPool({
//     host: HOST,
//     user: USER,
//     password: PASSWORD,
//     database: DB_NAME
//   });
  
//   // connection.connect();
    
//   connection.on("error", function (err) {
//     console.log("db error", err);
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       handleDisconnect(); 
//     } else {
//       throw err;
//     }
//   });
// }
// handleDisconnect();

connection = mysql.createConnection({
  host     : "buh8zfrbdzmzrbrrk0mt-mysql.services.clever-cloud.com",
  user     : "uxpfcsuvxincsgjs",
  password : "5th1CeNMp37SKaYVfryN",
  database : "buh8zfrbdzmzrbrrk0mt"
  })
connection.connect();


module.exports = connection;