const connection = require("../Model/config");

// const uuid = require('uuid')

const viewProdSpec = (req, res) => {
  const sqlQuery = `select * from 
  product_specification`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const AddProdSpec = (req, res) => {
  const {
    product_specification_id,
    product_id,
    product_name,
    height,
    width,
    weight,
    size,
    colour,
    price,
    dimension,
    mfg_date,
    exp_date,
    images,
  } = req.body;
  const userdata = {
    product_specification_id,
    product_id,
    product_name,
    height,
    width,
    weight,
    size,
    colour,
    price,
    dimension,
    mfg_date,
    exp_date,
    images
  }
  const sqlQuery = `INSERT INTO product_specification SET ?`
  connection.query(sqlQuery,userdata, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const UpdateProdSpec = (req, res) => {
  const userdata =
    [
    req.body.product_id,
    
    req.body.product_name,
    req.body.height,
    req.body.width,
    req.body.weight,
    req.body.size,
    req.body.colour,
    req.body.price,
    req.body.dimension,
    req.body.mfg_date,
    req.body.exp_date,
    req.body.images,
    req.params.product_specification_id,
  ]
  
  const sqlQuery = `UPDATE product_specification SET
  product_id=?,
  product_name=?,
  height=?,
  width=?,
  weight=?,
  size=?,
  colour=?,
  price=?,
  dimension=?,
  mfg_date=?,
  exp_date=?,
  images=? WHERE product_specification_id=?`
  connection.query(sqlQuery,userdata, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const DeleteProdSpec = (req, res) => {
  const id = [req.params.product_specification_id]
  const sqlQuery = `DELETE from product_specification
  WHERE product_specification_id=?`
  
  connection.query(sqlQuery,id, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
module.exports = {viewProdSpec,AddProdSpec,UpdateProdSpec,DeleteProdSpec};