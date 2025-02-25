const { Sequelize } = require("sequelize")
const fs = require("fs")
const rootPwd = fs.readFileSync("/run/secrets/rootpwd");

const sequelize = new Sequelize("gestionemacchine","root",rootPwd,{
    host: "mysql",
    dialect: "mysql"
})

module.exports = sequelize;