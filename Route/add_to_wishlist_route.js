const express = require('express')
const wish_list = express.Router()
const {viewWishlist,addWishlist,updateWishlist,deleteWishlist} = require('../Controller/add_to_wishlist_api')
wish_list.get('/view',viewWishlist)
wish_list.post('/add',addWishlist)
wish_list.put('/update/:wishlist_id',updateWishlist)
wish_list.put('/delete/:wishlist_id',deleteWishlist)
module.exports = wish_list;