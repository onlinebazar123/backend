const express = require('express')
const {getadmin,addAdmin,login} = require('../Controller/admin')
const adimnrouter = express.Router()
adimnrouter.get("/view",getadmin)
adimnrouter.post("/loginaddmin",addAdmin)
adimnrouter.get("/login",login)
module.exports = adimnrouter;