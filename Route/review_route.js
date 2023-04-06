const express = require('express')
const review_route = express.Router()
const {review,addReview} = require('../Controller/review_api')
review_route.get('/review',review)
review_route.post('/addreview',addReview)
module.exports = review_route;