const OutstandingInstForm= [
    {
        title: "Email",
        _name: "email_id",
        type: "email",
        requiredStatus : true,
        hasValidations: true,
        validationType:"email-id",
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title:"Please mark your nomination category",
        type:"radio",
        requiredStatus : true,
        _name: "nomination_category",
        hasOptions: true,
        options: ["Outstanding School", "Outstanding College"],
        page:1,
        fieldsPerLine:2
    },
    {
        title: "Name of Institution",
        _name:"institution_name",
        type: 'text',
        hasOptions: false,
        requiredStatus : true,
        page:1,
        fieldsPerLine:2
    },
    {
        title: "Year of Establishment",
        _name:"established_In",
        type: 'text',
        hasOptions : false,
        requiredStatus : true,
        hasValidations:true,
        validationType:"year",
        page:1,
        fieldsPerLine:2
    },
    {
        title: "Name of HOI",
        _name:"hoi_name",
        type: 'text',
        hasOptions : false,
        requiredStatus : true,
        page:1,
        fieldsPerLine:2
    },
    {
        title: "Designation of HOI",
        _name:"hoi_designation",
        type: 'text',
        hasOptions : false,
        requiredStatus : true,
        page:1,
        fieldsPerLine:2
    },
    {
        title: "Date of Joining Of HOI",
        _name:"hoi_joining_date",
        type: 'date',
        hasOptions : false,
        requiredStatus : true,
        page:1,
        fieldsPerLine:2
    },
    {
        title: "Somaiya Email ID",
        _name:"somaiya_mail_id",
        type: 'email',
        hasOptions : false,
        hasValidations:true,
        validationType:'somaiya-mail-id',
        requiredStatus : true,
        page:1,
        fieldsPerLine:2
    },
    {
        title: "Contact Number",
        _name:"contact_number",
        type: 'text',
        hasOptions : false,
        requiredStatus : true,
        hasValidations : true,
        validationType: 'contact-no',
        page:1,
        fieldsPerLine:2
    },
    {
        title: "Submit a short paragraph/ summary of why you believe your Institution qualifies for the award. (500 – 700 words only)",
        _name:"q_01",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:1,
        fieldsPerLine:1
    },
    {
        title: "State the awards/certifications received from various national and international accrediting agencies such as AACSB, NAAC, NBA, Govt. Gradings, School boards and Govt. agencies. (500 words only)",
        _name:"q_02",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2,
        fieldsPerLine:1
    },
    {
        title: "Has the institution secured any position in the National Institutional Ranking Framework (NIRF) by the HRD Ministry, Govt. of India. If yes, please specify details and attach relevant documents at the end of the form.(500 words only)",
        _name:"q_03",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2,
        fieldsPerLine:1
    },
    {
        title: "Has the institution secured any ranking in Industry Journals & periodicals,/ mainline magazines, newspapers. If yes, please specify details and attach relevant documents at the end of the form. (500 words only)",
        _name:"q_04",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2,
        fieldsPerLine:1
    },
    {
        title: "Has the HOI or any of the faculty got nominated as Heads of Councils and Committees of outside agencies/ universities. If yes, please specify details and attach relevant documents at the end of the form. (500 words only)",
        _name:"q_05",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2,
        fieldsPerLine:1
    },
    {
        title: "Mention the number and list of toppers (students) at University levels or Board levels (250 words only)",
        _name:"q_06",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Comment on the admissions status (total available student intake and vacant seats) and increasing trends for each year of your institution (250 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_07",
        hasOptions: false,
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Specify about any grants received from outside agencies and Governmental bodies’ and about their utilization (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_08",
        hasOptions: false,
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Mention the college festivals and events (about any unique events which has benefitted to the campus/society) (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_09",
        hasOptions: false,
        page:2,
        fieldsPerLine:1
    },
    {
        title:"List the current and market oriented courses introduced this year. (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_10",
        hasOptions: false,
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Have you organized any national/ international level conferences/ seminar/ exhibition. Please attach a post-show report along with photographs at the end of this form (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_11",
        hasOptions: false,
        page:2,
        fieldsPerLine:1
    },
    {
        title:"List all the donations and scholarships received by your Institution (250 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_12",
        hasOptions: false,
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Have you added any new infrastructure or facilities this year (750 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_13",
        hasOptions: false,
        page:3,
        fieldsPerLine:1
    },
    {
        title:"What are the activities undertaken to maintain a hygienic environment within the building and external surroundings (750 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_14",
        hasOptions: false,
        page:3,
        fieldsPerLine:1
    },
    {
        title:"State measures taken to enhance the student experience in your institution (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_15",
        hasOptions: false,
        page:3,
        fieldsPerLine:1
    },
    {
        title:"State the frequency of Safety procedures and processes such as fire drills, women’s safety, etc. being conducted. (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_16",
        hasOptions: false,
        page:3,
        fieldsPerLine:1
    },
    {
        title:"State the Disaster Management system, Communication strategies with parents in case of emergencies, eg. floods, etc. (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_17",
        hasOptions: false,
        page:3,
        fieldsPerLine:1
    },
    {
        title:"Based on the responses given in section B, rate your institution on a scale of 1 to 5, where 1 is very poor and 5 is outstanding",
        type:"radio",
        requiredStatus : true,
        _name: "institution_ratings",
        hasOptions: true,
        options: [1,2,3,4,5],
        page:3,
        fieldsPerLine:1
    },
    {
        title:"List the received external awards at state, national or international competitions in the following areas ● Cultural activities- music, dance, drama, debates ● Sports activities and competitions ● NCC / NSS ● External exams such as NTSE / Olympiads etc (1000 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_18",
        hasOptions: false,
        page:4,
        fieldsPerLine:1
    },
    {
        title:"State the parental involvement and contribution for schools such as PTA etc (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_19",
        hasOptions: false,
        page:4,
        fieldsPerLine:1
    },
    {
        title:"List the Committees run by students and their significant achievements (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_20",
        hasOptions: false,
        page:4,
        fieldsPerLine:1
    },
    {
        title:"List and provide a brief synopsis of the research projects (completed and ongoing) (750 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_21",
        hasOptions: false,
        page:5,
        fieldsPerLine:1
    },
    {
        title:"State the faculty awards and recognitions from outside agencies (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_22",
        hasOptions: false,
        page:5,
        fieldsPerLine:1
    },
    {
        title:"Provide details of faculty articles published in journals, magazines, books in both national and international publications (attach photocopies at the end of the form) (1000 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_23",
        hasOptions: false,
        page:5,
        fieldsPerLine:1
    },
    {
        title:"List and provide a short synopsis of the total number of faculty participation and presentation of papers in state, national, international,  conferences/seminars organized by other institutions/agencies (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_24",
        hasOptions: false,
        page:5,
        fieldsPerLine:1
    },
    {
        title:"State some significant improvements in Governance (processes & culture) (500 words only))",
        type:"textarea",
        requiredStatus : true,
        _name: "q_25",
        hasOptions: false,
        page:6,
        fieldsPerLine:1
    },
    {
        title:"What are the processes and methodology used to share the Founder’s vision and mission within your institution (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_26",
        hasOptions: false,
        page:6,
        fieldsPerLine:1
    },
    {
        title:"Describe the use of latest technology as teaching aids and teaching innovation methodology (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_27",
        hasOptions: false,
        page:6,
        fieldsPerLine:1
    },
    {
        title:"List the Faculty & Staff Development programmes conducted vis a vis those identified (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_28",
        hasOptions: false,
        page:6,
        fieldsPerLine:1
    },
    {
        title:"List the Workshops/ seminars/ conferences/ exhibitions conducted for employees and students if any (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_29",
        hasOptions: false,
        page:6,
        fieldsPerLine:1
    },
    {
        title:"Elaborate on the participation in faculty exchange programmes (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_30",
        hasOptions: false,
        page:7,
        fieldsPerLine:1
    },
    {
        title:"State any Consultancy projects undertaken for Corporates or Government (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_31",
        hasOptions: false,
        page:7,
        fieldsPerLine:1
    },
    {
        title:"List the activities undertaken by students and teachers and report the outcomes of each.(500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_32",
        hasOptions: false,
        page:8,
        fieldsPerLine:1
    },
    {
        title:"List the key alumni events, with details of attendance numbers for each (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_33",
        hasOptions: false,
        page:9,
        fieldsPerLine:1
    },
    {
        title:"Involvement of alumni for guest lectures, conferences , as special guests, chief guests (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_34",
        hasOptions: false,
        page:9,
        fieldsPerLine:1
    },
    {
        title:"What kind of support has been solicited / received from alumni eg donations and scholarships (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_35",
        hasOptions: false,
        page:9,
        fieldsPerLine:1
    },
    {
        title:"Number of placements done based on the student intake (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_36",
        hasOptions: false,
        page:10,
        fieldsPerLine:1
    },
    {
        title:"Provide details of activities undertaken and reports of outcomes (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "q_37",
        hasOptions: false,
        page:11,
        fieldsPerLine:1
    },
    {
        title:"What are the significant contributions made by your institution to the support functions eg HR, IT, Sports, Security, PR, AR etc",
        type:"textarea",
        requiredStatus : true,
        _name: "q_38",
        hasOptions: false,
        page:12,
        fieldsPerLine:1
    },
    
    {
        title:"Upload Supporting Documents",
        type:"file",
        requiredStatus : true,
        _name: "uploaded_files",
        hasOptions: false,
        page:13,
        fieldsPerLine:1
    },

    
]


export default OutstandingInstForm;