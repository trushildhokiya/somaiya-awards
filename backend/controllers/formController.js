const asyncHandler = require('express-async-handler')

const sampleFunction = asyncHandler( async (req,res)=>{
    
    res.status(200).json({
        message:'success'
    })
})

module.exports = {sampleFunction}