const express = require('express');
const router = express.Router()
const userAuthenticator = require('../middleware/userAuthenticator');
const {
        getCounts,
        getDaysCount
    } = require('../controllers/adminController')

/** GET ROUTES */

router.route('/counts').get(userAuthenticator, getCounts);
router.route('/count-past-days').get(userAuthenticator,getDaysCount)

module.exports = router;