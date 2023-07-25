const Sequelize = require('sequelize')
const User = require('./user')
// 어떤 db, 계정
const env = process.env.NODE.ENV || 'development'
const config = require('../config/config.json')[env]

//sequelize 객체 생성(객체 내부에는 DB연결 정보 가지고 있음)
const sequelize = new Sequelize(config.database, config.username, config.password, config)

//sequelize, model
const db = {}

db.sequelize = sequelize
db.User = User

User.init(sequelize)
User.associate(db)

module.exports = db

