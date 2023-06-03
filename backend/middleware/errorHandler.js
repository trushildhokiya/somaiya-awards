const {constants} = require('../constants')

const errorHandler = (err , req , res , next)=>{

    const statusCode = res.statusCode ? res.statusCode : 500

    switch(statusCode){

        case constants.BAD_REQUEST :
            res.json({
                title:"400 : BAD REQUEST",
                message : err.message,
                stack: err.stack
            })

        break
    }
}


module.exports = errorHandler