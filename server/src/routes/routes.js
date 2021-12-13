const express = require('express');
const routes = express.Router();
const bodyParser = require("body-parser").json();
const { 
    cepController,
    carPostController,
    carGetController,
    motocylePostController,
    motocyclesGetController,
    purchasesController,
    palimdromeListController,
    checkBodyCARS,
    checkBodyMOTOCYLES
} = require("../controller/index.js")

// Routes carRegistrer;
routes.post('/vehicles/car', checkBodyCARS, bodyParser, carPostController);
routes.get('/vehicles/car/all', carGetController);
// Routes motocycleRegistrers
routes.post('/vehicles/motocycle', checkBodyMOTOCYLES, bodyParser, motocylePostController);
routes.get('/vehicles/motocycle/all', motocyclesGetController);
// Routes palindrome
routes.get("/palindrome/:numInit/:numFin", palimdromeListController);
// Routes purchase
routes.get("/purchases/:productValue/:payment", purchasesController)
// Routes CEP
routes.post("/ceps", cepController)

module.exports = routes