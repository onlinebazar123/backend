const express = require('express')
const user_reg = express.Router();
const {viewUser,addUser,updateUser,delete_user,addUserRole,getUserById} = require('../Controller/user_registration')
user_reg.get('/viewuser',viewUser)
user_reg.get('/userbyid/:user_id',getUserById)
user_reg.post('/adduser',addUser)
user_reg.put('/updateuser/:user_id',updateUser)
user_reg.put('/adduserrole/:user_id',addUserRole)

user_reg.delete('/deleteuser/:user_id',delete_user)
module.exports = user_reg;