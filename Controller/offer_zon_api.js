const connection = require("../Model/config");

const uuid = require('uuid')

const viewOffer = (req, res) => {
  const sqlQuery = `select * from 
  offers_zone`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const addOffer = (req, res) => {
  const {
       offer_id,
       coupan_code,
       from_date,
       to_date,
       discount_percentage,
       flat_discount,
       bank_offers,
       valid_in
  } = req.body;
  const userdata = {
    offer_id,
    coupan_code,
    from_date,
    to_date,
    discount_percentage,
    flat_discount,
    bank_offers,
    valid_in
  };
  console.log("body",userdata)
  const sqlQuery = `INSERT INTO offers_zone SET ?`;
  connection.query(sqlQuery, userdata, (err, result) => {
    if (err) {
      res.send({ status: 400, response: err.sqlMessage });
    } else {
      res.send(result);
    }
  });
};
const updateOffer = (req, res) => {
  
  const userdata = [
    req.body.coupan_code,
    req.body.from_date,
    req.body.to_date,
    req.body.discount_percentage,
    req.body.flat_discount,
    req.body.bank_offers,
    req.body.valid_in,
    req.params.offer_id,
  ];
    
  console.log("body",userdata)
  const sqlQuery = `UPDATE offers_zone SET 
  coupan_code=?,
  from_date=?,
  to_date=?,
  discount_percentage=?,
  flat_discount=?,
  bank_offers=?,
  valid_in=?
  WHERE offer_id=?`;
    
  connection.query(sqlQuery, userdata, (err, result) => {
    if (err) {
      res.send({ status: 400, response: err.sqlMessage });
    } else {
      res.send(result);
    }
  });
};
const deleteOffer = (req, res) => {
  const offer_id = [req.params.offer_id]
  const sqlQuery = `DELETE from 
  offers_zone WHERE offer_id=?`;
  connection.query(sqlQuery,offer_id,(err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
module.exports = {viewOffer,addOffer,updateOffer,deleteOffer}