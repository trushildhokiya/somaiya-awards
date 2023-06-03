const express = require('express')

const router = express.Router()

/**
 *  Routes
 */

router.route('/login').post((req,res)=>{
    
    const {name, password} = req.body
    res.status(200).json({
        name:name,
        password:password
    })
})


/**
 * Exports
 */

module.exports = router