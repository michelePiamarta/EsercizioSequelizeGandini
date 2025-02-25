const express = require("express")
const sequelize = require("sequelize")

const app = express();

app.listen(3000,()=>{
    console.log("server avviato con successo sulla porta 3000")
})