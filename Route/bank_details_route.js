const express = require('express')
const bank_details = express.Router()
const {BankDetails,addBankDetails,updateBankDetails,deleteBankDetails} = require('../Controller/bank_details_api')
bank_details.get('/viewdetails',BankDetails)
bank_details.post('/adddetails',addBankDetails)
bank_details.put('/updatedetails/:account_no',updateBankDetails)
bank_details.delete('/deletedetails/:account_no',deleteBankDetails)

module.exports = bank_details;
