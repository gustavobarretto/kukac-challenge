const express = require("express");
const app = express();
const path = require("path")
const routes = require("./routes/routes.js")
const cors = require('cors')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(routes);
app.listen(8080, (err: string) => {
    console.log("Starting server http://localhost:8080...")
    if(err)
        console.log(err)
});
