const express = require('express')
const prod_inven = express.Router()
const {getInventory,addInventory,updateInventory,deleteInventory} = require('../Controller/product_inventory')
prod_inven.use('/viewinven',getInventory)
prod_inven.use('/addinven', addInventory)
prod_inven.use('/updateproductinventory/:product_id',updateInventory)
prod_inven.use('/deleteproductinventory/:product_id',deleteInventory)
module.exports = prod_inven;