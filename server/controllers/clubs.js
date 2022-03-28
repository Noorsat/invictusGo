const mongoose = require('mongoose')

<<<<<<< HEAD
const User = mongoose.model('Users')
const passport = require('passport')
const jwt = require('jsonwebtoken')
/* eslint-disable */
const config = require('../config')
/* eslint-enable */
const { validationResult } = require('express-validator')
=======
const passport = require('passport')
/* eslint-disable */
const config = require('../config')
/* eslint-enable */
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
const Club = mongoose.model('Clubs')
const Coach = mongoose.model('Coach')

module.exports.createNewClub = async (req, res) => {
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('error')
    } else {
<<<<<<< HEAD
      return new Club({
        clubName: req.body.clubName,
        clubId: req.body.clubId,
        motto: req.body.motto,
        photoUrl: req.body.photoUrl,
        gymArea: req.body.gymArea,
        showersCount: req.body.showersCount,
        lockersCount: req.body.lockersCount,
        clubArea: req.body.clubArea,
        trainersCount: req.body.trainersCount,
        cardioTrainersCount: req.body.cardioTrainersCount,
        tittleText: req.body.tittleText,
        descriptionText: req.body.descriptionText,
        address: req.body.address,
        weekendBusinessHours: req.body.weekendBusinessHours,
        workdaysBusinessHours: req.body.workdaysBusinessHours,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        map: req.body.map,
        city: req.body.city
      })
=======
      return new Club(req.body)
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
        .save()
        .then((club) => {
          if (!club) {
            return res.status(400).send('error')
          } else {
            return res.json('ok')
          }
        })
    }
  })(req, res)
}
module.exports.getClubInfo = async (req, res) => {
  const clubId = req.query.clubId
  if (clubId === undefined) {
    Club.find({}, (err, clubs) => {
      if (err || !clubs) {
        return res.status(400).send('error')
      } else {
        return res.json(clubs)
      }
    })
  } else {
    Club.findOne({ clubId }, (err, club) => {
      if (err || !club) {
        return res.status(400).send('error')
      } else {
        Coach.find({ clubId }, (err, coaches) => {
          if (!err) {
            return res.json({ club, coaches })
          }
        })
      }
    })
  }
}
module.exports.updateClubInfo = async (req, res) => {
  const clubId = req.query.clubId
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('error')
    } else {
      if (clubId === undefined) {
        return res.status(400).send('error')
      } else {
        Club.findOne({ clubId }, (err, club) => {
          if (err || !club) {
            return res.status(400).send('error')
          } else {
            Object.assign(club, req.body)
            club
              .save()
              .then((user) => res.json('ok'))
              .catch((err) => res.status(400).send('error'))
          }
        })
      }
    }
  })(req, res)
}
module.exports.deleteClub = async (req, res) => {
  const clubId = req.query.clubId
  return passport.authenticate('jwt', (err, user) => {
    if (err || !user || user.type !== 'admin') {
      return res.status(400).send('error')
    } else {
      if (clubId === undefined) {
        return res.status(400).send('error')
      } else {
        Club.deleteOne({ clubId })
          .then(() => res.json('ok'))
          .catch((err) => res.status(400).send('error'))
      }
    }
  })(req, res)
}
