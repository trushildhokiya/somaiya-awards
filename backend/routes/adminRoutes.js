const express = require('express');
const router = express.Router()
const userAuthenticator = require('../middleware/userAuthenticator');
const {upload11}  = require('../middleware/fileUpload')
const {
        getCounts,
        getDaysCount,
        getInstitutionWiseCount,
        getInstitutionData,
        getResearchData,
        getSportsData,
        getTeachingData,
        getNonTeachingData,
        getFeedback01Data,
        getFeedback02Data,
        getFeedback03Data,
        getFeedback04Data,
        getTeachingScoreCardData,
        getNonTeachingScoreCardData,
        resultsDataHandler,
        getResultsData,
        getGroupWiseCount
    } = require('../controllers/adminController')

/** GET ROUTES */

router.route('/count/all').get(userAuthenticator, getCounts);
router.route('/count/15').get(userAuthenticator,getDaysCount)
router.route('/count/institution-wise').get(userAuthenticator,getInstitutionWiseCount)
router.route('/count/group').get(userAuthenticator,getGroupWiseCount)

// responses

router.route('/forms/outstanding-institution').get(userAuthenticator, getInstitutionData)
router.route('/forms/research').get(userAuthenticator, getResearchData)
router.route('/forms/sports').get(userAuthenticator, getSportsData)
router.route('/forms/teaching').get(userAuthenticator, getTeachingData)
router.route('/forms/non-teaching').get(userAuthenticator, getNonTeachingData)
router.route('/forms/feedback-01').get(userAuthenticator, getFeedback01Data)
router.route('/forms/feedback-02').get(userAuthenticator, getFeedback02Data)
router.route('/forms/feedback-03').get(userAuthenticator, getFeedback03Data)
router.route('/forms/feedback-04').get(userAuthenticator, getFeedback04Data)


// scorecard

router.route('/teaching/scorecard').get(userAuthenticator, getTeachingScoreCardData);
router.route('/non-teaching/scorecard').get(userAuthenticator, getNonTeachingScoreCardData);

// Announce Results

router.route('/announce-results').post(upload11.single('result'),resultsDataHandler);

// GET RESULTS

router.route('/results').get(getResultsData);

module.exports = router;