const connection = require("../Model/config");


const showAdmin = (req, res) => {
  const sqlQuery = `select * from 
    admin_details`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};
const show_particular = (req,res)=>{
  const adminid = [
    req.params.admin_id
]
  const sqlQuery = `SELECT * FROM admin_details where admin_id =?`
 connection.query(sqlQuery,adminid,(err,result)=>{
  if(err){
    res.send({status:'400',response:err.sqlMessage})
  }
  else{
    res.send({status:'400',response:result})
  }
  
 })
}
const addAdmin = (req, res) => {
  const {
  
    admin_name,
    email_id,
    mobile_no,
    gender,
    password,
    aadhar_no,
    pan_card,
    gst_no,
    roll,
    areaofoperation,
    
  } = req.body;
  const userdata = {
   
    admin_name,
    email_id,
    mobile_no,
    gender,
    password,
    aadhar_no,
    pan_card,
    gst_no,
    roll,
    areaofoperation,
   
  };
  console.log("body",userdata)
  const sqlQuery = `INSERT INTO admin_details SET ?`;
  connection.query(sqlQuery, userdata, (err, result) => {
    if (err) {
      res.send({ status: 400, response: err.sqlMessage });
    } else {
      res.send(result);
    }
  });
};
const editAdmin = (req, res) => {
  const userdata = [
    req.body.admin_name,
    req.body.email_id,
    req.body.mobile_no,
    req.body.gender,
    req.body.password,
    req.body.aadhar_no,
    req.body.pan_card,
    req.body.gst_no,
    req.body.areaofoperation,
    req.body.roll,
    req.params.admin_id,
  ];
  const sqlQuery = `UPDATE admin_details SET 
    admin_name=?,
    email_id=?,
    mobile_no=?,
    gender=?,
    password=?,
    aadhar_no=?,
    pan_card=?,
    gst_no=?,
    roll=?,
    areaofoperation=?
    WHERE admin_id = ?
    `;
  connection.query(sqlQuery, userdata, (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      res.send(result);
    }
  });
};
const deleteAdmin = (req, res) => {
  id = [req.params.admin_id];
  sqlQuery = `DELETE FROM admin_details where admin_id =?`;
  connection.query(sqlQuery, id, (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      res.send(result);
    }
  });
};

module.exports = { showAdmin, addAdmin, editAdmin, deleteAdmin,show_particular };
