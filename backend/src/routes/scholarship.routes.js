const express = require('express');
const router = express.Router();
const scholarshipControllers = require('../controllers/scholarship.controllers')

// router.get('/categoryId',scholarshipControllers.getScholarshipsCategoryId);
router.get('/:id',scholarshipControllers.getScholarshipsById);
router.get('/',scholarshipControllers.getScholarships);


module.exports = router;