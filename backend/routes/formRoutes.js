const express =  require('express')
const router = express.Router()
const {sampleFunction} = require('../controllers/formController')
const {upload} = require('../middleware/fileUpload')

router.route('/').post(upload.single('file'),sampleFunction)

module.exports = router