const express = require('express')
const shop = express.Router();
const {viewShop,addShop,updateShop,deleteShop,login, getShopById,getbyShopType} = require('../Controller/shop')
shop.get('/viewshop',viewShop)
shop.get('/shopbyid/:shop_id',getShopById)
shop.get('/shoptype/:shop_type',getbyShopType)
shop.post('/addshop',addShop)
shop.put('/updateshop/:shop_id',updateShop)
shop.delete('/deleteshop/:shop_id',deleteShop)
shop.get('/login',login)
module.exports = shop;