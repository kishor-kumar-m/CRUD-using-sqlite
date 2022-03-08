const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController')


// router
const router = require('express').Router()


// use routers
router.post('/addProduct', productController.addProduct)
router.get('/',productController.getAllProduct)
router.get('/:id',productController.getProduct)
router.patch('/:id',productController.updateProduct)
router.delete('/:id',productController.deleteProduct)
router.get('/review/:id',productController.getProductReviews)

//review

router.post('/', reviewController.addReview)
router.get('/reviews',reviewController.getReviews)

module.exports = router
