const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const { login, logout, checkQRValue } = require('../controllers/auth')

router.post(
  '/login',
  [check('email').isEmail(), check('password').isLength({ min: 5 })],
  login
)
router.get('/logout', logout)
router.post('/check-qr', checkQRValue)

module.exports = router
