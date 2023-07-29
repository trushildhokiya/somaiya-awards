import { GridColDef } from "@mui/x-data-grid";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Swal from 'sweetalert2';
import axios from "axios";

/**
 * NOTE 
 * 
 * columns01 -> Sports Star Girl
 * columns02 -> Sports Star Boy
 * columns03 -> Inspiring Coach
 */

/**
 * Methods
 */

const handleBoyChange = (params, event) => {
    if (event.target.checked == true) {

        const approvedNomineeName = params.row['nominee_ss_boy'];

        const data = {
            type:'sports star boy',
            applicationID: params.row['id'],
        };


        Swal.fire({
            title: 'Confirmation',
            icon: 'question',
            text: `Do you to confirm your decision to approve ${approvedNomineeName} ?`,
            showDenyButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: 'Deny',
            confirmButtonColor: '#4bb543',

        })
            .then((res) => {
                if (res.isConfirmed == true) {
                    //axios put
                    axios.put(`http://localhost:5001/sports-admin/data/update`, data, {
                        headers: {
                            'user_id': localStorage.getItem('user_id'),
                            'x-access-token': localStorage.getItem('token'),
                        }
                    })
                        .then((res) => {
                            console.log(res);
                            window.location.reload();
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                else {
                    event.target.checked = false;
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

const handleGirlChange = (params, event) => {
    if (event.target.checked == true) {

        const approvedNomineeName = params.row['nominee_ss_girl'];

        const data = {
            type:'sports star girl',
            applicationID: params.row['id'],
        };


        Swal.fire({
            title: 'Confirmation',
            icon: 'question',
            text: `Do you to confirm your decision to approve ${approvedNomineeName} ?`,
            showDenyButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: 'Deny',
            confirmButtonColor: '#4bb543',

        })
            .then((res) => {
                if (res.isConfirmed == true) {
                    //axios put
                    axios.put(`http://localhost:5001/sports-admin/data/update`, data, {
                        headers: {
                            'user_id': localStorage.getItem('user_id'),
                            'x-access-token': localStorage.getItem('token'),
                        }
                    })
                        .then((res) => {
                            console.log(res);
                            window.location.reload();
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                else {
                    event.target.checked = false;
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
}


const handleCoachChange = (params, event) => {

    if (event.target.checked == true) {

        const approvedNomineeName = params.row['nominee_inspiring_coach'];

        const data = {
            type:'inspiring coach',
            applicationID: params.row['id'],
        };


        Swal.fire({
            title: 'Confirmation',
            icon: 'question',
            text: `Do you to confirm your decision to approve ${approvedNomineeName} ?`,
            showDenyButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: 'Deny',
            confirmButtonColor: '#4bb543',

        })
            .then((res) => {
                if (res.isConfirmed == true) {
                    //axios put
                    axios.put(`http://localhost:5001/sports-admin/data/update`, data, {
                        headers: {
                            'user_id': localStorage.getItem('user_id'),
                            'x-access-token': localStorage.getItem('token'),
                        }
                    })
                        .then((res) => {
                            console.log(res);
                            window.location.reload();
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
                else {
                    event.target.checked = false;
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

}

/**
 * Structures
 */

const columns01: GridColDef[] = [
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
                <input
                    type="checkbox"
                    onChange={(event) => handleGirlChange(params, event)}
                >

                </input>
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

const columns02: GridColDef[] = [
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
                <input
                    type="checkbox"
                    onChange={(event) => handleBoyChange(params, event)}
                >
                </input>
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

const columns03: GridColDef[] = [
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
                <input
                    type="checkbox"
                    onChange={(event) => handleCoachChange(params, event)}
                >

                </input>
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
}