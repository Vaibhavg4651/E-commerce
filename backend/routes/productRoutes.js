const  express =require( 'express')

const router = express.Router()
const  {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  searchedProducts,
} =require( '../controllers/productController.js')
const { protect, admin } =require( '../middleware/authMiddleware.js')

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.get('/search/:id', searchedProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

module.exports= router
