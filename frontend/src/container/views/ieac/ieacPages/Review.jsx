import React, { useEffect, useState } from 'react'
import SideBar from '../ieacComponents/Sidebar'
import { useLocation } from 'react-router-dom'
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import { columns01,columns02, columns03 , columns04 , columns05 } from '../../../../data/AnalysisData/IEAC/structure';
import axios from 'axios';

const Review = () => {

    const [title, setTitle] = useState('');
    const [columns, setColumns] = useState([]);
    const [rows,setRows] = useState([]);
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

        axios.get(url,{
            headers:{
                'user_id':localStorage.getItem('user_id'),
                'x-access-token': localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res.data.data);
            if(res.data){
                setRows(res.data.data);
                console.log(rows);
            }
        })
        .catch((err)=>{
            console.log(err);
        });

    }, [location])


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
                            slots={{ toolbar: GridToolbar }}
                            slotProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                    quickFilterProps: { debounceMs: 500 },
                                },
                            }}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
