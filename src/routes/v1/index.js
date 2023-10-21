const express  = require('express');
const cityController = require('../../controllers/city-controller.js');

const router = express.Router();

// ->  /v1/city  (v1 stands for version one of api)
router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id' , cityController.get);
router.get('/city', cityController.getAll);
router.patch('/city/:id',cityController.update);


module.exports = router;