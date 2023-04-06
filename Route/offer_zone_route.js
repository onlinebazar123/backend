const express = require('express')
const offers_zone = express.Router()
const {viewOffer,addOffer,updateOffer,deleteOffer} = require('../Controller/offer_zon_api')
offers_zone.get('/view',viewOffer)
offers_zone.post('/add',addOffer)
offers_zone.put('/update/:offer_id',updateOffer)
offers_zone.delete('/delete/:offer_id',deleteOffer)
module.exports = offers_zone;