const asyncHandler = require('express-async-handler');
const {
    OutstandingInstitution,
    Research,
    Sports,
    Teaching,
    NonTeaching ,
    User} = require('../models')


//@desc get data of institution forms to hoi
//@route POST /hoi/data/outstanding-institution
//@access private

const institutionDataHandler = asyncHandler( async(req, res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id}});

    if(!user){
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const data = await OutstandingInstitution.findAll({where:{institution_name: user_institution}})

    res.status(200).json({
        data: data,
    })
    
})

//@desc get data of research forms to hoi
//@route POST /hoi/data/research
//@access private

const researchDataHandler = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id}});

    if(!user){
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const data = await Research.findAll({where:{institution: user_institution}})

    res.status(200).json({
        data: data,
    })
})

//@desc get data of sports forms to hoi
//@route POST /hoi/data/sports
//@access private

const sportsDataHandler = asyncHandler( async(req,res)=>{
    
    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id}});

    if(!user){
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const data = await Sports.findAll({where:{institute_name: user_institution}})

    res.status(200).json({
        data: data,
    })
})

//@desc get data of teaching forms to hoi
//@route POST /hoi/data/teaching
//@access private

const teachingDataHandler = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id}});

    if(!user){
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const data = await Teaching.findAll({where:{institute_name: user_institution}})

    res.status(200).json({
        data: data,
    })

})

//@desc get data of non-teaching forms to hoi
//@route POST /hoi/data/non-teaching
//@access private

const nonTeachingDataHandler = asyncHandler( async(req,res)=>{


    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id}});

    if(!user){
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const data = await NonTeaching.findAll({where:{institute_name: user_institution}})

    res.status(200).json({
        data: data,
    })

})

module.exports= {
    institutionDataHandler,
    researchDataHandler,
    sportsDataHandler,
    teachingDataHandler,
    nonTeachingDataHandler
}