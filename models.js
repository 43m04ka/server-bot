const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    chatId: {type: DataTypes.STRING, unique: true},
    basket: {type: DataTypes.JSON, defaultValue: {}},
})

module.exports = Users;