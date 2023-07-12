import React, { useEffect, useState } from 'react'
import SideBar from '../ieacComponents/Sidebar'
import { useLocation } from 'react-router-dom'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns01, columns02, columns03, columns04, columns05 } from '../../../../data/AnalysisData/IEAC/structure';
import axios from 'axios';
import Swal from 'sweetalert2';

const Review = () => {

    const [title, setTitle] = useState('');
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const location = useLocation();

    useEffect(() => {

        let pathLabel = location.pathname.split('/review/')[1];
        setTitle(pathLabel);

        switch (pathLabel) {
            case 'outstanding-institution':
                setColumns(columns01)
                break;

            case 'research':
                setColumns(columns02)
                break;

            case 'sports':
                setColumns(columns03)
                break;

            case 'teaching':
                setColumns(columns04)
                break;

            case 'non-teaching':
                setColumns(columns05)
                break;
        }

        const url = `http://localhost:5001/hoi/data/${pathLabel}`;

        axios.get(url, {
            headers: {
                'user_id': localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then((res) => {
                if (res.data) {
                    setRows(res.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }, [location])


    const handleFileChange = (event) => {
        const data = {
            approvalFile: event.target.files[0]
        }

        const path = window.location.href.split('/review/')[1];

        //axios file upload 
        Swal.fire({
            title: 'Confirmation',
            icon: 'question',
            text: `Selected File: ${data.approvalFile.name}`,
            showDenyButton: true,
            confirmButtonText: 'Upload File'
        })
            .then((res) => {
                if (res.isConfirmed == true) {
                    axios.post(`http://localhost:5001/ieac/data/${path}`, data, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'user_id': localStorage.getItem('user_id'),
                            'x-access-token': localStorage.getItem('token'),
                        }
                    }).
                        then((res) => {
                            Swal.fire({
                                icon: 'success',
                                title: 'File Uploaded Successfully'
                            })
                                .then((res) => {
                                    window.location.reload();
                                })
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            })
    }

    return (
        <div>
            <div className='flex h-screen'>
                <SideBar />

                <div className='flex p-5 flex-col w-full font-Poppins overflow-y-scroll'>
                    <h2 className='text-xl font-semibold'>
                        {title.toUpperCase()} Form Responses
                    </h2>
                    <div className='mt-[3rem] p-2'>

                        <DataGrid
                            rows={rows}
                            columns={columns}
                            density='comfortable'
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                    quickFilterProps: { debounceMs: 500 },
                                },
                            }}
                            sx={{
                                boxShadow: 2,
                                padding: 2
                            }}
                        />

                    </div>
                    {
                        rows[0]
                            ?
                            rows[0].ieacApprovedFile != null
                                ?
                                null
                                :
                                <div>
                                    <input type='file' name='approvalFile' onChange={handleFileChange}></input>
                                </div>
                            :
                            <div>
                                <input type='file' name='approvalFile' onChange={handleFileChange}></input>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Review
