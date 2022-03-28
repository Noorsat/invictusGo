const express = require('express')
const router = express.Router()
const passport = require('passport')
const { check } = require('express-validator')

const {
  registerUser,
  getUser,
  getCoaches,
  updateExpoPushToken,
  registerCoach,
  updateCoach,
  deleteCoach,
  getUserStaff,
<<<<<<< HEAD
  testAddContractMember
=======
  addContractMember,
  initExternalCardRegistration
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3
} = require('../controllers/users')
router.get('/coaches', getCoaches)
router.post(
  '/signup',
  [check('email').isEmail(), check('password').isLength({ min: 5 })],
  registerUser
)
router.post('/update-expo-push-token', updateExpoPushToken)
router.get('/user', getUser)
router.post('/coaches', registerCoach)
router.put('/coaches', updateCoach)
router.delete('/coaches', deleteCoach)
router.get('/userStaff', getUserStaff)
<<<<<<< HEAD
router.get('/addContractMember', testAddContractMember)
=======
router.get('/addContractMember', addContractMember)
router.get('/initExternalCreditCardRegistration', initExternalCardRegistration)
>>>>>>> 07f340609eaeac8a073acc8610760690331252a3

module.exports = router
