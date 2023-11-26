const express = require('express');
let aboutControllers = require('../controllers/aboutController');

const router = express.Router();

router.get('/about', aboutControllers.aboutController);

module.exports = router;