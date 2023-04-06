const connection = require("../Model/config");

const uuid = require('uuid')

const viewWishlist = (req, res) => {
  const sqlQuery = `select * from 
  add_to_wishlist`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const addWishlist = (req, res) => {
    const {
        wishlist_id,
        product_id,
        user_mobile,
        quantity,
        price} = req.body;
        
        const data = {
            wishlist_id,
            product_id,
            user_mobile,
            quantity,
            price
        }
        console.log(data)
    
    const sqlQuery = `INSERT INTO add_to_wishlist SET ?`;
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const updateWishlist = (req, res) => {
    
        
        const data = [
            
            req.body.product_id,
            req.body.user_mobile,
            req.body.quantity,
            req.body.price,
            req.params.wishlist_id,
        ]
        console.log(data)
    
    const sqlQuery = `UPDATE add_to_wishlist SET 
    product_id=?,
    user_mobile=?,
    quantity=?,
    price=? where wishlist_id=?`;
    connection.query(sqlQuery,data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const deleteWishlist = (req, res) => {
    const id = [req.params.wishlist_id]
    const sqlQuery = `DELETE  from 
    add_to_wishlist where wishlist_id=?`;
    connection.query(sqlQuery,id,(err, result) => {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    });
  };
module.exports = {viewWishlist,addWishlist,updateWishlist,deleteWishlist}