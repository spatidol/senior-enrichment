'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

const Star = db.define('stars', {
  name: Sequelize.STRING,
  location: Sequelize.STRING
})


module.exports = Star;
