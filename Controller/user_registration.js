const connection = require("../Model/config");
const uuid = require('uuid')
const viewUser = (req, res) => {
  const sqlQuery = `select * from user_registration`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send({ status: "400", response: err.sqlMessage });
    } else {
      res.send({ status: "200", response: result });
    }
  });
};
const getUserById = (req,res)=>{
  const id = req.params.user_id;
  const sqlQuery = `select * from user_registration where user_id=?`;
  connection.query(sqlQuery,id, (err, result) => {
    if (err) {
      res.send({ status: "400", response: err.sqlMessage });
    } else {
      res.send({ status: "200", response: result });
    }
  });
}
const addUser = (req, res) => {
  const {
    user_id,
    user_name,
    user_mobile,
    email,
    gender,
    address,
    state,
    city,
    pin_code,
    password,
    role_id,
  } = req.body;

  const userdata = {
    user_id:uuid.v4(),
    user_name,
    user_mobile,
    email,
    gender,
    address,
    state,
    city,
    pin_code,
    password,
    role_id
  };
  console.log(userdata);
  const sqlQuery = `INSERT INTO user_registration SET ?`;
  connection.query(sqlQuery, userdata, (err, result) => {
    if (err) {
      res.send({ status: "400", response: err.sqlMessage });
    } else {
      res.send({ status: "200", response: result });
    }
  });
};

const addUserRole = (req,res)=>{
   const data = [req.params.user_id,req.body.user_role]
   const sqlQuery = `Update user_registration SET role_name=? where user_id=?`
  console.log(sqlQuery)
  connection.query(sqlQuery, data, (err, result) => {
    if (err) {
      res.send({ status: "400", response: err.sqlMessage });
    } else {
      res.send({ status: "200", response: result });
    }
  });

}
const updateUser = (req, res) => {
  const userdata = [
    req.body.user_name,
    req.body.user_mobile,
    req.body.role_id,
    req.body.email,
    req.body.gender,
    req.body.address,
    req.body.state,
    req.body.city,
    req.body.pin_code,
    req.body.password,
    req.params.user_id,
  ];

  const sqlQuery = `update user_registration SET ? where user_id = ?`;
  connection.query(sqlQuery, userdata, (err, result) => {
    if (err) {
      res.send({ status: "400", response: err.sqlMessage });
    } else {
      res.send({ status: "200", response: result });
    }
  });
};
const delete_user = (req, res) => {
  const user_id = [req.params.user_id];
  const sqlQuery = `delete from user_registration where user_id =?`;
  connection.query(sqlQuery, user_id, (err, result) => {
    if (err) {
      res.send({ status: "400", response: err.sqlMessage });
    } else {
      res.send({ status: "200", response: result });
    }
  });
};
module.exports = { viewUser, addUser, updateUser, delete_user,addUserRole,getUserById };
