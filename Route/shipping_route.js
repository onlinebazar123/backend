const express = require('express')
const shipping_route = express.Router()
const {shipping,addShipping,updateShipping,deleteShipping} = require('../Controller/shipping_api')
shipping_route.get('/view',shipping)
shipping_route.post('/add',addShipping)
shipping_route.put('/update/:shipping_id',updateShipping)
shipping_route.delete('/delete/:shipping_id',deleteShipping)
module.exports = shipping_route;