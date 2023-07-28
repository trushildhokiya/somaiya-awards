import React, { useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import SideBar from '../components/Sidebar'

const ResearchResponses = () => {

    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState([])

    return (
        <div className='flex'>
            <SideBar />

            <div className='flex overflow-y-scroll flex-col w-full h-screen'>

                <div className='p-5'>

                    <div>
                        <h2 className='text-xl font-Poppins font-semibold capitalize'>
                            Research Form Responses
                        </h2>
                    </div>

                    <div className='my-5'>

                        <DataGrid
                            columns={columns}
                            rows={rows}
                            density='comfortable'
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
    )
}

export default ResearchResponses
