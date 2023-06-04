const express = require('express')
const {
    userLogin, 
    passwordReset,
    verifyForPasswordReset,
    changePassword } = require('../controllers/authController')

const router = express.Router()

/**
 *  Routes
 */

router.route('/login').post(userLogin)
router.route('/forgot-password').post(passwordReset)
router.route('/:id/:token').get(verifyForPasswordReset)
router.route('/:id/:token').post(changePassword)
/**
 * Exports
 */

module.exports = router