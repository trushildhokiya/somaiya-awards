module.exports = (sequelize , dataTypes)=>{

    const Sports = sequelize.define("Sports",{

        email_id:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        institute_name:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_inspiring_teacher:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_teacher_photo:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_teacher_hoi_assessment:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_sportsStar_girl:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_girl_sport:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_girl_photo:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_girl_hoi_assessment:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_sportsStar_boy:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_boy_sport:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_boy_photo:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        nominee_ss_boy_hoi_assessment:{
            type: dataTypes.STRING,
            allowNull: false,
        },

        ieacApproved: {

            type: dataTypes.BOOLEAN,
            defaultValue: false
        },

        hr_approved:{

            type: dataTypes.BOOLEAN,
            defaultValue: false,
        }

    })

    return Sports
}