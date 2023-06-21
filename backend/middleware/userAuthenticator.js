const asyncHandler = require("express-async-handler");

const userAuthenticator = asyncHandler( async (req,res,next)=>{

    const token = req.headers['x-access-token']
    const user_id = req.headers['user_id']
    res.token = token
    res.user_id = user_id
    
    next()
} )


module.exports = userAuthenticator