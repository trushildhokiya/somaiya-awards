import React, { useEffect, useState } from 'react'
import SideBar from '../ieacComponents/Sidebar'
import { useLocation } from 'react-router-dom'
import { DataGrid, GridRowsProp, GridColDef , GridToolbar} from '@mui/x-data-grid';

const Review = () => {

    const [title, setTitle] = useState('');

    const location = useLocation();

    useEffect(() => {

        let pathLabel = location.pathname.split('/review/')[1];
        setTitle(pathLabel);

    }, [location])

    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ];


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
