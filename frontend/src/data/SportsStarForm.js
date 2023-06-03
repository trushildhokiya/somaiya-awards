const SportsStarForm = [
    {
        title: "Email",
        _name: "email_id",
        type: "email",
        requiredStatus: true,
        hasValidations: true,
        validationType: 'email-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Institute Name",
        _name: "institute_name",
        type: "dropdown",
        requiredStatus: true,
        hasOptions: true,
        options: [
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
        ],

        page: 1,
        fieldsPerLine: 2,
    },
    {
        title: "Nominee Name- Inspiring PE Teacher / Coach",
        _name: "nominee_inspiring_teacher",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 2,
        fieldsPerLine: 2
    },
    {
        title:"Nominee Photo- Inspiring PE Teacher / Coach",
        type:"file",
        requiredStatus : true,
        _name: "nominee_teacher_photo",
        hasOptions: false,
        page:2,
        fieldsPerLine:2
    },
    {
        title:"HOI assessment PE Teacher Nominee (Scan and Upload) ",
        type:"file",
        requiredStatus:true,
        _name:"nominee_pe_hoi_assessment",
        hasOptions: false,
        page:2,
        fieldsPerLine: 1,
        link:"https://drive.google.com/file/d/1zOruGCvBLb7ZBD4HrQBnucc8WobH27mH/view"
    },
    {
        title: "Nominee Name- Somaiya Sports Star (Girl)",
        _name: "nominee_sportsStar_girl",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 3,
        fieldsPerLine: 2
    },
    {
        title:"Nominee Main Sport/Event",
        _name:"nominee_ss_girl_sport",
        type:'text',
        requiredStatus:true,
        hasOptions:false,
        page:3,
        fieldsPerLine:2
    },
    {
        title:"Nominee Photo- Somaiya Sports Star",
        type:"file",
        requiredStatus : true,
        _name: "nominee_ss_girl_photo",
        hasOptions: false,
        page:3,
        fieldsPerLine:2
    },
    {
        title:"HOI Assessment (Scan and Upload) ",
        type:"file",
        requiredStatus:true,
        _name:"nominee_ss_girl_hoi_assessment",
        hasOptions: false,
        page:3,
        fieldsPerLine: 2,
        link:"https://drive.google.com/file/d/1LmTfidpQdCjVpcHZPDe18bhhkVrHBdJ4/view"
    },
    {
        title: "Nominee Name- Somaiya Sports Star (Boy)",
        _name: "nominee_sportsStar_boy",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 4,
        fieldsPerLine: 2
    },
    {
        title:"Nominee Main Sport/Event",
        _name:"nominee_ss_boy_sport",
        type:'text',
        requiredStatus:true,
        hasOptions:false,
        page:4,
        fieldsPerLine:2
    },
    {
        title:"Nominee Photo- Somaiya Sports Star",
        type:"file",
        requiredStatus : true,
        _name: "nominee_ss_boy_photo",
        hasOptions: false,
        page:4,
        fieldsPerLine:2
    },
    {
        title:"HOI Assessment (Scan and Upload) ",
        type:"file",
        requiredStatus:true,
        _name:"nominee_ss_boy_hoi_assessment",
        hasOptions: false,
        page:4,
        fieldsPerLine: 2,
        link:"https://drive.google.com/file/d/1LmTfidpQdCjVpcHZPDe18bhhkVrHBdJ4/view"
    }
]

export default SportsStarForm;