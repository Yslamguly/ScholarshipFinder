const express = require('express');
const router = express.Router();
const wishListControllers = require('../controllers/wishlist.controller')

router.get('/getWishList/:user_id',wishListControllers.getUserWishList)
router.delete('/deleteScholarshipFromWishList/:user_id',wishListControllers.deleteScholarshipFromWishList)
module.exports = router;
