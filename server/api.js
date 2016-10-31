'use strict'
const api = require('express').Router()
const db = require('APP/db')
const Star = db.model('stars');
const Wish = db.model('wishes');

api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/stars', function(req, res, next){
  Star.findAll({})
  .then(function(allStars){
    res.json(allStars)
  })
})

api.get('/wishes', function(req, res, next){
  Wish.findAll({})
  .then(function(allWishes){
    res.json(allWishes)
  })
})

api.post('/stars', function(req, res, next){
  console.log("_________________", req.body)
  Star.create(req.body)
  .then(function(newStar){
    res.json(newStar)
  })
})

// api.post('/wish', function(req, res, next){
//   Wish.create(req.body)
//   .then(function(newWish){
//     res.json(newWish)
//   })
// })

api.post('/wish', function(req, res, next) {
    Star.create(req.body) //doesnt work when use findorcreate?
    .then(function(foundStar){
      return Wish.create(req.body)
        .then(function(newWish){
            newWish.setHolder(foundStar)

        })
    })
    .then(function(newWish){
      res.json(newWish)
    })
    .catch(next)
})



api.get('/stars/:id', function(req, res, next){
  Star.findById(req.params.id)
  .then(function(thisStar){
    res.json(thisStar)
  })
})

api.get('/wishes/:id', function(req, res, next){
  Wish.findById(req.params.id)
  .then(function(thisWish){
    res.json(thisWish)
  })
})

module.exports = api
