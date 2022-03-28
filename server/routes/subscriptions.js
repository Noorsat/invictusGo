const express = require('express')
const router = express.Router()

const {
  createNewSubscription,
  getSubscriptionsInfo,
  updateSubscription
} = require('../controllers/subscriptions')
router.get('/subscriptions', getSubscriptionsInfo)
router.post('/subscriptions', createNewSubscription)
router.put('/subscriptions', updateSubscription)

module.exports = router
