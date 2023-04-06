const express = require('express')

const role_routes = express.Router()
const {getRole,addRole,deleteRole,getAllRoles,selectUserId} = require('../Controller/add_user_role')
role_routes.get("/getrole",getRole)
role_routes.get("/getroles",getAllRoles)
role_routes.get("/userroleid/:role_name",selectUserId)
role_routes.post('/addrole',addRole)
role_routes.delete("/deleterole/:role_id",deleteRole)
module.exports = role_routes;