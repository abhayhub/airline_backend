const express  = require('express');
const cityController = require('../../controllers/city-controller.js');
const flightController = require('../../controllers/flight-controller.js');
const AirportController = require('../../controllers/airport-controller.js');
const router = express.Router();
const { FlightMiddleware } = require('../../middlewares/index.js');

// ->  /v1/city  (v1 stands for version one of api)
router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id' , cityController.get);
router.get('/city', cityController.getAll);
router.patch('/city/:id',cityController.update);


router.post('/flights',FlightMiddleware.validateCreateFlight,flightController.create);
router.get('/flights',flightController.getAll);


router.post('/airports', AirportController.create);

module.exports = router;