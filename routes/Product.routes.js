const express=require('express')
const router=express.Router()

const{createProduct, getProducts, getProductById}=require('../controllers/Product.controller')

router.get('/',getProducts)
router.post('/createProduct',createProduct)
router.get('/item/:_id',getProductById)

module.exports=router