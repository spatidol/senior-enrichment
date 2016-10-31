'use strict';
// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Star = require('./star')

const Wish = require('./wish')

Wish.belongsTo(Star, { as: 'holder' });

///cant get my associations working ??

module.exports = {Star, Wish}
