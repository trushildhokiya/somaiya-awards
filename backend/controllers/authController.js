//@desc handle login
//@route POST /auth/login
//@access public

const userLogin = (req,res)=>{

    const {user_email,user_password} = req.body;
    
    if( !user_email || !user_password){
        res.status(400)
        throw new Error("All field are mandatory")
    }

    res.status(200).json({
        user_email, user_password
    })
}


/**
 * Exports
 */

module.exports = {
    userLogin
}