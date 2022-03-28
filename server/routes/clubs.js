const express = require('express')
const router = express.Router()

const { createNewClub, getClubInfo, updateClubInfo, deleteClub } = require('../controllers/clubs')
router.get('/clubs', getClubInfo)
router.post('/clubs', createNewClub)
router.put('/clubs', updateClubInfo)
router.delete('/clubs', deleteClub)

module.exports = router
