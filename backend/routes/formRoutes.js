const express =  require('express')
const router = express.Router()
const {submitForm_01} = require('../controllers/formController')
const {upload} = require('../middleware/fileUpload')

router.route('/outstanding-institution').post(upload.single('supportings'), submitForm_01)

module.exports = router