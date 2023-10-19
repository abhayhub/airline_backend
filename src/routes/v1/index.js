const express  = require('express');
const cityController = require('../../controllers/city-controller.js');

const router = express.Router();

// ->  /v1/city  (v1 stands for version one of api)
router.post('/city',cityController.create);

module.exports = router;