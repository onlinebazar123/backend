const connection = require("../Model/config");

const uuid = require('uuid')

const viewCart = (req, res) => {
  const sqlQuery = `select * from 
  add_to_cart`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const addCart = (req, res) => {
    const {
        cart_id,
        product_id,
        user_mobile,
        quantity,
        price} = req.body;
        
        const data = {
           cart_id,
           product_id,
           user_mobile,
           quantity,
           price
        }
        console.log(data)
    
    const sqlQuery = `p_id
    p_categoroy
    p_name
    price
    qty
    createdby
    created_on`;
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const UpdateCart = (req, res) => {
    
        
        const data = [
           
           req.body.product_id,
           req.body.user_mobile,
           req.body.quantity,
           req.body.price,
           req.params.cart_id,
        ]
        console.log(data)
    
    const sqlQuery = `UPDATE add_to_cart SET  
    product_id=?,
    user_mobile=?,
    quantity=?,
    price=? WHERE cart_id=?`;
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const deleteCart = (req, res) => {
    const id = [req.params.cart_id]
    const sqlQuery = `DELETE  from 
    add_to_cart WHERE cart_id=?`;
    connection.query(sqlQuery,id,(err,result) => {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    });
  };

module.exports = {viewCart,addCart,UpdateCart,deleteCart}