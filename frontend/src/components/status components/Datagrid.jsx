import React from 'react'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid'


const Datagrid = () => {

    const rows: GridRowsProp = [
        {
            id: 1,
            email: "user1@gmail.com",
            efficiency: 4,
            communication: 2,
            research: 5,
            inspiring: 3,
        },
        {
            id: 2,
            email: "user2@gmail.com",
            efficiency: 3,
            communication: 4,
            research: 2,
            inspiring: 5,
        },
        {
            id: 3,
            email: "user3@gmail.com",
            efficiency: 5,
            communication: 1,
            research: 4,
            inspiring: 2,
        },
        {
            id: 4,
            email: "user4@gmail.com",
            efficiency: 2,
            communication: 5,
            research: 3,
            inspiring: 4,
        },
    ];

    const columns: GridColDef[] = [
        { field: 'email', headerName: 'Email Id', width: 150 },
        { field: 'efficiency', headerName: 'Efficiency', width: 150 },
        { field: 'communication', headerName: 'Communication', width: 150 },
        { field: 'research', headerName: 'Research', width: 150 },
        { field: 'inspiring', headerName: 'Inspirational', width: 150 },
    ];

    return (
        <div className='w-[97%] p-2 flex justify-center items-center'>
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
    )
}

export default Datagrid
