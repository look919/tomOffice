const express = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);
router.post('/checkout', bookingController.checkout);

router.use(authController.restrictTo('admin'));

router.route('/').get(bookingController.getAllBookings);
router
  .route('/:id')

  .get(bookingController.getBooking)
  .delete(bookingController.deleteBooking)
  .patch(bookingController.updateBooking);

module.exports = router;
