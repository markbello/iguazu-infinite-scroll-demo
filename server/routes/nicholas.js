const express = require('express');
const nicholasController = require('../controllers/nicholas');

const router = express.Router();

router.get('/', nicholasController.get);

module.exports = router;
