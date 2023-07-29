/**
 * MUI X DATAGRID STRUCTURE AND FUNCTIONALITY ADMIN
 * 
 * COLUMNS
 * 
 * -01 - column structure for outstanding institution form  
 * -02 - column structure for research  form 
 * -03 - column structure for students form 
 * -04 - column structure for teaching form 
 * -05 - column structure for non-teaching form 
 * -06 - column structure for feedback-01 form 
 * -07 - column structure for feedback-02 form 
 * -08 - column structure for feedback-02 form 
 * -09 - column structure for feedback-04 form 
 * 
 */

import { GridColDef } from '@mui/x-data-grid';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Link } from 'react-router-dom'

// outstanding Institution 

const columns01: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
    { field: 'institution_name', headerName: 'Institution Name', width: 200 },
    { field: 'established_In', headerName: 'Established In', width: 200 },
    { field: 'head_of_institution', headerName: 'Head of Institution', width: 200 },
    { field: 'hoi_designation', headerName: 'HOI Designation', width: 200 },
    { field: 'hoi_joining_date', headerName: 'HOI Joining Date', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
    { field: 'contact_number', headerName: 'Contact Number', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 200 },
    { field: 'q_02', headerName: 'Q02', width: 200 },
    { field: 'q_03', headerName: 'Q03', width: 200 },
    { field: 'q_04', headerName: 'Q04', width: 200 },
    { field: 'q_05', headerName: 'Q05', width: 200 },
    { field: 'q_06', headerName: 'Q06', width: 200 },
    { field: 'q_07', headerName: 'Q07', width: 200 },
    { field: 'q_08', headerName: 'Q08', width: 200 },
    { field: 'q_09', headerName: 'Q09', width: 200 },
    { field: 'q_10', headerName: 'Q10', width: 200 },
    { field: 'q_11', headerName: 'Q11', width: 200 },
    { field: 'q_12', headerName: 'Q12', width: 200 },
    { field: 'q_13', headerName: 'Q13', width: 200 },
    { field: 'q_14', headerName: 'Q14', width: 200 },
    { field: 'q_15', headerName: 'Q15', width: 200 },
    { field: 'q_16', headerName: 'Q16', width: 200 },
    { field: 'q_17', headerName: 'Q17', width: 200 },
    { field: 'institution_ratings', headerName: 'Institution Ratings', width: 200 },
    { field: 'q_18', headerName: 'Q18', width: 200 },
    { field: 'q_19', headerName: 'Q19', width: 200 },
    { field: 'q_20', headerName: 'Q20', width: 200 },
    { field: 'q_21', headerName: 'Q21', width: 200 },
    { field: 'q_22', headerName: 'Q22', width: 200 },
    { field: 'q_23', headerName: 'Q23', width: 200 },
    { field: 'q_24', headerName: 'Q24', width: 200 },
    { field: 'q_25', headerName: 'Q25', width: 200 },
    { field: 'q_26', headerName: 'Q26', width: 200 },
    { field: 'q_27', headerName: 'Q27', width: 200 },
    { field: 'q_28', headerName: 'Q28', width: 200 },
    { field: 'q_29', headerName: 'Q29', width: 200 },
    { field: 'q_30', headerName: 'Q30', width: 200 },
    { field: 'q_31', headerName: 'Q31', width: 200 },
    { field: 'q_32', headerName: 'Q32', width: 200 },
    { field: 'q_33', headerName: 'Q33', width: 200 },
    { field: 'q_34', headerName: 'Q34', width: 200 },
    { field: 'q_35', headerName: 'Q35', width: 200 },
    { field: 'q_36', headerName: 'Q36', width: 200 },
    { field: 'q_37', headerName: 'Q37', width: 200 },
    { field: 'q_38', headerName: 'Q38', width: 200 },
    {
        field: 'supportings', headerName: 'Supportings', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" target='_blank' download>Download</a>;
        }
    },

];


// Research 

const columns02: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'faculty_name', headerName: 'Faculty Name', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'institution', headerName: 'Institution', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'tenure', headerName: 'Tenure', width: 200 },
    { field: 'org_articles_count', headerName: 'Org Articles Count', width: 200 },
    { field: 'review_papers_count', headerName: 'Review Papers Count', width: 200 },
    { field: 'letters_count', headerName: 'Letters Count', width: 200 },
    { field: 'case_studies_count', headerName: 'Case Studies Count', width: 200 },
    { field: 'books_count', headerName: 'Books Count', width: 200 },
    { field: 'chapters_count', headerName: 'Chapters Count', width: 200 },
    { field: 'presentations_international_count', headerName: 'Presentations (International) Count', width: 200 },
    { field: 'presentation_national_count', headerName: 'Presentations (National) Count', width: 200 },
    { field: 'international_seminar_count', headerName: 'International Seminar Count', width: 200 },
    { field: 'national_seminar_count', headerName: 'National Seminar Count', width: 200 },
    { field: 'international_workshops_count', headerName: 'International Workshops Count', width: 200 },
    { field: 'national_workshops_count', headerName: 'National Workshops Count', width: 200 },
    { field: 'completed_minorp_count', headerName: 'Completed Minorp Count', width: 200 },
    { field: 'ongoing_minorp_count', headerName: 'Ongoing Minorp Count', width: 200 },
    { field: 'completed_majorp_count', headerName: 'Completed Majorp Count', width: 200 },
    { field: 'ongoing_majorp_count', headerName: 'Ongoing Majorp Count', width: 200 },
    { field: 'completed_consultancy_count', headerName: 'Completed Consultancy Count', width: 200 },
    { field: 'ongoing_consultancy_count', headerName: 'Ongoing Consultancy Count', width: 200 },
    { field: 'revenue_from_projects', headerName: 'Revenue from Projects', width: 200 },
    { field: 'granted_patents_count', headerName: 'Granted Patents Count', width: 200 },
    { field: 'filed_patents_count', headerName: 'Filed Patents Count', width: 200 },
    { field: 'granted_copyrights_count', headerName: 'Granted Copyrights Count', width: 200 },
    { field: 'filed_copyrights_count', headerName: 'Filed Copyrights Count', width: 200 },
    { field: 'granted_industrial_designs_count', headerName: 'Granted Industrial Designs Count', width: 200 },
    { field: 'filed_industrial_designs_count', headerName: 'Filed Industrial Designs Count', width: 200 },
    { field: 'international_awards_won_count', headerName: 'International Awards Won Count', width: 200 },
    { field: 'national_awards_won_count', headerName: 'National Awards Won Count', width: 200 },
    {
        field: 'evidence_of_research', headerName: 'Evidence of Research', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'evidence_of_data_provided', headerName: 'Evidence of Data Provided', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    { field: 'confirmation_of_trueData', headerName: 'Confirmation of True Data', width: 200 },
    {
        field: 'approved', headerName: 'Research Admin Approved', align: 'center', width: 200, type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
];

// Sports

const columns03: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email_id', headerName: 'Email', width: 200 },
    { field: 'student_name', headerName: 'Student Name', width: 200 },
    { field: 'students_class', headerName: 'Class', width: 150 },
    { field: 'course', headerName: 'Course', width: 200 },
    { field: 'institution_name', headerName: 'Institution', width: 200 },
    { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
    { field: 'recommendation_note', headerName: 'Recommendation Note', width: 300 },
    {
        field: 'approved', headerName: 'Approval Status', type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )

        },
    },
    {
        field: 'supportings', headerName: 'Supportings', width: 200, renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
];



// Teaching 

const columns04: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'faculty_name', headerName: 'Faculty Name', width: 200 },
    { field: 'awards_category', headerName: 'Awards Category', width: 200 },
    { field: 'institute_name', headerName: 'Institute Name', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'date_of_appointment', headerName: 'Date of Appointment', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
    { field: 'contact_number', headerName: 'Contact Number', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 100 },
    { field: 'q_02', headerName: 'Q02', width: 100 },
    { field: 'q_03', headerName: 'Q03', width: 100 },
    { field: 'q_04', headerName: 'Q04', width: 100 },
    { field: 'q_05', headerName: 'Q05', width: 100 },
    { field: 'q_06', headerName: 'Q06', width: 100 },
    { field: 'q_07', headerName: 'Q07', width: 100 },
    { field: 'q_08', headerName: 'Q08', width: 100 },
    { field: 'q_09', headerName: 'Q09', width: 100 },
    { field: 'q_10', headerName: 'Q10', width: 100 },
    { field: 'q_11', headerName: 'Q11', width: 100 },
    { field: 'q_12', headerName: 'Q12', width: 100 },
    { field: 'q_13', headerName: 'Q13', width: 100 },
    { field: 'q_14', headerName: 'Q14', width: 100 },
    { field: 'q_15', headerName: 'Q15', width: 100 },
    { field: 'q_16', headerName: 'Q16', width: 100 },
    { field: 'q_17', headerName: 'Q17', width: 100 },
    { field: 'q_18', headerName: 'Q18', width: 100 },
    { field: 'q_19', headerName: 'Q19', width: 100 },
    { field: 'q_20', headerName: 'Q20', width: 100 },
    {
        field: 'data_evidence', headerName: 'Data Evidence', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'profile_photograph', headerName: 'Profile Photograph', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'ieacApproved', headerName: 'IEAC Approved', align: 'center', width: 200, type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
    { field: 'ieac_scoreA', headerName: 'IEAC Score A', width: 200 },
    { field: 'ieac_scoreB', headerName: 'IEAC Score B', width: 200 },
    { field: 'ieac_scoreC', headerName: 'IEAC Score C', width: 200 },
    {
        field: 'scorecard', headerName: 'ScoreCard', width: 200, renderCell: (params) => {

            return (
                <Link to={`/admin/teaching/scorecard/${params.id}`}>
                    <a className='p-2 cursor-pointer bg-red-700 font-Poppins text-sm text-white rounded-2xl shadow-md'>
                        Download ScoreCard
                    </a>
                </Link>
            )
        }
    },
    {
        field: 'ieacApprovedFile', headerName: 'IEAC Approved File', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
];

// Non Teaching

const columns05: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'staff_name', headerName: 'Staff Name', width: 200 },
    { field: 'award_category', headerName: 'Award Category', width: 200 },
    { field: 'institute_name', headerName: 'Institute Name', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'appointment_date', headerName: 'Appointment Date', width: 200 },
    { field: 'somaiya_email_id', headerName: 'Somaiya Email ID', width: 200 },
    { field: 'phone_number', headerName: 'Phone Number', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 100 },
    { field: 'q_02', headerName: 'Q02', width: 100 },
    { field: 'q_03', headerName: 'Q03', width: 100 },
    { field: 'q_04', headerName: 'Q04', width: 100 },
    { field: 'q_05', headerName: 'Q05', width: 100 },
    { field: 'q_06', headerName: 'Q06', width: 100 },
    { field: 'q_07', headerName: 'Q07', width: 100 },
    { field: 'q_08', headerName: 'Q08', width: 100 },
    { field: 'q_09', headerName: 'Q09', width: 100 },
    { field: 'q_10', headerName: 'Q10', width: 100 },
    { field: 'q_11', headerName: 'Q11', width: 100 },
    { field: 'q_12', headerName: 'Q12', width: 100 },
    { field: 'q_13', headerName: 'Q13', width: 100 },
    { field: 'q_14', headerName: 'Q14', width: 100 },
    { field: 'q_15', headerName: 'Q15', width: 100 },
    { field: 'q_16', headerName: 'Q16', width: 100 },
    { field: 'q_17', headerName: 'Q17', width: 100 },
    { field: 'q_18', headerName: 'Q18', width: 100 },
    { field: 'q_19', headerName: 'Q19', width: 100 },
    { field: 'q_20', headerName: 'Q20', width: 100 },
    { field: 'q_21', headerName: 'Q21', width: 100 },
    { field: 'q_22', headerName: 'Q22', width: 100 },
    { field: 'q_23', headerName: 'Q23', width: 100 },
    { field: 'q_24', headerName: 'Q24', width: 100 },
    {
        field: 'proof_docs', headerName: 'Proof Docs', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'nominee_photograph', headerName: 'Nominee Photograph', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'ieacApproved', headerName: 'IEAC Approved', align: 'center', width: 200, type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
    { field: 'ieac_scoreA', headerName: 'IEAC Score A', width: 200 },
    { field: 'ieac_scoreB', headerName: 'IEAC Score B', width: 200 },
    {
        field: 'scorecard', headerName: 'ScoreCard', width: 200, renderCell: (params) => {

            return (
                <Link to={`/admin/non-teaching/scorecard/${params.id}`}>
                    <a className='p-2 cursor-pointer bg-red-700 font-Poppins text-sm text-white rounded-2xl shadow-md'>
                        Download ScoreCard
                    </a>
                </Link>
            )
        }
    },

    {
        field: 'ieacApprovedFile', headerName: 'IEAC Approved File', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },

];


// Feedback -01

const columns06: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'student_batch_year', headerName: 'Student Batch Year', width: 200 },
    { field: 'student_class_and_division', headerName: 'Student Class and Division', width: 200 },
    { field: 'teacher_name', headerName: 'Teacher Name', width: 200 },
    { field: 'teacher_designation', headerName: 'Teacher Designation', width: 200 },
    { field: 'teaching_subject', headerName: 'Teaching Subject', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 200 },
    { field: 'q_02', headerName: 'Q02', width: 200 },
    { field: 'q_03', headerName: 'Q03', width: 200 },
    { field: 'q_04', headerName: 'Q04', width: 200 },
    { field: 'q_05', headerName: 'Q05', width: 200 },
    { field: 'q_06', headerName: 'Q06', width: 200 },
    { field: 'q_07', headerName: 'Q07', width: 200 },
    { field: 'q_08', headerName: 'Q08', width: 200 },
    { field: 'q_09', headerName: 'Q09', width: 200 },
    { field: 'q_10', headerName: 'Q10', width: 200 },
    { field: 'q_11', headerName: 'Q11', width: 200 },
    { field: 'nominating_reasons', headerName: 'Nominating Reasons', width: 200 },

];


// Feedback -02

const columns07: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'rater_name', headerName: 'Rater Name', width: 200 },
    { field: 'institute_name', headerName: 'Institute Name', width: 200 },
    { field: 'department_name', headerName: 'Department Name', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
    { field: 'contact_number', headerName: 'Contact Number', width: 200 },
    { field: 'teacher_name', headerName: 'Teacher Name', width: 200 },
    { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 200 },
    { field: 'q_02', headerName: 'Q02', width: 200 },
    { field: 'q_03', headerName: 'Q03', width: 200 },
    { field: 'q_04', headerName: 'Q04', width: 200 },
    { field: 'q_05', headerName: 'Q05', width: 200 },
    { field: 'q_06', headerName: 'Q06', width: 200 },
    { field: 'q_07', headerName: 'Q07', width: 200 },
    { field: 'q_08', headerName: 'Q08', width: 200 },
    { field: 'q_09', headerName: 'Q09', width: 200 },
    { field: 'nomination_reason', headerName: 'Nomination Reason', width: 200 },

];

// Feedback -03

const columns08: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'student_batch_year', headerName: 'Student Batch Year', width: 200 },
    { field: 'student_class_and_division', headerName: 'Student Class and Division', width: 200 },
    { field: 'employee_name', headerName: 'Employee Name', width: 200 },
    { field: 'employee_designation', headerName: 'Employee Designation', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 200 },
    { field: 'q_02', headerName: 'Q02', width: 200 },
    { field: 'q_03', headerName: 'Q03', width: 200 },
    { field: 'q_04', headerName: 'Q04', width: 200 },
    { field: 'q_05', headerName: 'Q05', width: 200 },
    { field: 'nomination_reason', headerName: 'Nomination Reason', width: 200 },

];

// Feedback -04

const columns09: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'rater_name', headerName: 'Rater Name', width: 200 },
    { field: 'institution_name', headerName: 'Institution Name', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
    { field: 'contact_no', headerName: 'Contact No', width: 200 },
    { field: 'nominee_name', headerName: 'Nominee Name', width: 200 },
    { field: 'category', headerName: 'Category', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 200 },
    { field: 'q_02', headerName: 'Q02', width: 200 },
    { field: 'q_03', headerName: 'Q03', width: 200 },
    { field: 'q_04', headerName: 'Q04', width: 200 },
    { field: 'q_05', headerName: 'Q05', width: 200 },
    { field: 'q_06', headerName: 'Q06', width: 200 },
    { field: 'q_07', headerName: 'Q07', width: 200 },
    { field: 'q_08', headerName: 'Q08', width: 200 },
    { field: 'nomination_reason', headerName: 'Nomination Reason', width: 200 },

];

/**SPORTS */

const columns10: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'email_id',
        headerName: 'HOI Email ID',
        width: 200,
    },
    {
        field: 'institute_name',
        headerName: 'Institute Name',
        width: 250,

    },
    {
        field: 'nominee_ss_girl',
        headerName: 'Nominee Name',
        width: 200,

    },
    {
        field: 'nominee_ss_girl_sport',
        headerName: 'Nominee`s Sport',
        width: 200,

    },
    {
        field: 'q_21',
        headerName: 'Outstanding Performance',
        width: 100,

    },
    {
        field: 'q_22',
        headerName: 'Encouragement of Effort',
        width: 100,

    },
    {
        field: 'q_23',
        headerName: 'Contribution to development of Sports culture in Somaiya campus',

        width: 100,

    },
    {
        field: 'q_24',
        headerName: 'Intensity of Competition',
        width: 100,

    },
    {
        field: 'final_score',
        headerName: 'Final Score (out of 5) ',
        width: 100,

    },
    {
        field: 'isApprovedSportsGirl', headerName: 'Recommended', width: 200, type: 'boolean', renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{color: 'rgb(185,28,28)'}} />
                )
        },
    },
    {
        field: 'nominee_ss_girl_photo',
        headerName: 'Nominee Photo',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
    {
        field: 'nominee_ss_girl_supportings',
        headerName: 'Nominee Supportings',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },

]

const columns11: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'email_id',
        headerName: 'HOI Email ID',
        width: 200,

    },
    {
        field: 'institute_name',
        headerName: 'Institute Name',
        width: 250,

    },
    {
        field: 'nominee_ss_boy',
        headerName: 'Nominee Name',
        width: 200,

    },
    {
        field: 'nominee_ss_boy_sport',
        headerName: 'Nominee`s Sport',
        width: 200,

    },
    {
        field: 'q_25',
        headerName: 'Outstanding Performance',
        width: 100,

    },
    {
        field: 'q_26',
        headerName: 'Encouragement of Effort',
        width: 100,

    },
    {
        field: 'q_27',
        headerName: 'Contribution to development of Sports culture in Somaiya campus',
        width: 100,

    },
    {
        field: 'q_28',
        headerName: 'Intensity of Competition',
        width: 100,

    },
    {
        field: 'final_score',
        headerName: 'Final Score (out of 5) ',
        width: 100,

    },
    {
        field: 'isApprovedSportsBoy', headerName: 'Recommended', width: 200, type: 'boolean', renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{color: 'rgb(185,28,28)'}} />
                )
        },
    },
    {
        field: 'nominee_ss_boy_photo',
        headerName: 'Nominee Photo',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
    {
        field: 'nominee_ss_boy_supportings',
        headerName: 'Nominee Supportings',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
]

const columns12: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'email_id',
        headerName: 'HOI Email ID',
        width: 200,

    },
    {
        field: 'institute_name',
        headerName: 'Institute Name',
        width: 250,

    },
    {
        field: 'nominee_inspiring_coach',
        headerName: 'Nominee Name',
        width: 250,

    },
    {
        field: 'nominee_coach_comments',
        headerName: 'HOI Comments',
        width: 300,

    },
    {
        field: 'q_01',
        headerName: 'Q_01',
        width: 100,

    },
    {
        field: 'q_02',
        headerName: 'Q_02',
        width: 100,

    },
    {
        field: 'q_03',
        headerName: 'Q_03',
        width: 100,

    },
    {
        field: 'q_04',
        headerName: 'Q_04',
        width: 100,

    },
    {
        field: 'q_05',
        headerName: 'Q_05',
        width: 100,

    },
    {
        field: 'q_06',
        headerName: 'Q_06',
        width: 100,

    },
    {
        field: 'q_07',
        headerName: 'Q_07',
        width: 100,

    },
    {
        field: 'q_08',
        headerName: 'Q_08',
        width: 100,

    },
    {
        field: 'q_09',
        headerName: 'Q_09',
        width: 100,

    },
    {
        field: 'q_10',
        headerName: 'Q_10',
        width: 100,

    },
    {
        field: 'q_11',
        headerName: 'Q_11',
        width: 100,

    },
    {
        field: 'q_12',
        headerName: 'Q_12',
        width: 100,

    },
    {
        field: 'q_13',
        headerName: 'Q_13',
        width: 100,

    },
    {
        field: 'q_14',
        headerName: 'Q_14',
        width: 100,

    },
    {
        field: 'q_15',
        headerName: 'Q_15',
        width: 100,

    },
    {
        field: 'q_16',
        headerName: 'Q_16',
        width: 100,

    },
    {
        field: 'q_17',
        headerName: 'Q_17',
        width: 100,

    },
    {
        field: 'q_18',
        headerName: 'Q_18',
        width: 100,

    },
    {
        field: 'q_19',
        headerName: 'Q_19',
        width: 100,

    },
    {
        field: 'q_20',
        headerName: 'Q_20',

        width: 100,

    },
    {
        field: 'final_score',
        headerName: 'Final Score Percentage',
        width: 100,

    },
    {
        field: 'isApprovedCoach', headerName: 'Recommended', width: 200, type: 'boolean', renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{color: 'rgb(185,28,28)'}} />
                )
        },
    },
    {
        field: 'nominee_coach_photo',
        headerName: 'Nominee Photo',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
    {
        field: 'nominee_coach_supportings',
        headerName: 'Nominee Supportings',
        width: 300,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },

]

export {
    columns01,
    columns02,
    columns03,
    columns04,
    columns05,
    columns06,
    columns07,
    columns08,
    columns09,
    columns10,
    columns11,
    columns12
}