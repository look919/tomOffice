const express = require('express');
const productController = require('./../controllers/productController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);

//USERS AUTHENTICATED
router.use(authController.protect);
//RESTRICTED TO ADMIN
router.use(authController.restrictTo('admin'));
router.post('/', productController.createProduct);

router
  .route('/:id')
  .delete(productController.deleteProduct)
  .patch(productController.updateProduct);

module.exports = router;
