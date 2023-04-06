const express = require('express')
const user = express.Router();
const verifyToken = require('../Controller/jwt_middleware')
const {isValidUser} = require("../Controller/userMiddleware")
const {getUser,addUser,updateUser,deleteUser,login, role_login,userProfile,
getUserByEmail,
getUserByName,
getUserAssendingOrder,
userStatus} = require('../Controller/user_api')
user.get('/userview',getUser)
user.get("/:email",getUserByEmail)
user.get("/getuserbyname/:name",getUserByName)
user.get("/getuserascorder/:name",getUserAssendingOrder)
user.get("/status/:status",userStatus)
user.post('/adduser',addUser)
// user.get('/login',login)
user.put('/updateuser/:id',updateUser)
user.delete('/deleteuser/:id',deleteUser)
user.post('/login',isValidUser,login);
user.post('/profile',verifyToken,userProfile)
module.exports = user;