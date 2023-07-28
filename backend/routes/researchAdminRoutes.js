const express = require('express')
const userAuthenticator = require('../middleware/userAuthenticator')
const { researchDataHandler } = require('../controllers/researchAdminController')
const router = express.Router()

// GET METHOD ROUTES

router.route('/research').get(userAuthenticator,researchDataHandler)

module.exports = router