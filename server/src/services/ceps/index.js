const axios = require("axios");


const arrCEPS = (cep, res) => {

    Promise.all([
        axios.get(`https://viacep.com.br/ws/${cep.arr[0]}/json/`),
        axios.get(`https://viacep.com.br/ws/${cep.arr[1]}/json/`),
        axios.get(`https://viacep.com.br/ws/${cep.arr[2]}/json/`),
        axios.get(`https://viacep.com.br/ws/${cep.arr[3]}/json/`),
        axios.get(`https://viacep.com.br/ws/${cep.arr[4]}/json/`)
    ]).then( (addresses) => {
        arrAddresses = []
        addresses.map( address => {
            arrAddresses.push(address.data)
        })
        res.json(arrAddresses)
    }) 
}

module.exports = arrCEPS;
