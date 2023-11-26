const express = require('express');
let mainControllers = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainControllers.mainController);

module.exports = router;