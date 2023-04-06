const connection = require("../Model/config")
const getRole = (req,res)=>{
    const sqlQuery = `select * from user_role`
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
                Response:result
            })
        }
    })
}
const addRole = (req,res)=>{
    
    const data = req.body;
    const sqlQuery = `INSERT INTO user_role SET ?`
    connection.query(sqlQuery,data,(err,result)=>{
        if(err){
            res.send({
                status:400,
                Response:err.sqlMessage
            })
        }
        else{
            res.send({
                status:200,
                Response:result
            })
        }
    })

}
const getAllRoles = (req,res)=>{
 
    const sqlQuery = `SELECT role_name from user_role`
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
                Response:result
            })
        }
    })
}
const selectUserId = (req,res)=>{
    const name = req.params.role_name;
    const sqlQuery = ` select role_id FROM user_role where role_name=? `
    connection.query(sqlQuery,name,(err,result)=>{
        if(err){
            res.send({
                status:400,
                Response:"id not found"
            })
        }
        else{
            res.send({
                status:200,
                Response:result
            })
        }
    })
}

const deleteRole = (req,res)=>{
    const id = req.params.role_id;
    const sqlQuery = ` DELETE FROM user_role where role_id =?`
    connection.query(sqlQuery,id,(err,result)=>{
        if(err){
            res.send({
                status:400,
                Response:err.sqlMessage
            })
        }
        else{
            res.send({
                status:200,
                Response:result
            })
        }
    })
}

module.exports = {getRole,addRole,deleteRole,getAllRoles,selectUserId}