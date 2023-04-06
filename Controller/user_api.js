const connection = require('../Model/config')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require('dotenv').config()
// const secretKey = process.env.SECRET_KEY
const secretKey = "secret key for authentication"
const getUser = (req,res)=>{
    const sqlQuery = `select * from user`;
    connection.query(sqlQuery,(err,result)=>{
        if(err){
            res.send({status:'400',response:err.sqlMessage})
        }
        else{
            res.send({status:'200',response:result})
        }

    })
}
const getUserByName = (req,res)=>{
    const name = req.params.name;
    // const password = req.params.password
    
    const sqlQuery = `SELECT * from user where name like '%${name}%'`
    connection.query(sqlQuery,(err,result)=>{
        if(err){
            res.send({
                status:400,
                Response:err.sqlMessage
            })
        }
        else{
            res.send({
                status:200,
                result
            })
        }
    })
}
const userStatus = (req,res)=>{
    const status = req.params.status;
    // const password = req.params.password
    
    const sqlQuery = `SELECT * from user where status=?`
    connection.query(sqlQuery,status,(err,result)=>{
        if(err){
            res.send({
                status:400,
                Response:err.sqlMessage
            })
        }
        else{
            res.send({
                status:200,
                result
            })
        }
    })
}
const getUserByEmail = (req,res)=>{
  
    const email = req.params.email;
    // const password = req.params.password
    
    const sqlQuery = `SELECT * from user where email=?`
    connection.query(sqlQuery,email,(err,result)=>{
        if(err){
            res.send({
                status:400,
                Response:err.sqlMessage
            })
        }
        else{
            if(result.length == 1){
                const pass = result[0].password;
                // const checkPass = bcrypt.compare(pass,password)
                // if(checkPass){
                //      res.send({
                //         Response:result[0].password
                //      })
                // }
                res.send({
                    Response:result
                })
            }
        }
    })
}
const getUserAssendingOrder = async (req,res)=>{
    const name = req.body.name
   const sqlQuery = `SELECT * FROM user ORDER BY sort = ?`
   connection.query(sqlQuery,name,(err,result)=>{
    if(err){
        res.send({status:400,
        Response:err.sqlMessage})
    }
    else{
        res.send({status:200,
       Response:result})  
    }
   })

}
const login = async (req,res)=>{
    const {email,password} = req.body;
    const data = {email,password}
    console.log(data)
    console.log(secretKey)
    jwt.sign({data},secretKey,{expiresIn:"300s"},(err,Token)=>{
        res.json({
            Token,
            status:200,
            message:"user Logged in successfully"
        })
    }) 
   
}
const userProfile = (req,res)=>{

 jwt.verify(req.token,secretKey,(err,result)=>{
    if(err){
        res.send({
            result:"Invalid User Access"
        })
    }
    else{
        res.json({
            message:"profile accessed",
             result
        })
    }
 })

}

const role_login = async(req,res)=>{
    const {email,password} = req.body;
    const data = {email,password}
    console.log(data)
    // console.log("email",email)
    // console.log("password",password)
   
    const sqlQuery = `SELECT * FROM USER WHERE email=?`
   await connection.query(sqlQuery,email,(err,result)=>{
    try {
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            if(result.length===0){
                res.json({
                    status:false,
                    email:"",
                    role:""
                })
            }
            else{
                res.send({status:true,
                email:result[0].email,
                role:result[0].role})
            }
            console.log(result[0].role)
            if(result[0].role==="admin")
            {
                res.send({status:200,response:"admin login successfully"})
            }
            else if(result[0].role==="user"){
                res.send({status:200,response:"user login successfully"})
            }
            else if(result[0].role==="shopekeper")
            {
                res.send({status:200,response:"shopkeper login successfully"})
            }
            else{
                res.send({status:400,response:"user not exist"})
            }
            // if(result[0]===undefined){
            //     throw new Error("invalid User Credential!!!!!!")
            //  }
            
           }
          
        
    } catch (error) {
        // console.log(error)
        res.send({status:400,response:error.message})
    }
        
    })
}
const addUser = async (req,res)=>{
    const {
        id,
        name,
        email,
        password,
        role} = req.body;
        const newPass = password.toString()
       const salt = await bcrypt.genSalt(8)
       console.log(salt)
       const passHash  = await bcrypt.hash(newPass,salt)
       console.log(passHash)
        const userdata = {
            id,
            name,
            email,
            password:passHash,
            role               
        }
        console.log(userdata)
    const sqlQuery = `INSERT INTO user SET ?`
    connection.query(sqlQuery,userdata,(err,result)=>{
        if(err){
            res.send({status:'400',response:err.sqlMessage})
        }
        else{
            res.send({status:'200',response:result})
        }
    })
}
const updateUser = (req,res)=>{
    const userdata = [
        
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.role, 
        req.params.id
    ]
    console.log(userdata)
    const sqlQuery = `UPDATE user SET 
    name =?,
    email =?,
    password =?,
    role =? WHERE id =?`
    connection.query(sqlQuery,userdata,(err,result)=>{
        if(err){
            res.send({status:'400',response:err.sqlMessage})
        }
        else{
            res.send({status:'200',response:result})
        }
    })
}
const deleteUser = (req,res)=>{
    const user_id = [req.params.id];
    const sqlQuery =`DELETE FROM user WHERE ID = ?`
    connection.query(sqlQuery,user_id,(err,result)=>{
        if(err){
            res.send({status:'400',response:err.sqlMessage})
        }
        else{
            res.send({status:'200',response:result})
        }
    })
}
module.exports = {getUser,addUser,updateUser,deleteUser,role_login,login,userProfile,
    getUserByEmail,getUserByName,
    getUserAssendingOrder,
    userStatus}