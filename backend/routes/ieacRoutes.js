const express = require('express');
const router = express.Router();
const {
    institutionDataHandler,
    researchDataHandler,
    sportsDataHandler,
    teachingDataHandler,
    nonTeachingDataHandler,
    institutionDataUpdater,
    researchDataUpdater,
    sportsDataUpdater,
    teachingDataUpdater,
    nonTeachingDataUpdater} = require('../controllers/ieacController');
const {upload06} =require('../middleware/fileUpload');
const userAuthenticator = require('../middleware/userAuthenticator');

/**GET Routes */
router.route('/outstanding-institution').get(userAuthenticator, institutionDataHandler);
router.route('/research').get(userAuthenticator, researchDataHandler);
router.route('/sports').get(userAuthenticator,sportsDataHandler);
router.route('/teaching').get(userAuthenticator,teachingDataHandler);
router.route('/non-teaching').get(userAuthenticator,nonTeachingDataHandler);

/**PUT Routes */

router.route('/outstanding-institution').put(userAuthenticator,institutionDataUpdater);
router.route('/research').put(userAuthenticator,upload06.single('approvalFile'),researchDataUpdater);
router.route('/sports').put(userAuthenticator,sportsDataUpdater);
router.route('/teaching').put(userAuthenticator,teachingDataUpdater);
router.route('/non-teaching').put(userAuthenticator,nonTeachingDataUpdater);

module.exports = router