const express = require('express')
const category = express.Router();
const multer = require('multer')
const path = require('path')
const {viewCategory,addcategory,updateCategory,deleteCategory} = require('../Controller/category')
category.get('/viewcategory',viewCategory)
const storage = multer.diskStorage({
    destination:'./upload',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})
category.post('/addcategory',upload.single("category_image"),addcategory)
category.put('/updatecategory/:category_id',updateCategory)
category.delete('/deletecategory/:category_id',deleteCategory)

module.exports = category