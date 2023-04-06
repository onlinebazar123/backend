var express = require('express')

const app = express();
app.use(express.json())
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var cors = require('cors')
app.use(cors());
const port = 8000;
const admin_details = require('./Route/admin_details_route')
const admin = require("./Route/admin_route")
const user_role = require("./Route/user_role_routes")
const shop = require('./Route/shopRoute')
const category = require('./Route/categoryRoute')
const subcategory = require('./Route/subCategoryRoutes')
const user_registration = require('./Route/use_registration_route')
const user = require('./Route/user_route')
const shop_doc = require('./Route/shop_doc_route') 
const prod_inven = require('./Route/product_inventory_route')
const prod_sp = require('./Route/product_specification_route')
const add_to_cart = require('./Route/add_to_cart_route')
const wish_list = require('./Route/add_to_wishlist_route')
const offer_zone = require('./Route/offer_zone_route')
const payment = require('./Route/make_payment_route')
const bank_details = require('./Route/bank_details_route')
const shipping = require('./Route/shipping_route')
const review = require('./Route/review_route')
app.use('/admindetails',admin_details)
app.use('/role',user_role)
app.use('/admin',admin)
app.use('/shop',shop)
app.use('/shopdoc',shop_doc)
app.use('/subcategory',subcategory)
app.use('/category',category)
app.use('/inventory',prod_inven)
app.use('/specification',prod_sp)
app.use('/addtocart',add_to_cart)
app.use('/wishlist',wish_list)
app.use('/offerzone',offer_zone)
app.use('/payment',payment)
app.use('/bankdetails',bank_details)
app.use('/shipping',shipping)
app.use('/',review)


app.use('/registration',user_registration)
app.use('/user',user)
app.use('/upload',express.static('upload'))

//  app.get("/",(req,res)=>{
//     res.send("Hello world")
// })
app.listen(port,(err)=>{
 console.log(`server is running on port ${port}`)
})