const express = require('express');
const dogsController = require('../controllers/dogs');

const router = express.Router();

router.get('/', dogsController.getByOffset);

module.exports = router;
