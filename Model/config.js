const mysql = require('mysql')
const connection = mysql.createConnection({
    host:"localhost",
    password:"",
    database:"flipix",
    user :"root",
    port:3306
})
connection.connect((err)=>{
    if(err){
        console.log(err.sqlMessage)
    }
    else{
        console.log("connection is created")
    }
})
module.exports = connection