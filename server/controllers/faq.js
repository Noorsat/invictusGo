const mongoose = require('mongoose')

<<<<<<< HEAD
const User = mongoose.model('Users')
const passport = require('passport')
const jwt = require('jsonwebtoken')
/* eslint-disable */
const config = require('../config')
/* eslint-enable */
const { validationResult } = require('express-validator')

const Subscription = mongoose.model('Subscriptions')
=======
const passport = require('passport')
/* eslint-disable */
const config = require('../config')
/* eslint-enable */

>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
const Faq = mongoose.model('Faq')

module.exports.createNewFaq = async (req, res) => {
  console.log('req.body', req.body)
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('token error')
    } else {
      return new Faq({
        question: req.body.question,
        answer: req.body.answer
      })
        .save()
        .then((faq) => {
          if (!faq) {
            return res.status(400).send('error')
          } else {
            return res.json('ok')
          }
        })
    }
  })(req, res)
}
module.exports.getFaq = async (req, res) => {
  Faq.find({}, (err, faq) => {
    if (err || !faq) {
      return res.status(400).send('error')
    } else {
      return res.json(faq)
    }
  })
}
module.exports.updateFaq = async (req, res) => {
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('error')
    } else {
      Faq.findOne({ question: req.query.question }, (err, faq) => {
        if (err || !faq) {
          return res.status(400).send('error')
        } else {
          Object.assign(faq, req.body)
          faq
            .save()
            .then((faq) => res.json('ok'))
            .catch((err) => res.status(400).send('error'))
        }
      })
    }
  })(req, res)
}

module.exports.deleteFaq = async (req, res) => {
  console.log(req.query.question)
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('error')
    } else {
      Faq.deleteOne({ question: req.query.question }, (err, result) => {
        if (err) {
          return res.status(400).send('error')
        } else {
          return res.json('ok')
        }
      })
    }
  })(req, res)
}
