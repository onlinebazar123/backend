const connection = require('../Model/config')
const getInventory = (req,res)=>{
    const sqlQuery = `SELECT * FROM product_inventory`
    connection.query(sqlQuery,(err,result)=>{
        if(err){
            res.send({status:400,response :err.sqlMessage })
        }
        else {
            res.send({status:200,response:result})
        }
    })
}
const addInventory = (req,res)=>{
    const {
        product_id,
        category_id,
        sub_category_id,
        product_name,
        product_company,
        shop_id,
        price,
        quantity
    } = req.body;
    const userdata = {
        product_id,
        category_id,
        sub_category_id,
        product_name,
        product_company,
        shop_id,
        price,
        quantity
    }
    const sqlQuery = `INSERT INTO product_inventory SET ?`
    connection.query(sqlQuery,userdata,(err,result)=>{
        if(err){
            res.send({status:400,response :err.sqlMessage })
        }
        else {
            res.send({status:200,response:result})
        }
    })
}
const updateInventory = (req,res)=>{
   const userdata = [
    req.body.category_id,
    req.body.product_name,
    req.body.product_company,
    req.body.shop_id,
    req.body.price,
    req.body.quantity,
    req.params.product_id,
]
console.log(userdata)
 const sqlQuery = `UPDATE product_inventory SET 
 category_id=?,
 sub_category_id=?,
 product_name=?,
 product_company=?,
 shop_id=?,
 price=?,
 quantity=? 
 WHERE product_id=?`
 connection.query(sqlQuery,userdata,(err,result)=>{
    if(err){
        res.send({status:400,response :err.sqlMessage })
    }
    else {
        res.send({status:200,response:result})
    }
 })
}
const deleteInventory = (req, res) => {
    id = [req.params.product_id];
    sqlQuery = `DELETE FROM product_inventory where product_id =?`;
    connection.query(sqlQuery, id, (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        res.send(result);
      }
    });
  };

module.exports = {getInventory,addInventory,updateInventory,deleteInventory}