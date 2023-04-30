const express = require('express');
const router = express.Router();
const scholarshipControllers = require('../controllers/scholarship.controllers')

router.get('/category/:categoryId',scholarshipControllers.getScholarshipByCategoryId);
router.get('/getRandomScholarships',scholarshipControllers.getRandomScholarships);
router.get('/:id',scholarshipControllers.getScholarshipsById);
router.get('/',scholarshipControllers.getScholarships);


module.exports = router;