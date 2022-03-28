const express = require('express')
const router = express.Router()

const { createNew, getNews } = require('../controllers/news')
router.post('/new', createNew)
router.get('/new', getNews)

module.exports = router
