const express = require('express');
const router = express.Router();
const customersController = require('../controllers/users.controllers')

router.get('/',customersController.test);

module.exports = router;