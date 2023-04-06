const express = require('express')
const add_to_cart = express.Router()
const {viewCart,addCart,UpdateCart,deleteCart} = require('../Controller/add_to_cart_api')
add_to_cart.get('/viewcart',viewCart)
add_to_cart.post('/addcart',addCart)
add_to_cart.put('/updatecart/:cart_id',UpdateCart)
add_to_cart.put('/deletecart/:cart_id',deleteCart)
module.exports = add_to_cart;