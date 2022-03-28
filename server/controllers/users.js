const mongoose = require('mongoose')

const User = mongoose.model('Users')
const passport = require('passport')
const jwt = require('jsonwebtoken')
/* eslint-disable */
const config = require('../config')
/* eslint-enable */
const { validationResult } = require('express-validator')
const Club = mongoose.model('Clubs')
const Subscription = mongoose.model('Subscriptions')
const Faq = mongoose.model('Faq')
const New = mongoose.model('New')
const Coach = mongoose.model('Coach')
const axios = require('axios')

module.exports.updateExpoPushToken = async (req, res) => {
  console.log('req.body', req.body)
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user) {
      console.log('token error')
      return res.status(400).send('error')
    } else {
      user.expoPushToken = req.body.expoPushToken
      return user
        .save()
        .then((user) => res.send('ok'))
        .catch((err) => res.status(400).send('err'))
    }
  })(req, res)
}

<<<<<<< HEAD
module.exports.registerUser = async (req, res) => {
  console.log('req.body', req.body)
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).send({ errors: errors.array() })
  let tmpUser
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('error')
    } else {
      tmpUser = new User({
        email: req.body.email,
        fullName: req.body.fullName
      })
      if (req.body.type === 'admin') {
        tmpUser.type = 'admin'
      } else {
        tmpUser.club = req.body.club
        tmpUser.clubId = req.body.clubId
        tmpUser.memberId = req.body.memberId
        tmpUser.photoUrl = req.body.photoUrl
        tmpUser.type = 'coach'
        if (req.body.type === 'user') {
          tmpUser.type = 'user'
          tmpUser.startDate = req.body.startDate
          tmpUser.endDate = req.body.endDate
          tmpUser.subscriptionType = req.body.subscriptionType
        } else {
          tmpUser.instagramLink = req.body.instagramLink
          tmpUser.motto = req.body.motto
          tmpUser.achievements = req.body.achievements
          tmpUser.experience = req.body.experience
          tmpUser.certificates = req.body.certificates
        }
      }
      return User.register(tmpUser, req.body.password, (error, user) => {
        if (user) {
          return res.send(user)
        } else {
          return res.status(400).send('error')
        }
      })
    }
  })(req, res)
}

=======
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
module.exports.registerCoach = async (req, res) => {
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('token error')
    } else {
      let coach = new Coach(req.body)
      return coach
        .save()
        .then((coach) => res.json('ok'))
        .catch((err) => res.status(400).send('object error'))
    }
  })(req, res)
}

module.exports.getCoaches = async (req, res) => {
  Coach.find({}, (err, coaches) => {
    if (err || !coaches) {
      return res.status(400).send('error')
    } else {
      return res.json(coaches)
    }
  })
}
module.exports.getUser = async (req, res) => {
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user) {
      return res.status(400).send('error')
    } else {
      return res.json(user)
    }
  })(req, res)
}

module.exports.updateCoach = async (req, res) => {
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('token error')
    } else {
      Coach.findOne({ _id: req.body._id }, (err, coach) => {
        if (err || !coach) {
          return res.status(400).send('object error')
        } else {
          Object.assign(coach, req.body)
          coach
            .save()
            .then((coach) => res.json('ok'))
            .catch((err) => res.status(400).send('err'))
        }
      })
    }
  })(req, res)
}

module.exports.deleteCoach = async (req, res) => {
  const _id = req.query._id
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('error')
    } else {
      Coach.deleteOne({ _id })
        .then(() => {
          res.json('ok')
        })
        .catch((err) => res.status(400).send('err'))
    }
  })(req, res)
}

module.exports.getUserStaff = async (req, res) => {
  const userID = req.query.id
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || (user.type !== 'admin' && user.type !== 'staff')) {
      res.status(400).send('token error')
    } else {
      User.findOne({ _id: userID }, (err, user) => {
        if (err || !user) {
          res.status(400).send('user error')
        } else {
          res.json(user)
        }
      })
    }
  })(req, res)
}

<<<<<<< HEAD
module.exports.testAddContractMember = async (req, res) => {
  axios
    .get(
      'https://invictusgo.perfectgym.com/Api/v2/odata/Contracts',
      // {
      //   homeClubId: 1,
      //   personalData: {
      //     firstName: 'Азамат',
      //     lastName: 'Маликов',
      //     birthdate: '2005-07-04',
      //     phoneNumber: '8 (771) 123 456',
      //     email: 'azaazazazaza@gmail.com'
      //   },
      //   contractData: {
      //     paymentPlanId: 1,
      //     signUpDate: '2021-10-12',
      //     startDate: '2021-10-12'
      //   }
      // },
=======
module.exports.addContractMember = async (req, res) => {
  return axios
    .post(
      'https://invictusgo.perfectgym.com/Api/v2/Members/AddContractMember',
      { ...req.body },
      {
        headers: {
          'X-Client-Id': 'b57bf58a7d254458979123d0a36087ff',
          'X-Client-Secret':
            'bc3a5b145f9142b1b4b2115bf2d03e2ee1f3994cc03a405b812c7f4dbdba4c1c'
        }
      }
    )
    .then((response) => {
      console.log(response)
      res.send(response.data)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

module.exports.initExternalCardRegistration = async (req, res) => {
  return axios
    .post(
      'https://invictusgo.perfectgym.com/Api/v2/CreditCards/InitExternalCreditCardRegistration',
      { ...req.body },
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
      {
        headers: {
          'X-Client-Id': 'b57bf58a7d254458979123d0a36087ff',
          'X-Client-Secret':
            'bc3a5b145f9142b1b4b2115bf2d03e2ee1f3994cc03a405b812c7f4dbdba4c1c'
        }
      }
    )
    .then((response) => {
      console.log(response)
      res.send(response.data)
    })
    .catch((err) => {
<<<<<<< HEAD
      res.send(err)
=======
      res.status(400).send(err)
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
    })
}
