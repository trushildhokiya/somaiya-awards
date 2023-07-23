const asyncHandler =  require('express-async-handler');
const {
    OutstandingInstitution,
    Research,
    Sports,
    Teaching,
    NonTeaching,
    Students,
    User,
    Result,
    FeedbackOne,
    FeedbackTwo,
    FeedbackThree,
    FeedbackFour ,
    Sequelize } = require('../models')
const { Op } = Sequelize;
const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');


/**Global Info */
const institutionArray =  [
    "The Somaiya School",
    "S. K. Somaiya Prathmik Shala",
    "S K Somaiya Vinay Mandir High School",
    "Somaiya Vidyamandir- Sakarwadi",
    "Shri Sharda English Medium School Kopargaon",
    "Somaiya Vidya Mandir- Laxmiwadi",
    "Somaiya Shishu Niketan Primary School- Sameerwadi",
    "Somaiya Vinaymandir High School- Sameerwadi",
    "KJ Somaiya English Medium School Sameerwadi",
    "Nareshwadi Learning Centre- Dahanu",
    "SK Somaiya Vinay Mandir High School, Mumbai",
    "KJ Somaiya Junior College of Arts, Commerce and Science",
    "SK Somaiya Vinay Mandir Junior College, Mumbai",
    "KJ Somaiya Private Industrial Training Institute",
    "Smt. Sakarben Somaiya Junior College of Education (DEd)",
    "KJ Somaiya Institute of Engineering and Information Technology, Ayurvihar",
    "KJ Somaiya College of Engineering",
    "KJ Somaiya Institute of Management",
    "KJ Somaiya Polytechnic College",
    "KJ Somaiya College of Arts and Commerce",
    "KJ Somaiya College of Science and Commerce",
    "K.J Somaiya College of Comprehensive College of Education , Training and Research",
    "KJ Somaiya Bhartiya Sanskriti Peetham",
    "KJ Somaiya Centre for Buddhish Studies",
    "KJ Somaiya Centre for Studies in Jainism",
    "KJ Somaiya Medical College and Research Centre",
    "KJ Somaiya College of Physiotherapy",
    "KJ Somaiya School and College of Nursing",
    "Somaiya Sports Academy",
    "SK Somaiya College (SVU)",
    "SK Somaiya College of Arts, Science and Commerce (MU)"
];

/**
 * DASHBOARD SECTION 
 * 
 */
//@desc get counts of all forms
//@route GET admin/data/count/all
//@access Private

const getCounts = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }


    let countData = {};

    const currentYear = new Date().getFullYear()

    // institution Count
    countData.institutionFormCount = await OutstandingInstitution.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )


    // research Count

    countData.researchFormCount = await Research.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // sports Count

    countData.sportsFormCount = await Sports.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // teaching Count

    countData.teachingFormCount = await Teaching.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // non teaching Count

    countData.nonTeachingFormCount = await NonTeaching.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // feedback1 count

    countData.feedbackOneFormCount = await FeedbackOne.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // feedback2 count

    countData.feedbackTwoFormCount = await FeedbackTwo.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // feedback3 count

    countData.feedbackThreeFormCount = await FeedbackThree.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // feedback4 count

    countData.feedbackFourFormCount = await FeedbackFour.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    // students form count

    countData.studentsFormCount = await Students.count(
        {
            where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )


    res.status(200).json({
        message:'Request Successful',
        data:countData
    })
})


//@desc get last 15 days count total datewise
//@route GET admin/data/count/15
//@access private

const getDaysCount = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }


    const currentYear = new Date().getFullYear();

    //get institution data
    const institutionData = await OutstandingInstitution.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), 
            )
        }
    )

    //get research data
    const researchData = await Research.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )


    //get sports data
    const sportsData = await Sports.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    //get teaching data
    const teachingData = await Teaching.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    //get Non Teaching Data
    const nonTeachingData = await NonTeaching.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )


    // get feedback One Data
    const feedbackOneData = await FeedbackOne.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    // get feedback two data

    const feedbackTwoData = await  FeedbackTwo.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    // get feedback three data

    const feedbackThreeData = await FeedbackThree.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    // get feedback four data

    const feedbackFourData = await FeedbackFour.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    // get students form data

    const studentsData = await Students.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    //process th data to extract just dates
    const institutionFormattedData = dataFormatter(institutionData);
    const researchFormattedData = dataFormatter(researchData);
    const sportsFormattedData = dataFormatter(sportsData);
    const teachingFormattedData = dataFormatter(teachingData);
    const nonTeachingFormattedData = dataFormatter(nonTeachingData)
    const feedbackOneFormattedData = dataFormatter(feedbackOneData)
    const feedbackTwoFormattedData = dataFormatter(feedbackTwoData)
    const feedbackThreeFormattedData = dataFormatter(feedbackThreeData)
    const feedbackFourFormattedData = dataFormatter(feedbackFourData)
    const studentsFormattedData = dataFormatter(studentsData)

    // put extracted data into a single array
    let processedData = [
        ...institutionFormattedData,
        ...researchFormattedData,
        ...sportsFormattedData,
        ...teachingFormattedData,
        ...nonTeachingFormattedData,
        ...feedbackOneFormattedData,
        ...feedbackTwoFormattedData,
        ...feedbackThreeFormattedData,
        ...feedbackFourFormattedData,
        ...studentsFormattedData
    ];

    const pastDataCount = getDateCounts(processedData)

    res.status(200).json({
        message:'Api works',
        data: pastDataCount
    })

});


//@desc get institution wise all forms count
//@route GET admin/data/count/institution-wise
//@access Private 

const getInstitutionWiseCount = asyncHandler(async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    //get institution data
    const institutionData = await OutstandingInstitution.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`), 
            )
        }
    )

    //get research data
    const researchData = await Research.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )


    //get sports data
    const sportsData = await Sports.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    //get teaching data
    const teachingData = await Teaching.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    //get Non Teaching Data
    const nonTeachingData = await NonTeaching.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )

    // get Students Data

    const studentsData = await Students.findAll(
        {
            where: Sequelize.and( 
                Sequelize.literal(`YEAR(createdAt) = ${currentYear}`),  
            )
        }
    )


    const institutionWiseCount= [];
  
    // create a array of object with nstitution name and count (default 0 )

    for (const institution of institutionArray){

        institutionWiseCount.push(
            {
                id: uuidv4(),
                institute: institution ,
                institution_form: 0,
                research_form:0,
                sports_form:0,
                teaching_form:0,
                non_teaching_form:0,
                students_form:0
            }
        )
    }

    // institution Form Counter

    for( const data of institutionData){

        const institute = data.institution_name;

        institutionWiseCount.find( (object, index)=>{
            if(object.institute === institute){
                object.institution_form = object.institution_form + 1
            }
        })

    }


    // research form Counter

    for( const data of researchData){

        const institute = data.institution;

        institutionWiseCount.find( (object, index)=>{
            if(object.institute === institute){
                object.research_form = object.research_form + 1
            }
        })

    }


    // sports form Counter

    for( const data of sportsData){

        const institute = data.institute_name;

        institutionWiseCount.find( (object, index)=>{
            if(object.institute === institute){
                object.sports_form = object.sports_form + 1
            }
        })

    }


    // teaching form Counter

    for( const data of teachingData){

        const institute = data.institute_name;

        institutionWiseCount.find( (object, index)=>{
            if(object.institute === institute){
                object.teaching_form = object.teaching_form + 1
            }
        })

    }  


    // non teaching form Counter

    for( const data of nonTeachingData){

        const institute = data.institute_name;

        institutionWiseCount.find( (object, index)=>{
            if(object.institute === institute){
                object.non_teaching_form = object.non_teaching_form + 1
            }
        })

    } 

    // students form counter

    for( const data of studentsData ){

        const institute = data.institution_name;

        institutionWiseCount.find((object,index)=>{

            if(object.institute === institute ){
                object.students_form = object.students_form + 1;
            }
        })
    }


    res.status(200).json({
        message:'Request Successful',
        data:institutionWiseCount
    })
})


// @desc : group Wise Count
// @ route GET admin/data/count/group
// @access Private 

// TODO: complete the controller



/**
 * RESPONSES SECTION
 */


//@desc get records of institution form of current Year
//@route admin/data/forms/outstanding-institution
//@access Private

const getInstitutionData = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await OutstandingInstitution.findAll({
        where: sequelize.where(sequelize.fn('YEAR' , sequelize.col('createdAt')), currentYear)
    });

    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})



//@desc get records of ieac approved research form of current Year
//@route admin/data/forms/research
//@access Private

const getResearchData = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await Research.findAll({
        where: {
          [Op.and]: [
            sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
            { ieacApproved: true }
          ]
        }
      });

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })
})




//@desc get records of ieac approved Sports form of current Year
//@route admin/data/forms/sports
//@access Private

const getSportsData = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await Sports.findAll({
        where: {
          [Op.and]: [
            sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
            { ieacApproved: true }
          ]
        }
    });

    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})




//@desc get records ieac approved teaching form of current Year
//@route admin/data/forms/teaching
//@access Private

const getTeachingData = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await Teaching.findAll({
        where: {
          [Op.and]: [
            sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
            { ieacApproved: true }
          ]
        }
    });

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})


//@desc get records of ieac approved non teaching form of current Year
//@route admin/data/forms/non-teaching
//@access Private

const getNonTeachingData = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const data = await NonTeaching.findAll({
        where: {
          [Op.and]: [
            sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear),
            { ieacApproved: true }
          ]
        }
    });

    res.status(200).json({
        message: 'Request Successful',
        data: data
    })

})


//@desc get records of feedback-01 form of current Year
//@route admin/data/forms/feedback-01
//@access Private

const getFeedback01Data = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await FeedbackOne.findAll(
        {
            where : sequelize.where(sequelize.fn('YEAR' , sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})


//@desc get records feedback-02 form of current Year
//@route admin/data/forms/feedback-02
//@access Private

const getFeedback02Data = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await FeedbackTwo.findAll(
        {
            where : sequelize.where(sequelize.fn('YEAR' , sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})


//@desc get records of feedback-03 form of current Year
//@route admin/data/forms/feedback-03
//@access Private

const getFeedback03Data = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear()

    const data = await FeedbackThree.findAll(
        {
            where : sequelize.where(sequelize.fn('YEAR' , sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})


//@desc get records of feedback04 of current Year
//@route admin/data/forms/feedback-04
//@access Private

const getFeedback04Data = asyncHandler( async (req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }
    
    const currentYear = new Date().getFullYear()

    const data = await FeedbackFour.findAll(
        {
            where : sequelize.where(sequelize.fn('YEAR' , sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message:'Request Successful',
        data: data
    })

})

/**
 * Score Card Data API methods
 */


//@desc get necessary Data for Teaching Scorecard
//@route GET admin/data/teaching/scorecard/:id
//@acess Private
const getTeachingScoreCardData = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();
    const studentsValidFeedbacks = [];
    const peersValidFeedbacks = [];

    let hoiScore =0 
    let ieacScore =0 
    const applicationID = req.headers.applicationid;

    const applicationData = await Teaching.findOne({where: {id: applicationID}});

    const facultyName = applicationData.faculty_name;

    const studentFeedbackData = await FeedbackOne.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })


    const peerFeedbackData = await FeedbackTwo.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })



    // calculate hoi score avg 

    hoiScore = (
        applicationData.q_01 +
        applicationData.q_02 +
        applicationData.q_03 +
        applicationData.q_04 +
        applicationData.q_05 +
        applicationData.q_06 +
        applicationData.q_07 +
        applicationData.q_08 +
        applicationData.q_09 +
        applicationData.q_10 +
        applicationData.q_11 +
        applicationData.q_12 +
        applicationData.q_13 +
        applicationData.q_14 +
        applicationData.q_15 +
        applicationData.q_16 +
        applicationData.q_17 +
        applicationData.q_18 +
        applicationData.q_19 +
        applicationData.q_20 
    )


    const hoiAverageScore = Number( (hoiScore/ 20).toFixed(2))


    // calculate ieac score avg

    const ieacAverageScore = Number(( ( 
        Number(applicationData.ieac_scoreA) + 
        Number(applicationData.ieac_scoreB) + 
        Number(applicationData.ieac_scoreC) ) /3 ).toFixed(2));
    
    // filter feedback  current faculty

    for (const feedback of studentFeedbackData){
        if (feedback.teacher_name.trim().toLowerCase() === facultyName.trim().toLowerCase()){
            studentsValidFeedbacks.push(feedback)
        }
    }

    for ( const feedback of peerFeedbackData){
        if( feedback.teacher_name.trim().toLowerCase() === facultyName.trim().toLowerCase()){
            peersValidFeedbacks.push(feedback)
        }
    }


    // calculate feedback sum for each
    
    let studentFeedbackScoreSum = 0;
    let peersFeedbackScoreSum = 0;

    for( const feedback of studentsValidFeedbacks){

        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_01)
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_02)
        studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_03
        studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_04
        studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_05
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_06)
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_07)
        studentFeedbackScoreSum = studentFeedbackScoreSum + feedback.q_08
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_09)
        studentFeedbackScoreSum = studentFeedbackScoreSum + textToScore(feedback.q_11)

    }

    for ( const feedback of peersValidFeedbacks ){

        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_01)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_02)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_03)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_04)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_05)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_06)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_07)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_08)
        peersFeedbackScoreSum = peersFeedbackScoreSum + textToScore(feedback.q_09)

    }


    // calculate average

    const studentsFeedbackAverageScore = Number( (studentFeedbackScoreSum / (10 * studentsValidFeedbacks.length)).toFixed(2) )
    const peersFeedbackAverageScore = Number( (peersFeedbackScoreSum / ( peersValidFeedbacks.length * 9 )).toFixed(2) )

    // other required Data

    const categoryOfAward = applicationData.awards_category;
    const institute = applicationData.institute_name
    const scoreA = Number (applicationData.ieac_scoreA)
    const scoreB = Number (applicationData.ieac_scoreB)
    const scoreC = Number (applicationData.ieac_scoreC)

    res.status(200).json({
        message:'Request Successful',
        name: facultyName,
        category: categoryOfAward,
        institute: institute,
        scoreA:scoreA,
        scoreB:scoreB,
        scoreC:scoreC,
        hoi_avg: hoiAverageScore,
        ieac_avg:ieacAverageScore,
        student_avg: studentsFeedbackAverageScore,
        peers_avg: peersFeedbackAverageScore,
    })
})


//@desc get scorecard Data for non teaching entries
//@route GET admin/data/teaching/scorecard/:id
//@access Private

const getNonTeachingScoreCardData = asyncHandler( async(req,res)=>{


    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if(user.role != 'ADMIN'){

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }
    
    const currentYear = new Date().getFullYear();

    const studentValidFeedbacks= [];
    const peerValidFeedbacks= [];

    const applicationID = req.headers.applicationid;

    // get data from db

    const studentFeedbacks = await FeedbackThree.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    })

    const peersFeedback = await FeedbackFour.findAll({
        where: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
    });


    // find application Data

    const applicationData = await NonTeaching.findOne({
        where: {id: applicationID}
    })

    // find feedbacks of requested staff

    for ( const feedback of studentFeedbacks){

        if(applicationData.staff_name.trim().toLowerCase() === feedback.employee_name.trim().toLowerCase()){
            
            studentValidFeedbacks.push(feedback)
        }
    }


    for( const feedback of peersFeedback){

        if(applicationData.staff_name.trim().toLowerCase() === feedback.nominee_name.trim().toLowerCase()){

            peerValidFeedbacks.push(feedback)
        }
    }

    // calculate hoi_avg

    const hoi_avg = Number (((
        applicationData.q_01 +
        applicationData.q_02 +
        applicationData.q_03 +
        applicationData.q_04 +
        applicationData.q_05 +
        applicationData.q_06 +
        applicationData.q_07 +
        applicationData.q_08 +
        applicationData.q_09 +
        applicationData.q_10 +
        applicationData.q_11 +
        applicationData.q_12 +
        applicationData.q_13 +
        applicationData.q_14 +
        applicationData.q_15 +
        applicationData.q_16 +
        applicationData.q_17 +
        applicationData.q_18 +
        applicationData.q_19 +
        applicationData.q_20 +
        applicationData.q_21 +
        applicationData.q_22 +
        applicationData.q_23 +
        applicationData.q_24 
    ) / 24).toFixed(2))

    // calculate ieac_avg

    const ieac_avg = Number(((
        Number(applicationData.ieac_scoreA)+
        Number(applicationData.ieac_scoreB)
    ) / 2).toFixed(2))

    // calculate student avg

    let studentsfeedbackSum = 0

    for( const feedback of studentValidFeedbacks){

        studentsfeedbackSum = (
            studentsfeedbackSum+
            textToScore(feedback.q_01)+
            textToScore(feedback.q_02)+
            textToScore(feedback.q_03)+
            textToScore(feedback.q_04)+
            textToScore(feedback.q_05)
        )
    }

    const student_avg = Number((studentsfeedbackSum / (5*studentValidFeedbacks.length) ).toFixed(2))

    // calculate peers avg

    let peerFeedbackSum = 0 

    for ( const feedback of peerValidFeedbacks ){

        peerFeedbackSum = (
            peerFeedbackSum+
            textToScore(feedback.q_01)+
            textToScore(feedback.q_02)+
            textToScore(feedback.q_03)+
            textToScore(feedback.q_04)+
            textToScore(feedback.q_05)+
            textToScore(feedback.q_06)+
            textToScore(feedback.q_07)+
            textToScore(feedback.q_08)
        )
    }

    const peers_avg = Number(((peerFeedbackSum)/ (8* peerValidFeedbacks.length) ).toFixed(2))

    // get necessary data

    const name = applicationData.staff_name
    const category = applicationData.award_category  
    const institute = applicationData.institute_name
    const scoreA = applicationData.ieac_scoreA
    const scoreB = applicationData.ieac_scoreB

    res.status(200).json({
        message: 'Request Successful',
        name: name,
        category: category,
        institute: institute,
        scoreA: scoreA,
        scoreB: scoreB,
        hoi_avg:hoi_avg,
        ieac_avg: ieac_avg,
        student_avg: student_avg,
        peers_avg: peers_avg
    })
})


//@desc POST results file
//@route POST admin/data/announce-results
//@access Private

const resultsDataHandler = asyncHandler( async(req,res)=>{

    const result  = await Result.create({
        result:req.file.path
    });

    res.status(200).json({
        message:'Request Successful',
    })
})


//@desc POST results file
//@route POST admin/data/announce-results
//@access Private

const getResultsData = asyncHandler( async(req,res)=>{

    const user_id = res.user_id;

    const user = await User.findOne({ where: { id: user_id } });

    if (!user) {
        //throw error
        res.status(400)
        throw new Error("User Not found")
    }

    if (user.role != 'ADMIN') {

        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();

    const result  = await Result.findAll(
        {
            where: sequelize.where( sequelize.fn('YEAR', sequelize.col('createdAt')), currentYear)
        }
    )

    res.status(200).json({
        message:'Request Successful',
        data:result
    })
})

// custom functions which will be used in Admin Controllers

// @desc: extracts date from data 
// @accepts Array
const dataFormatter = (data)=>{

    const formattedData=[];

    for(const record of data){

        const x = {date:record.createdAt};
        formattedData.push(x);
    }

    return formattedData;
}


// @ desc get occurance of each date in formatted data
// @accepts Array
const getDateCounts = (array) => {
    let currentDate = new Date();
    let dateCounts = [];
  
    for (let i = 14; i >= 0; i--) {
      let date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - i
      ).toISOString().split('T')[0];
  
      // Set the initial count to 0
      let dateCount = {
        date: date,
        formsFilled: 0
      };
  
      dateCounts.unshift(dateCount); 
    }
  
    // Add today's date if it's not already present
    let today = new Date().toISOString().split('T')[0];
    let foundToday = dateCounts.find(dateCount => dateCount.date === today);
    if (!foundToday) {
      dateCounts.unshift({ date: today, formsFilled: 0 }); 
    }
  
    for (let j = 0; j < array.length; j++) {
      let arrayDate = new Date(array[j].date).toISOString().split('T')[0];
  
      // Check if the date is within the last 15 days
      let foundDate = dateCounts.find(dateCount => dateCount.date === arrayDate);
      if (foundDate) {
        foundDate.formsFilled++;
      }
    }
  
    return dateCounts;
  };
  

const textToScore = (text)=>{

    let score;

    switch (text) {
        case 'Strongly Agree':
        case 'Outstanding':
          score = 5;
          break;
      
        case 'Agree':
        case 'Excellent':
        case 'Very Good':
          score = 4;
          break;
      
        case 'Sometimes':
        case 'Good':
          score = 3;
          break;
      
        case 'Disagree':
        case 'Average':
          score = 2;
          break;
      
        case 'Poor':
        case 'Strongly Disagree':
          score = 1;
          break;
      }
      

    return score
  
}

  
module.exports={
    getCounts,
    getDaysCount,
    getInstitutionWiseCount,
    getInstitutionData,
    getSportsData,
    getResearchData,
    getTeachingData,
    getNonTeachingData,
    getFeedback01Data,
    getFeedback02Data,
    getFeedback03Data,
    getFeedback04Data,
    getTeachingScoreCardData,
    getNonTeachingScoreCardData,
    resultsDataHandler,
    getResultsData
}