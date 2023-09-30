const express = require('express')
const {
    userLogin, 
    passwordReset,
    verifyForPasswordReset,
    changePassword,
    userValidate, 
    registerUser,
    deleteUser} = require('../controllers/authController')
    
const userAuthenticator = require('../middleware/userAuthenticator')

const router = express.Router()

/**
 *  Routes
 */

router.route('/login').post(userLogin)
router.route('/forgot-password').post(passwordReset)
router.route('/:id/:token').get(verifyForPasswordReset)
router.route('/:id/:token').post(changePassword)
router.route('/validate').get(userAuthenticator, userValidate)
router.route('/register').post(registerUser)
router.route('/deleteuser').post(deleteUser)
/**
 * Exports
 */

module.exports = router