const express = require('express')
const router = express.Router()

const { createNewFaq, getFaq, deleteFaq, updateFaq } = require('../controllers/faq')
router.post('/faq', createNewFaq)
router.get('/faq', getFaq)
router.delete('/faq', deleteFaq)
router.put('/faq', updateFaq)

module.exports = router
