const config = require('./index')
const mongoose = require('mongoose')
const passportJWT = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy

const { Strategy: JWTStrategy, ExtractJwt } = passportJWT

const User = mongoose.model('Users')

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, User.authenticate())
  )

  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.SECRET_KEY
      },
      (jwtPayload, cb) => {
        return User.findById(jwtPayload.user._id)
          .then((user) => {
            return cb(null, user)
          })
          .catch((err) => {
            return cb(err, false)
          })
      }
    )
  )

  passport.serializeUser(User.serializeUser())
  passport.deserializeUser(User.deserializeUser())
}
