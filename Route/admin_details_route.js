const express = require("express");
const Admin = express.Router();

const { showAdmin,addAdmin,editAdmin,deleteAdmin,show_particular } = require("../Controller/admin_details");

Admin.get("/viewadmin", showAdmin);
Admin.get("/viewbyid/:admin_id", show_particular);
Admin.post("/addadmin",addAdmin);
Admin.put("/editadmin/:admin_id",editAdmin)
Admin.delete("/deleteadmin/:admin_id",deleteAdmin)
module.exports = Admin;
