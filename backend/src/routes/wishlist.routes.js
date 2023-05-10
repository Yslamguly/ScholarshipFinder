const express = require('express');
const router = express.Router();
const wishListControllers = require('../controllers/wishlist.controller')

router.get('/getWishList/:user_id',wishListControllers.getUserWishList)

module.exports = router;
