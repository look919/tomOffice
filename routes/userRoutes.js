const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/auth', authController.isLoggedIn);

//USERS AUTHENTICATED
router.use(authController.protect);
router.post('/logout', authController.logout);
router.patch('/updateme', userController.getMe, userController.updateMe);
router.patch('/updatepassword', authController.updatePassword);

//RESTRICTED TO ADMIN
router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getAllUsers);
router
  .route('/:id')

  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = router;
