const mongoose = require('mongoose')

const User = mongoose.model('Users')
const passport = require('passport')
<<<<<<< HEAD
const jwt = require('jsonwebtoken')
/* eslint-disable */
const config = require('../config')
/* eslint-enable */
const { validationResult } = require('express-validator')
const Club = mongoose.model('Clubs')
const Subscription = mongoose.model('Subscriptions')
const Faq = mongoose.model('Faq')
=======
/* eslint-disable */
const config = require('../config')
/* eslint-enable */
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
const New = mongoose.model('New')
const axios = require('axios')

module.exports.createNew = async (req, res) => {
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('token error')
    } else {
<<<<<<< HEAD
      return new New({
        tittle: req.body.tittle,
        text: req.body.text,
        photoUrl: req.body.photoUrl,
        html: req.body.html,
        to: req.body.to
      })
=======
      return new New(req.body)
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        .save()
        .then((news) => {
          if (!news) {
            return res.status(400).send('new error')
          } else {
<<<<<<< HEAD
            if (req.body.to[0] !== { to: '*' }) {
=======
            if (req.body.to[0] === { to: '*' }) {
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
              User.find({}, (err, users) => {
                if (err || !users) {
                  return res.status(400).send('user error')
                } else {
                  let to = []
                  for (i = 0; i < users.length; ++i) {
                    if (users[i].expoPushToken !== undefined) {
                      to.push(users[i].expoPushToken)
                    }
                  }
                  let message = {
                    to: to,
                    sound: 'default',
                    title: 'Invictus App',
                    body: 'El Boss!',
                    data: { someData: 'El Boss' }
                  }
                  axios
                    .post('https://exp.host/--/api/v2/push/send', message, {
                      headers: {
                        Accept: 'application/json',
                        'Accept-encoding': 'gzip, deflate',
                        'Content-Type': 'application/json'
                      }
                    })
                    .then((response) => res.json('ok'))
                    .catch((err) => res.status(400).send('send err'))
                }
              })
            } else {
              let message = {
                to: req.body.to,
                sound: 'default',
                title: 'Invictus App',
                body: 'El Boss!',
                data: { someData: 'El Boss' }
              }
              axios
                .post('https://exp.host/--/api/v2/push/send', message, {
                  headers: {
                    Accept: 'application/json',
                    'Accept-encoding': 'gzip, deflate',
                    'Content-Type': 'application/json'
                  }
                })
                .then((response) => res.json('ok'))
                .catch((err) => res.status(400).send('send err'))
            }
          }
        })
    }
  })(req, res)
}

module.exports.getNews = async (req, res) => {
  return New.find({}, (err, news) => {
    if (err || !news) {
      res.status(400).send('news error')
    } else {
      res.json(news)
    }
  })
}
