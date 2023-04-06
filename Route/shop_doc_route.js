const express = require("express");
const shop_doc = express.Router();

const  {viewDoc,addDoc,updateShopDoc,deleteDoc}= require('../Controller/shop_document_api')

shop_doc.get("/viewdoc", viewDoc);
shop_doc.post('/adddoc',addDoc)
shop_doc.put('/updatedoc/:shop_id',updateShopDoc)
shop_doc.delete('/deletedoc/:shop_id',deleteDoc)
// shop_doc.post();
// shop_doc.put()
// shop_doc.delete()
module.exports = shop_doc;