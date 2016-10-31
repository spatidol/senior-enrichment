'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('stars', {
  name: Sequelize.STRING,
  location: Sequelize.STRING
})
