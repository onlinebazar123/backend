const connection = require("../Model/config");

const uuid = require('uuid')

const BankDetails = (req, res) => {
  const sqlQuery = `select * from 
  bank_detail`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const addBankDetails = (req, res) => {
    const {
        bank_name,
        account_no,
        ifsc_code,
        address,
        shop_id,
        state,
        city} = req.body;
        
        const data = {
           bank_name,
           account_no,
           ifsc_code,
           address,
           shop_id,
           state,
           city
        }
        console.log(data)
    
    const sqlQuery = `INSERT INTO bank_detail SET ?`;
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const updateBankDetails = (req, res) => {
    
        
        const data = [
           req.body.bank_name,
           req.body.ifsc_code,
           req.body.address,
           req.body.shop_id,
           req.body.state,
           req.body.city,
           req.params.account_no,
        ]
         
        console.log(data)
    
    const sqlQuery = `UPDATE bank_detail SET bank_name=?,
    ifsc_code=?,
    address=?,
    shop_id=?,
    state=?,
    city =? WHERE account_no=?`;
    
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
  const deleteBankDetails = (req, res) => {
    const  account_no = [req.params.account_no]
    const sqlQuery = `DELETE from 
    bank_detail WHERE account_no=?`;
    connection.query(sqlQuery,account_no, (err, result) => {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    });
  };
module.exports = {BankDetails,addBankDetails,updateBankDetails,deleteBankDetails}
