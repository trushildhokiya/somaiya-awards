const express = require('express');
const router = express.Router();
const {
    institutionDataHandler,
    researchDataHandler,
    sportsDataHandler,
    teachingDataHandler,
    nonTeachingDataHandler} = require('../controllers/ieacController')
const userAuthenticator = require('../middleware/userAuthenticator');

router.route('/outstanding-institution').get(userAuthenticator, institutionDataHandler);
router.route('/research').get(userAuthenticator, researchDataHandler);
router.route('/sports').get(userAuthenticator,sportsDataHandler);
router.route('/teaching').get(userAuthenticator,teachingDataHandler);
router.route('/non-teaching').get(userAuthenticator,nonTeachingDataHandler);


module.exports = router