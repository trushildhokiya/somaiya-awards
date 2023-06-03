const express = require('express')
const { userLogin } = require('../controllers/authController')

const router = express.Router()

/**
 *  Routes
 */

router.route('/login').post(userLogin)


/**
 * Exports
 */

module.exports = router