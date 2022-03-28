const mongoose = require('mongoose')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const AccessControl = mongoose.model('AccessControls')
const Club = mongoose.model('Clubs')
const moment = require('moment')
require('moment/locale/kk')
/* eslint-disable */
const config = require('../config')
/* eslint-enable */
const { validationResult } = require('express-validator')

module.exports.logout = async (req, res) => {
  req.logout()
  return res.status(200).send('Ok')
}

module.exports.login = async (req, res) => {
<<<<<<< HEAD
=======
  //TODO user login with perfectgym
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
  console.log(req.body)
  if (req.body.email === undefined) {
    return passport.authenticate('jwt', (err, user) => {
      if (err || !user) {
        return res.status(400).send('token error')
      } else {
        return res.json({ user })
      }
    })(req, res)
  } else {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).send({ errors: errors.array() })
    return passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        return res.status(400).send('no such user')
      } else {
        const body = { _id: user._id, email: user.email }
        const token = jwt.sign({ user: body }, config.SECRET_KEY)
        return res.json({ user, token })
      }
    })(req, res)
  }
}

module.exports.checkQRValue = async (req, res) => {
  moment.locale('kk')
<<<<<<< HEAD
  const value = req.body.value
  const id = req.body.id
  let encoded = value.split('#')
  let curTime = moment()
=======
  const value = req.body.value.slice(3)
  const id = req.body.id
  let encoded = value.split('#')
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
  let decoded = ''
  encoded = encoded.splice(0, encoded.length - 1)
  encoded.forEach((e) => {
    e /= 7
    decoded += String.fromCharCode(e)
  })
  decoded = decoded.split(' ')
  let clubId = decoded[1]
  if (decoded[0] !== 'exit' && decoded[0] !== 'enter') {
    return res.status(400).send('no such turnstile type')
  }
<<<<<<< HEAD
=======
  let locks
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
  Club.findOne({ clubId }, (err, club) => {
    if (err || !club) {
      return res.status(400).send('no such club')
    } else {
<<<<<<< HEAD
    }
  })
  let toMoment = moment(decoded[3], 'LTS')
  if (curTime.diff(toMoment) > 15000) {
=======
      locks = club.locks
    }
  })
  let toMoment = moment(Number(decoded[3]))
  //res.json({ moment: moment(), toMoment })
  if (moment().diff(toMoment) > 15000) {
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    return res.status(400).send('expired qr')
  }
  return new AccessControl({
    clubId,
    turnStileType: decoded[0],
    turnStileId: decoded[2]
  })
    .save()
    .then((accessControl) => {
<<<<<<< HEAD
      res.json(accessControl)
=======
      if (accessControl) {
        res.json('ok')
      }
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    })
    .catch((err) => {
      res.status(400).send('access error')
    })
  //TODO: Check access of the user!!!
}
