const asyncHandler = require('express-async-handler');
const {
    OutstandingInstitution,
    Research,
    Sports,
    Teaching,
    NonTeaching,
    User,
    Sequelize } = require('../models')
const { Op } = Sequelize;



//@desc get data of institution forms to ieac 
//@route GET /ieac/data/outstanding-institution
//@access private

const institutionDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const currentYear = new Date().getFullYear();

    const data = await OutstandingInstitution.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institution_name: user_institution} 
            )
        }
    )

    res.status(200).json({
        data: data,
    })

})

//@desc get data of research forms to ieac
//@route GET /ieac/data/research
//@access private

const researchDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const currentYear = new Date().getFullYear();
    
    const data = await Research.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institution: user_institution} 
            )
        }
    )

    res.status(200).json({
        data: data,
    })
})

//@desc get data of sports forms to ieac
//@route GET /ieac/data/sports
//@access private

const sportsDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const currentYear = new Date().getFullYear();
    
    const data = await Sports.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institute_name: user_institution} 
            )
        }
        )

    res.status(200).json({
        data: data,
    })
})

//@desc get data of teaching forms to ieac
//@route GET /ieac/data/teaching
//@access private

const teachingDataHandler = asyncHandler(async (req, res) => {

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;
    
    const currentYear = new Date().getFullYear();

    const data = await Teaching.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institute_name: user_institution} 
            )
        }
    )

    res.status(200).json({
        data: data,
    })

})

//@desc get data of non-teaching forms to ieac
//@route GET /ieac/data/non-teaching
//@access private

const nonTeachingDataHandler = asyncHandler(async (req, res) => {


    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    const user_institution = user.institution;

    const currentYear = new Date().getFullYear();

    const data = await NonTeaching.findAll(
        {
            where: Sequelize.and( // raw SQL query using and operator
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), // match current Year
                {institute_name: user_institution} 
            )
        }
    )

    res.status(200).json({
        data: data,
    })

});


//@desc update institution form
//@route PUT /ieac/data/outstanding-institution
//@access private

const institutionDataUpdater = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message: 'API works',
    })
});

//@desc update research form
//@route PUT /ieac/data/research
//@access private

const researchDataUpdater = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({where: {id: user_id} });
    
    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }
    
    // checks role is IEAC or not
    if(user.role!= 'IEAC'){
        res.status(403)
        throw new Error("Forbidden access to resource")
    }

    const approvalFile = req.file.path;
    const {applicationID} = req.body;

    const applicationForm  = await Research.findOne({where: {id: applicationID}});

    await applicationForm.update({ieacApproved: true , ieacApprovedFile: approvalFile});

    res.status(200).json({
        message:'Update Sucessful'
    });
    
});

//@desc update sports
//@route PUT /ieac/data/sports
//@access private

const sportsDataUpdater = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message: 'API works',
    })
});


//@desc update teaching forms
//@route PUT /ieac/data/teaching
//@access private

const teachingDataUpdater = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message: 'API works',
    })
});


//@desc update non-teaching forms
//@route PUT /ieac/data/non-teaching
//@access private

const nonTeachingDataUpdater = asyncHandler( async (req,res)=>{
    res.status(200).json({
        message: 'API works',
    })
});


module.exports = {
    institutionDataHandler,
    researchDataHandler,
    sportsDataHandler,
    teachingDataHandler,
    nonTeachingDataHandler,
    institutionDataUpdater,
    researchDataUpdater,
    sportsDataUpdater,
    teachingDataUpdater,
    nonTeachingDataUpdater,
}