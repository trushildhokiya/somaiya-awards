const express = require('express');
const router = express.Router()
const userAuthenticator = require('../middleware/userAuthenticator');
const {
        getCounts,
        getDaysCount,
        getInstitutionWiseCount
    } = require('../controllers/adminController')

/** GET ROUTES */

router.route('/count/all').get(userAuthenticator, getCounts);
router.route('/count/15').get(userAuthenticator,getDaysCount)
router.route('/count/institution-wise').get(userAuthenticator,getInstitutionWiseCount)
module.exports = router;