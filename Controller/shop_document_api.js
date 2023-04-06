const connection = require("../Model/config");

const uuid = require('uuid')

const viewDoc = (req, res) => {
  const sqlQuery = `select * from 
    shop_document`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const addDoc = (req,res)=>{
  const {
         shop_id,
         reg_card,
         aadhar_card,
         pan_card
  } = req.body;
  const userdata = {
    shop_id,
    reg_card,
    aadhar_card,
    pan_card
  }
  const sqlQuery = `INSERT INTO shop_document SET ?`
  connection.query(sqlQuery,userdata, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });

}
const updateShopDoc = (req,res)=>{
  const shopData = [
    req.body.reg_card,
    req.body.aadhar_card,
    req.body.pan_card,
    req.params.shop_id
   ]
    
   
  console.log(shopData);
  const sqlQuery = `UPDATE shop_document SET 
  reg_card=?,
  aadhar_card=?,
  pan_card=? WHERE shop_id=?`
  connection.query(sqlQuery,shopData,(err,result)=>{
    if(err){
       res.send({status:'400',Response:err.sqlMessage})
    }
    else{
      res.send({status:'200',Response:result})
    }
  })
}
const deleteDoc = (req,res)=>{
  const docId = [req.params.shop_id]
  const sqlQuery = `DELETE FROM shop_document WHERE shop_id=?`;
  connection.query(sqlQuery,docId,(err,result)=>{
    if(err){
      res.send({status:'400',Response:err.sqlMessage})
   }
    else{
     res.send({status:'200',Response:result})
   }
  })
}
module.exports = {viewDoc,addDoc,updateShopDoc,deleteDoc}