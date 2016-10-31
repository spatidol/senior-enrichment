'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')
var Star = require('./star')

const Wish = db.define('wishes', {
  wish: Sequelize.STRING,
  body: Sequelize.TEXT
})

Wish.belongsTo(Star, { as: 'holder' });

module.exports = Wish;
