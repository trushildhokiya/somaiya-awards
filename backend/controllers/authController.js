//@desc handle login
//@route POST /auth/login
//@access public

const userLogin = (req,res)=>{

    const {email,password} = req.body;
    
    if( !email || !password){
        res.status(400)
        throw new Error("All field are mandatory")
    }

    res.status(200).json({
        email, password
    })
}


/**
 * Exports
 */

module.exports = {
    userLogin
}