const express = require('express');
const router = express.Router();
const {
    institutionDataHandler,
    researchDataHandler,
    sportsDataHandler,
    teachingDataHandler,
    nonTeachingDataHandler,
    researchDataUpdater,
    sportsDataUpdater,
    teachingDataUpdater,
    nonTeachingDataUpdater} = require('../controllers/ieacController');
const {upload06, upload07, upload08, upload09} =require('../middleware/fileUpload');
const userAuthenticator = require('../middleware/userAuthenticator');

/**GET Routes */
router.route('/outstanding-institution').get(userAuthenticator, institutionDataHandler);
router.route('/research').get(userAuthenticator, researchDataHandler);
router.route('/sports').get(userAuthenticator,sportsDataHandler);
router.route('/teaching').get(userAuthenticator,teachingDataHandler);
router.route('/non-teaching').get(userAuthenticator,nonTeachingDataHandler);

/**PUT Routes */

router.route('/research').put(userAuthenticator,upload06.single('approvalFile'),researchDataUpdater);
router.route('/sports').put(userAuthenticator,upload07.single('approvalFile'),sportsDataUpdater);
router.route('/teaching').put(userAuthenticator,upload08.single('approvalFile'),teachingDataUpdater);
router.route('/non-teaching').put(userAuthenticator,upload09.single('approvalFile'),nonTeachingDataUpdater);

module.exports = router