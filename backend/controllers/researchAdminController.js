const asyncHandler = require('express-async-handler');
const {
    Research,
    User,
    Sequelize } = require('../models')
const { Op } = Sequelize;
const sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');


//@desc get data of research forms to Research Admin
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

    if (user.role !='RESEARCH ADMIN') {
        //throw error
        res.status(403)
        throw new Error("FORBIDDEN ACCESS TO RESOURCE")
    }

    const currentYear = new Date().getFullYear();
    
    const data = await Research.findAll(
        {
            where: sequelize.where(
                sequelize.fn('YEAR',sequelize.col('createdAt')), currentYear
            )
        }
    )

    res.status(200).json({
        data: data,
    })
})


module.exports = {
    researchDataHandler
}