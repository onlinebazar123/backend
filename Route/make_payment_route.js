const express = require('express')
const payment = express.Router()
const {viewPayment,addPayment,updatePayment,deletePayment} = require('../Controller/make_payment_api')
payment.get('/paymentview',viewPayment)
payment.post('/addpayment',addPayment)
payment.put('/updatepayment/:transaction_id',updatePayment)
payment.delete('/deletepayment/:transaction_id',deletePayment)
module.exports = payment;
