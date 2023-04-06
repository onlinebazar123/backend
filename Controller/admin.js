const connection = require("../Model/config")
const getadmin = (req,res)=>{
    const sqlQuery = "select * from admin"
    connection.query(sqlQuery,(err,result)=>{
        if(err){
            console.log(err.sqlMessage)
        }
        else{
            res.send({status:200,Response:result})
        }
    })
}
const login = async(req,res)=>{

    const email = req.body.admin_email;
    const password = req.body.admin_pass;
    // const sdata = {email,password}
    const sqlQuery = `select * from admin where email='${email}' and password='${password}'`
    console.log(sqlQuery)
   await connection.query(sqlQuery,(err,result)=>{
    console.log("result ",result)
        if(err){
            console.log(err.sqlMessage)
        }
        else{
            // console.log("result is this",result.length)
            if(result.length==1){
                res.send({status:201, response:"User Logged in Successfully"})
            }
            else{
                res.send({status:400,response:"not a valid user"})
            }
            // res.send({status:200,Response:result})
        }
    })
}
const addAdmin = (req,res)=>{
   
    const email = req.body.admin_email;
    const password = req.body.admin_password
    const data = {email,password}
    const sqlQuery = `SELECT * FROM admin WHERE admin_email =?`
    console.log(data)
    connection.query(sqlQuery,email,(err,result)=>{
        if(err){
            console.log(err.sqlMessage)
        }
        else{
            res.send({status:200,Response:"Admin logged in successfully"})
        }
    })
}
module.exports = {getadmin,addAdmin,login}