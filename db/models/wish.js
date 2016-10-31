'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('wishes', {
  wish: Sequelize.STRING,
  body: Sequelize.TEXT
})
