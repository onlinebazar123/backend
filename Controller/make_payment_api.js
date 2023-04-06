const connection = require("../Model/config");

const uuid = require('uuid')

const viewPayment = (req, res) => {
  const sqlQuery = `select * from 
  make_payment`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const addPayment = (req, res) => {
    const {
        invoice_id,
        cart_id,
        transaction_id,
        date_time,
        total_amount,
        tax,
        payment_mode,
        status,
        offer_id} = req.body;
        
        const data = {
            invoice_id,
            cart_id,
            transaction_id,
            date_time,
            total_amount,
            tax,
            payment_mode,
            status,
            offer_id
        }
        console.log(data)
    
    const sqlQuery = `INSERT INTO make_payment SET ?`;
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const updatePayment = (req, res) => {
   
        
        const data = [
            req.body.invoice_id,
            req.body.cart_id,
            req.body.date_time,
            req.body.total_amount,
            req.body.tax,
            req.body.payment_mode,
            req.body.status,
            req.body.offer_id,
            req.params.transaction_id
        ]
            
        console.log(data)
    
    const sqlQuery = `UPDATE make_payment SET invoice_id=?,
    cart_id=?,
    date_time=?,
    total_amount=?,
    tax=?,
    payment_mode=?,
    status=?,
    offer_id=? WHERE transaction_id=?`;
   
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const deletePayment = (req, res) => {
    const transaction_id = [req.params.transaction_id]
    const sqlQuery = `DELETE from 
    make_payment`;
    connection.query(sqlQuery,transaction_id, (err, result) => {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    });
  };


module.exports = {viewPayment,addPayment,updatePayment,deletePayment} 