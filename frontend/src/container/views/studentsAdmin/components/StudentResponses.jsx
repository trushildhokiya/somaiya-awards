import React, { useEffect, useState } from 'react'
import SideBar from './Sidebar'
import { useLocation } from 'react-router-dom'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import columns01 from '../../../../data/AnalysisData/STUDENTS ADMIN/structure';

const StudentResponses = () => {

  const [title, setTitle] = useState();
  const [columns, setColumns] = useState(columns01);
  const [rows, setRows] = useState([]);
  const location = useLocation()

  useEffect(() => {

    let path = location.pathname.split('/responses/')[1];

    let formName = path.replaceAll('-', " ");


    setTitle(formName);

  }, [location])

  
  return (
    <div className='flex'>
      <SideBar />

      <div className='flex overflow-y-scroll flex-col w-full h-screen'>

        <div className='p-5'>

          <div>
            <h2 className='text-xl font-Poppins font-semibold capitalize'>
              {title}
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

export default StudentResponses
