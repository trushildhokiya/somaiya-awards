const { OutstandingInstitution } = require('../models')

const asyncHandler = require('express-async-handler')

//@desc handle institution form submission
//@route POST /forms/outstanding-institution
//@access private
const submitForm_01 = asyncHandler(async (req, res) => {

    const {
        email_id, nomination_category, institution_name, established_In,
        hoi_name, hoi_designation, hoi_joining_date, somaiya_mail_id,
        contact_number, q_01, q_02, q_03, q_04, q_05, q_06, q_07, q_08, q_09, q_10, q_11, q_12,
        q_13, q_14, q_15, q_16, q_17, institution_ratings, q_18, q_19, q_20, q_21, q_22, q_23, q_24,
        q_25, q_26, q_27, q_28, q_29, q_30, q_31, q_32, q_33, q_34, q_35, q_36, q_37, q_38, } = req.body

    const supportings = req.file.path

    await OutstandingInstitution.create({
        email_id: email_id,
        nomination_category: nomination_category,
        institution_name: institution_name,
        established_In: established_In,
        head_of_institution: hoi_name,
        hoi_designation: hoi_designation,
        hoi_joining_date: hoi_joining_date,
        somaiya_mail_id: somaiya_mail_id,
        contact_number: contact_number,
        q_01: q_01,
        q_02: q_02,
        q_03: q_03,
        q_04: q_04,
        q_05: q_05,
        q_06: q_06,
        q_07: q_07,
        q_08: q_08,
        q_09: q_09,
        q_10: q_10,
        q_11: q_11,
        q_12: q_12,
        q_13: q_13,
        q_14: q_14,
        q_15: q_15,
        q_16: q_16,
        q_17: q_17,
        institution_ratings: institution_ratings,
        q_18: q_18,
        q_19: q_19,
        q_20: q_20,
        q_21: q_21,
        q_22: q_22,
        q_23: q_23,
        q_24: q_24,
        q_25: q_25,
        q_26: q_26,
        q_27: q_27,
        q_28: q_28,
        q_29: q_29,
        q_30: q_30,
        q_31: q_31,
        q_32: q_32,
        q_33: q_33,
        q_34: q_34,
        q_35: q_35,
        q_36: q_36,
        q_37: q_37,
        q_38: q_38,
        supportings: supportings
    })

    res.status(200).json({
        message: "Form submitted successfully",
        submitted:true
    })
})

module.exports = { submitForm_01 }