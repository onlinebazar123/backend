const connection = require("../Model/config");

const uuid = require('uuid')

const shipping = (req, res) => {
  const sqlQuery = `select * from 
  shipping`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const addShipping = (req, res) => {
    const {
        shipping_id,
        invoice_id,
        user_mobile,
        address,
        date_time,
        delivery_date} = req.body;
        
        const data = {
            shipping_id,
            invoice_id,
            user_mobile,
            address,
            date_time,
            delivery_date
        }
        console.log(data)
    
    const sqlQuery = `INSERT INTO shipping SET ?`;
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const updateShipping = (req, res) => {
    
        
        const data = [
            
            req.body.invoice_id,
            req.body.user_mobile,
            req.body.address,
            req.body.date_time,
            req.body.delivery_date,
            req.params.shipping_id
        ]
        console.log(data)
    
    const sqlQuery = `UPDATE shipping SET 
    invoice_id=?,
    user_mobile=?,
    address=?,
    date_time=?,
    delivery_date=? where shipping_id=?`;
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const deleteShipping = (req, res) => {
    const shipping_id = [req.params.shipping_id]
    const sqlQuery = `DELETE from 
    shipping  where shipping_id=?`;
    connection.query(sqlQuery,shipping_id, (err, result) => {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    });
  };

module.exports = {shipping,addShipping,updateShipping,deleteShipping}