const asyncHandler =  require('express-async-handler');
const {
    OutstandingInstitution,
    Research,
    Sports,
    Teaching,
    NonTeaching,
    User,
    FeedbackOne,
    FeedbackTwo,
    FeedbackThree,
    FeedbackFour ,
    Sequelize } = require('../models')
const { Op } = Sequelize;
const sequelize = require('sequelize');


//@desc get counts of all forms
//@route GET admin/data/counts
//@access Private

const getCounts = asyncHandler( async(req,res)=>{

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


    res.status(200).json({
        message:'Request Successful',
        data:countData
    })
})


//@desc get last 15 days count total datewise
//@route GET admin/data/fcount-15
//@access private

const getDaysCount = asyncHandler( async(req,res)=>{

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
    ];

    const pastDataCount = getDateCounts(processedData)

    res.status(200).json({
        message:'Api works',
        count: pastDataCount
    })

});


// custom functions which will be used in API controllers

const dataFormatter = (data)=>{

    const formattedData=[];

    for(const record of data){

        const x = {date:record.createdAt};
        formattedData.push(x);
    }

    return formattedData;
}

const getDateCounts = (array)=>{

    let currentDate = new Date();
    
    let dateCounts = {};

    for (let i = 0; i < 15; i++) {

      let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - i).toISOString().split('T')[0];
      
      // Set the initial count to 0
      dateCounts[date] = 0;
    }
    
   
    for (let j = 0; j < array.length; j++) {
      let arrayDate = new Date(array[j].date).toISOString().split('T')[0];
      
      // Check if the date is within the last 15 days
      if (dateCounts.hasOwnProperty(arrayDate)) {
        dateCounts[arrayDate]++;
      }
    }

    return dateCounts;
}


  
module.exports={
    getCounts,
    getDaysCount
}