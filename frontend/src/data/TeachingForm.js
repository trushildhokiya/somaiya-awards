const TeachingForm = [
    {
        title: "Email",
        _name: "email_id",
        type: "email",
        requiredStatus : true,
        hasValidations:true,
        validationType:'email-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Name of Faculty",
        _name: "faculty_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Please select the Awards category",
        _name: "awards_category",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:[
            "Excellence in Teaching (more than 3 years of service)",
            "Promising Teacher of the year (1 to 3 years of service)",
        ],
        page: 1,
        fieldsPerLine:1
    },
    {
        title: "Name of the Institute",
        _name: "institute_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Department",
        _name: "department",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Designation",
        _name: "designation",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Date of Appointment",
        _name: "date_of_appointment",
        type: "date",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Somaiya Email ID",
        _name: "email_somaiya",
        type: "email",
        requiredStatus : true,
        hasValidations:true,
        validationType:'somaiya-mail-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Phone Number",
        _name: "contact_number",
        type: "text",
        requiredStatus : true,
        hasValidations:true,
        validationType:'contact-no',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title:"Possess a clear knowledge of the content of the subject/s he/she teaches",
        _name:"clear_knowledge_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Has received good feedback/scores in standard evaluations (students, peers, supervisors) and other acknowledgments by former students (letters, e-mails, cards, etc)",
        _name:"evaluation_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Capability to organize and prepare presentation/ instructional material and information before lectures",
        _name:"presentation_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Encourages activities to make students use other resources like libraries, internet etc.",
        _name:"encouragement_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Use new and innovative teaching aids and tools (experiments, charts, maps) and integrate Information and Communications Technology (ICT) in the classroom. Eg Google Classrooms, Flipped Classrooms, Group teaching",
        _name:"new_aid_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Has recently made a contribution to developing or enhancing curricula in his/her field",
        _name:"enhancing_curricula_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Documentation and organizational skills- Maintain documents and records in an organized manner E.g. attendance sheets, progress reports",
        _name:"organization_skills_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Is able to identity and device ways to address gaps in student learning",
        _name:"address_gaps_scores",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Cooperate and assist in carrying out functions relating to the educational responsibilities of his/her/their institute/ the University such as: assisting in appraising applications for admission, as well as assisting the conduct of examinations, including supervision, invigilation and evaluation",
        _name:"coop_assist_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Ability to communicate clearly and effectively on the subject matter",
        _name:"communicate_clear_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Is actively involved in research (group or individual projects)",
        _name:"active_research_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Has made a contribution in books, book chapters, lab manuals, journals, magazines",
        _name:"literature_conrib_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Is actively involved in student welfare activities, extension, consultancy and other co/extra curricular activities",
        _name:"extra_activities_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Is involved in any social service activities and/or engaged community development",
        _name:"community_development_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Attended/ organized presentations at seminars and conferences",
        _name:"attended_seminars_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Has acquired any additional qualifications (certificates/ diplomas) for his/her/their professional development",
        _name:"additional_qualification_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:4,
        fieldsPerLine:1
    },
    {
        title:"Has received any professional recognition, certificates, awards and honors from his/her institute or from any other organization(s)",
        _name:"recognition_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:4,
        fieldsPerLine:1
    },
    {
        title:"Has been a guide and mentor to students in their projects & research work, soft skills development and making career choices",
        _name:"guide_mentor_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:4,
        fieldsPerLine:1
    },
    {
        title:"Is punctual at work and dependable in delivering work assigned to him/her/they",
        _name:"punctuality_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:4,
        fieldsPerLine:1
    },
    {
        title:"Score the candidate on his/her/their general impression in terms of honesty, integrity, conduct and ability to get along with the superiors colleagues, students",
        _name:"honesty_score",
        type:"radio",
        requiredStatus:true,
        hasOptions:true,
        options:[1,2,3,4,5],
        page:4,
        fieldsPerLine:1
    },
    {
        title: "Major evidences for the data provided in this form",
        _name: "data_evidence",
        type: "file",
        requiredStatus : true,
        hasOptions: false,
        page: 5,
        fieldsPerLine:1
    },
    {
        title: "Kindly attach the profile photograph of the nominated applicant",
        _name: "profile_photograph",
        type: "file",
        requiredStatus : true,
        hasOptions: false,
        page: 5,
        fieldsPerLine:1
    },

]

export default TeachingForm;
