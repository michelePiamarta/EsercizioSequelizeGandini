const { Model, DataTypes } = require("sequelize")
const sequelize = require('../config')

class Auto extends Model {}

Auto.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    fkmodello: {
        type: DataTypes.SMALLINT
    },
    fkproprietario: {
        types: DataTypes.SMALLINT
    }
},{
    sequelize,
    modelName: "Auto",
    tableName: "auto",
    timestamp: false
})