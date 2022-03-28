const mongoose = require('mongoose')
const passport = require('passport')
<<<<<<< HEAD
const jwt = require('jsonwebtoken')
/* eslint-disable */
const config = require('../config')
/* eslint-enable */
const { validationResult } = require('express-validator')
=======
/* eslint-disable */
const config = require('../config')
/* eslint-enable */
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
const Subscription = mongoose.model('Subscriptions')

module.exports.createNewSubscription = async (req, res) => {
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('token error')
    } else {
      return new Subscription({
        type: req.body.type,
        firstMonth: req.body.firstMonth,
        nextMonths: req.body.nextMonths,
        bonus: req.body.bonus,
        advantages: req.body.advantages
      })
        .save()
        .then((subscription) => {
          if (!subscription) {
            return res.status(400).send('subscription error')
          } else {
            return res.json('ok')
          }
        })
    }
  })(req, res)
}
module.exports.getSubscriptionsInfo = async (req, res) => {
  Subscription.find({}, (err, subscriptions) => {
    if (err || !subscriptions) {
      return res.status(400).send('error')
    } else {
      return res.json(subscriptions)
    }
  })
}

module.exports.updateSubscription = async (req, res) => {
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('token error')
    } else {
      Subscription.findOne({ type: req.body.type }, (err, subscription) => {
        if (err || !subscription) {
          return res.status(400).send('error')
        } else {
          Object.assign(subscription, req.body)
          subscription
            .save()
            .then((subscription) => res.json('ok'))
            .catch((err) => res.status(400).send('error'))
        }
      })
    }
  })(req, res)
}
