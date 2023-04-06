const express = require('express')
const prod_spec = express.Router()
const {viewProdSpec,AddProdSpec, UpdateProdSpec,DeleteProdSpec} = require('../Controller/product_specification')
prod_spec.get("/view",viewProdSpec)
prod_spec.post("/add",AddProdSpec)
prod_spec.put('/update/:product_specification_id',UpdateProdSpec)
prod_spec.delete('/delete/:product_specification_id',DeleteProdSpec)
module.exports = prod_spec;