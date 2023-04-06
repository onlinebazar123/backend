const connection = require('../Model/config')
const uuid = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const viewShop = (req,res)=>{
    const sqlQuery = 'select * from shop_registration' 
    connection.query(sqlQuery,(err,result)=>{
        if(err){
            res.send({status:400,response :err.sqlMessage })
        }
        else {
            res.send({status:200,response:result})
        }
    })
}
const addShop = async (req,res)=>{
   try{
    const { 
        registration_no,
        shop_id,
        shop_name,
        address,
        state,
        city,
        pin_code,
        contact_no,
        shop_owner,
        shop_type,
        email,
        gst_no,
        status,
        password} = req.body
        const salt =  await bcrypt.genSalt(8)
        console.log(salt)
        
        const passHash = await bcrypt.hash(password,salt)
        // console.log(passHash.toString())
       
        const shopData = {
            registration_no,
            shop_id:uuid.v4(),
            shop_name,
            address,
            state,
            city,
            pin_code,
            contact_no,
            shop_owner,
            shop_type,
            email,
            gst_no,
            status,
            password:passHash
        }
     
      
        console.log("data",shopData)
        const sqlQuery = 'INSERT INTO shop_registration SET ?'
        connection.query(sqlQuery,shopData,async(err,result)=>{
            if(err){
               return res.send({status:400,response:err.sqlMessage})
            }
            const id = shop_id;
            const secretkey = 'my name is simran';
            const token = await jwt.sign(id,secretkey)
            console.log(token)
          res.json({status:200,response:result})

   })
}
   catch(err){
    res.json({status:400,response:err.message})

}

    
   
            // else{
            //     res.send({status:200,response:result})
            // }

       
}

const login = async (req,res)=>{
    try{
        const {email,password} = req.body
        const sqlQuery = ` select * from shop_registration where email =?`
        connection.query(sqlQuery,email,async(err,result)=>{
            if(err){
                res.json({status:400,response:err.sqlMessage})
            }
            const pass = result[0].password;
            // console.log(pass)
            // console.log(password)
            const passwordCheck = await bcrypt.compare(password,pass)
            console.log(passwordCheck)
            if(passwordCheck){
                return res.json({status:400, response:err.message})
            }
            res.json({status:200,response:result,password:password})
        })

    }
    catch(err)
    {
        res.json({status:400,response:err.message})
    }
   
}
const updateShop = (req,res)=>{
    const shopData = [
        req.body.registration_no,
        req.body.shop_name,
        req.body.address,
        req.body.state,
        req.body.city,
        req.body.pin_code,
        req.body.contact_no,
        req.body.shop_owner,
        req.body.shop_type,
        req.body.email,
        req.body.gst_no,
        req.body.status,
        req.body.password,
        req.params.shop_id,

    ]
        
    sqlQuery = `UPDATE shop_registration SET 
   
    registration_no = ?,
    shop_name = ?,
    address=?,
    state=?,
    city=?,
    pin_code=?,
    contact_no=?,
    shop_owner=?,
    shop_type=?,
    email=?,
    gst_no=?,
    status=?,
    password=?
     WHERE  shop_id =?`
     connection.query(sqlQuery,shopData,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
     })
}
const getShopById = (req,res)=>{
    const shop_id = [req.params.shop_id];
    const sqlQuery = `SELECT *  from shop_registration WHERE shop_id= ?`
    connection.query(sqlQuery,shop_id,(err,result)=>{
     if(err){
         res.send({status:400,response:err.sqlMessage})
     }
     else{
         res.send({status:200,response:result})
     }
    })
 }
const deleteShop = (req,res)=>{
   const shop_id = [req.params.shop_id];
   const sqlQuery = `DELETE FROM shop_registration WHERE shop_id= ?`
   connection.query(sqlQuery,shop_id,(err,result)=>{
    if(err){
        res.send({status:400,response:err.sqlMessage})
    }
    else{
        res.send({status:200,response:result})
    }
   })
}
const getbyShopType = (req,res)=>{
    const shop_type = [req.params.shop_type];
    const sqlQuery = `SELECT * FROM shop_registration WHERE shop_type= ?`
    connection.query(sqlQuery,shop_type,(err,result)=>{
     if(err){
         res.send({status:400,response:err.sqlMessage})
     }
     else{
         res.send({status:200,response:result})
     }
    })
 }
module.exports = {viewShop,addShop,updateShop,deleteShop,login,getShopById,getbyShopType  }