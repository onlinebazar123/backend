
const connection = require('../Model/config')
const uuid = require('uuid')
const viewCategory = (req,res)=>{
    const sqlQuery = `select *from product_category`
    connection.query(sqlQuery,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
    })

}
const addcategory = (req,res)=>{
    const data = {
        category_id:uuid.v4(),
        category_name :req.body.category_name,
        category_image:req.file.path
       } 
    // const data = {
    //     category_id,
    //     category_name,
    //     category_image
    // }
    console.log(data)
    const sqlQuery = `INSERT INTO product_category SET ?`
    connection.query(sqlQuery,data,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
    })
}
const updateCategory = (req,res)=>{
    const cat_data = [req.body.category_name,req.body.category_image,req.params.category_id] 
    const sqlQuery = `UPDATE product_category SET category_name =?,
    category_image =? WHERE category_id =?`;
    connection.query(sqlQuery,cat_data,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
    })
}
const deleteCategory =  (req,res)=>{
    const cat_id = [req.params.category_id]
    const sqlQuery = `DELETE FROM product_category where category_id =?`
    connection.query(sqlQuery,cat_id,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
    })
}
module.exports = {viewCategory,addcategory,updateCategory,deleteCategory}