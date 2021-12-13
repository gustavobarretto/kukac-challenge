const palindromeList = require("../services/palindrome/index.js")
const purchaseCalculator = require("../services/purchase/index.js")
const arrCEPS = require("../services/ceps/index.js");
const { Car, Motocycle } = require("../services/cadastro_carros/index.ts")
const { DATA } = require("../fakedb/index.js");

// Palindrome Controller
const palimdromeListController = (req, res) => {
    res.json(palindromeList(req.params.numInit, req.params.numFin))
}

// Purchase Controller
const purchasesController = (req, res) => {
    res.json(purchaseCalculator(req.params.productValue, req.params.payment))
}

// Cep Controller
const cepController = (req, res) => {
    return arrCEPS(req.body, res);
}

// Car Controller
const carPostController = (req, res) => {
    DATA.cars.push(
        new Car(
            req.body.model,
            req.body.year,
            req.body.brand,
            req.body.doors
        )
    )

    return res.json(DATA.cars)
}

const carGetController = (req, res) => {
    return res.json(DATA.cars)
}

// Motocyle Controller
const motocylePostController = (req, res) => {
    DATA.motocycles.push(
        new Motocycle(
            req.body.model,
            req.body.year,
            req.body.brand,
            req.body.passengers
        )
    )

    return res.json(DATA.motocycles)
}

const motocyclesGetController = (req, res) => {
    return res.json(DATA.motocycles)
}

// Validations in cars and motocycles
function checkBodyCARS (req, res, next) {
    if(areAllFieldsValidCARS(req.body)) {
        return next()
    }
    res.status(400).json({ error: true, message: 'Todos os campos são obrigatórios'})
}

function checkBodyMOTOCYLES (req, res, next) {
    if(areAllFieldsValidMOTOCYLES(req.body)) {
        return next()
    }
    res.status(400).json({ error: true, message: 'Todos os campos são obrigatórios'})
}

function areAllFieldsValidCARS(body) {
    const fields = [body.model, body.year, body.brand, body.doors]
    return fields.every(field => typeof field !== 'undefined' && field !== '')
}
function areAllFieldsValidMOTOCYLES(body) {
    const fields = [body.model, body.year, body.brand, body.passengers]
    return fields.every(field => typeof field !== 'undefined' && field !== '')
}

module.exports = { 
    cepController,
    carPostController,
    carGetController,
    motocylePostController,
    motocyclesGetController,
    purchasesController,
    palimdromeListController,
    checkBodyCARS,
    checkBodyMOTOCYLES
}