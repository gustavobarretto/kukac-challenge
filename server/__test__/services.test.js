const axios = require("axios");
const palindromeList = require('../src/services/palindrome/index');
const purchaseCalculator = require('../src/services/purchase/index');
const { Car, Motocycle } = require("../src/services/cadastro_carros/index")


describe("Testing services of the server: ", () => {
    test("Testing palindrome algorithm", () => {
        const result = palindromeList(1, 100);
        expect(result).toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99])
    })

    test("Testing purchase algorithm", () => {
        const pucharse = purchaseCalculator(105, 250)
        expect(pucharse).toEqual({"change": 145, "notes100": 1, "notes10": 4, "notes1": 5})
    })

    test("Testing CEPs algorithm transcript in the test", () => {
        Promise.all([
            axios.get(`https://viacep.com.br/ws/418380/json/`),
            axios.get(`https://viacep.com.br/ws/21725530/json/`),
            axios.get(`https://viacep.com.br/ws/41380380/json/`),
            axios.get(`https://viacep.com.br/ws/51021130/json/`),
            axios.get(`https://viacep.com.br/ws/17512043/json/`)
        ]).then( response => {
            expect(response.data)
        }).catch( (e) => {
            expect(e.response.status).toBe(400)
        })
    })

    test("Testing instantiate Vehicles's objects", () => {
        const car = new Car(
            "Etios",
            2015,
            "Toyota",
            4
        )
        expect(car).toEqual({
            model: "Etios",
            year: 2015,
            brand: "Toyota",
            doors: 4
        })

        const moto = new Motocycle(
            "Shadow",
            2019,
            "Yamaha",
            1
        )
        expect(moto).toEqual({
            model: "Shadow",
            year: 2019,
            brand: "Yamaha",
            wheels: 2,
            passengers: 1
        })
    })
})