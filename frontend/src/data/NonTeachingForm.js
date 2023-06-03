const NonTeachingForm = [
    {
        title: "Email",
        _name: "email_id",
        type: "email",
        requiredStatus: true,
        hasValidations:true,
        validationType:'email-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Name of the Staff",
        _name: "staff_name",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Categories: Please Tick One as per Eligibility",
        _name: "award_category",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: ["Employee of the Year (More than 3 years of service)",
            "Promising Employee Educational Institute (1 to 3 years of service)",
            "Promising Employee Somaiya Trust/GVPM (1 to 3 years of service)",
            "Outstanding Employee Somaiya Trust/GVPM",
            "Outstanding Employee K. J. Somaiya Hospital & Research Centre"
        ],
        page: 1,
        fieldsPerLine: 1
    },
    {
        title: "Name of institute",
        _name: "institute_name",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Department",
        _name: "department",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Present Position",
        _name: "designation",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Date of appointment",
        _name: "appointment_date",
        type: "date",
        requiredStatus: true,
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Somaiya Email Id",
        _name: "somaiya_email",
        type: "email",
        requiredStatus: true,
        hasValidations:true,
        validationType:'somaiya-mail-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Phone Number",
        _name: "phone_number",
        type: "text",
        requiredStatus: true,
        hasValidations:true,
        validationType:'contact-no',
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },

    {
        title: "Accepts responsibilities and performs duties above and beyond what is normally expected",
        _name: "responsibility_accept_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 2,
        fieldsPerLine: 1
    },
    {
        title: "Is flexible, responds and adapts well to internal & external changes.",
        _name: "flexibility_adapt_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 2,
        fieldsPerLine: 1
    },
    {
        title: "Determines broad knowledge and competence in a work related topics",
        _name: "broad_knowledge_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 2,
        fieldsPerLine: 1
    },
    {
        title: "Uses knowledge and expertise to solve problems quickly",
        _name: "problem_solving_skill_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 2,
        fieldsPerLine: 1
    },
    {
        title: "Handles a large workload effectively and in a timely manner",
        _name: "workload_time_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 2,
        fieldsPerLine: 1
    },

    {
        title: "Brings in best practices from other Departments/ Institutes/ Universities for improvement of his/ her independent work.",
        _name: "best_practices_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 3,
        fieldsPerLine: 1
    },
    {
        title: "Has shows outstanding performance which has brought attention and distinction to the Department/ University",
        _name: "outstanding_performance_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 3,
        fieldsPerLine: 1
    },

    {
        title: "Is a good team player and encourages teamwork",
        _name: "teamwork_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 4,
        fieldsPerLine: 1
    },
    {
        title: "Manages crises well as well as helps others to get through their crisis",
        _name: "crisis_management_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 4,
        fieldsPerLine: 1
    },
    {
        title: "Interacts with others in a positive, enthusiastic and cheerful manner",
        _name: "interaction_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 4,
        fieldsPerLine: 1
    },
    {
        title: "Assists others with both personal and professional challenges that impact work",
        _name: "assists_challanges_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 4,
        fieldsPerLine: 1
    },
    {
        title: "Commands respect of co-workers, supervisor, students and clients alike",
        _name: "command_respetc_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 4,
        fieldsPerLine: 1
    },

    {
        title: "Suggests and/or develops new work methods which increases productivity and saves time and money",
        _name: "productivity_inc_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 5,
        fieldsPerLine: 1
    },
    {
        title: "Recognizes work of others to increase effectiveness and identifies / addresses work problems. If any.",
        _name: "effectiveness_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 5,
        fieldsPerLine: 1
    },

    {
        title: "Takes the initiative to improve individual skills and knowledge.",
        _name: "improve_skills_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 6,
        fieldsPerLine: 1
    },
    {
        title: "Recognizes others special events and/or accomplishments, either publicly or privately.",
        _name: "recognizes_events_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 6,
        fieldsPerLine: 1
    },
    {
        title: "Helps new employees to settle & adapt to the work environment.",
        _name: "work_env_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 6,
        fieldsPerLine: 1
    },
    {
        title: "Acts as a mentor to others by providing advice, guidance, feedback and encouragement.",
        _name: "mentor_guidance_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 6,
        fieldsPerLine: 1
    },
    {
        title: "Shares knowledge and skills with others.",
        _name: "sharing_skills_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 6,
        fieldsPerLine: 1
    },

    {
        title: "Regularity & Punctuality at work",
        _name: "regularity_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Participation in social and community welfare activities",
        _name: "participation_welfare_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Professional Up-gradation",
        _name: "upgradation_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Promptness in work clearance",
        _name: "work_clearance_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Accuracy & Dependability",
        _name: "dependability_score",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5,"None of the above"],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Evidance / Proof ",
        _name: "proof_docs",
        type: "file",
        requiredStatus: true,
        hasOptions: false,
        page: 8,
        fieldsPerLine: 1
    },
    {
        title: "Kindly attach the profile photograph of the nominated applicant.",
        _name: "nominee_photograph",
        type: "file",
        requiredStatus: true,
        hasOptions: false,
        page: 8,
        fieldsPerLine: 1
    },

]

export default NonTeachingForm