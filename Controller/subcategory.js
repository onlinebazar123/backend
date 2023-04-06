
const connection = require('../Model/config')
const uuid = require("uuid")
const viewSubCategory = (req,res)=>{
    const sqlQuery = `select *from product_sub_category`
    connection.query(sqlQuery,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
    })

}
const displaySubCategory = (req,res)=>{
    const sqlQuery = `select category_name,sub_category_name,sub_category_image from product_sub_category,product_category where product_category.category_id = product_sub_category.category_id`
    connection.query(sqlQuery,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
    })

}
const addSubcategory = (req,res)=>{
   
    const sub_category_name = req.body.sub_category_name
    const sub_category_image = req.file.path
    const category_id = req.body.category_id
    const data = {
        category_id,
        sub_category_id:uuid.v4(),
        sub_category_name,
        sub_category_image
    }
    console.log(data)
    const sqlQuery = `INSERT INTO product_sub_category SET ?`
    connection.query(sqlQuery,data,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
    })
}
const updateSubCategory = (req,res)=>{
    const cat_data = [req.body.category_id,req.body.sub_category_name,req.body.sub_category_image,req.params.sub_category_id] 
    const sqlQuery = `UPDATE product_sub_category SET category_id =?,sub_category_name =?,
    sub_category_image =? WHERE sub_category_id =?`;
    connection.query(sqlQuery,cat_data,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
    })
}
const deleteSubCategory =  (req,res)=>{
    const sub_cat_id = [req.params.sub_category_id]
    const sqlQuery = `DELETE FROM product_sub_category where sub_category_id =?`
    connection.query(sqlQuery,sub_cat_id,(err,result)=>{
        if(err){
            res.send({status:400,response:err.sqlMessage})
        }
        else{
            res.send({status:200,response:result})
        }
    })
}
module.exports = {viewSubCategory,addSubcategory,updateSubCategory,deleteSubCategory,displaySubCategory}