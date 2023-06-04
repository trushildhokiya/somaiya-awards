const { where } = require('sequelize');
const {User} = require('../models')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const { log } = require('console');

//@desc handle login
//@route POST /auth/login
//@access public

const userLogin = asyncHandler( async (req,res)=>{

    const {user_email,user_password} = req.body;
    
    if( !user_email || !user_password){
        res.status(400)
        throw new Error("All field are mandatory")
    }

    const user = await User.findOne({where: {email_id: user_email}})

    if(!user){

        res.status(401)
        throw new Error("Unauthorized login request")
        
    }

    const dbPassword = user['password']

    const result = await bcrypt.compare(user_password,dbPassword)

    if(result){

        res.status(200).json({
            user: user_email,
            authorized: result
        })
    }
    else{

        res.status(401)
        throw new Error("Incorrect Email or password")
    }

})


/** User Registration Code */
// const userLogin = asyncHandler( async (req,res)=>{
    
//     const {user_email , user_password } = req.body;

//     const user = await User.findOne({where: {email_id: user_email}})

//     if(user){

//         res.status(400)
//         throw new Error("User already Exists")
        
//     }

//     const hashedPassword = await bcrypt.hash(user_password,10);

//     await User.create({email_id:user_email , password: hashedPassword })

//     res.status(200).json({
//         message:"User created successfully"
//     })

// })


/**
 * Exports
 */

module.exports = {
    userLogin
}

/**
 * default Credentials for Admin
 */

// email_id : admin@gmail.com
//password: Admin@123 (db SHA-256 10 salts crypted )