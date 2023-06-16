import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import SideBar from '../../../components/hoi_components/SideBar'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';

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
];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];

const Analysis = () => {

    const [title, setTitle] = useState()

    const location = useLocation()

    useEffect(() => {

        let formTitle = (location.pathname.split('/analysis/')[1]);

        formTitle = formTitle.charAt(0).toUpperCase() + formTitle.slice(1)

        setTitle(formTitle)

    }, [location])

    return (
        <div>

            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <div className='flex'>
                <SideBar />

                <div className='flex flex-col w-full overflow-y-scroll h-screen'>

                    <div className='p-5'>

                        <div className='my-5'>
                            <h2 className='text-xl font-Poppins font-semibold'>
                                {title} Form Analysis
                            </h2>
                        </div>
                        <div className=''>

                            <DataGrid
                                columns={columns}
                                rows={rows}
                                slots={{
                                    toolbar: GridToolbar,
                                }}
                                slotProps={{
                                    toolbar: {
                                        showQuickFilter: true,
                                        quickFilterProps: { debounceMs: 500 },
                                    }
                                }}
                                sx={{
                                    boxShadow: 2,
                                    padding: 2
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Analysis
