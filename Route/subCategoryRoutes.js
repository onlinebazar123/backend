const express = require('express')
const multer = require("multer")
const subcategory = express.Router();
const path = require("path")
const {viewSubCategory,addSubcategory,updateSubCategory,deleteSubCategory,displaySubCategory} = require('../Controller/subcategory')

subcategory.get('/viewsubcategory',viewSubCategory)
subcategory.get('/displaysubcategory',displaySubCategory)
const storage = multer.diskStorage({
    destination:'./upload',
    filename:(req,file,cb)=>{
        cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})

subcategory.post('/addsubcategory',upload.single("sub_category_image"),addSubcategory)

subcategory.put('/updatesubcategory/:sub_category_id',updateSubCategory)
subcategory.delete('/deletesubcategory/:sub_category_id',deleteSubCategory)

module.exports = subcategory