import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from '../../../components/SideBar';
import { motion } from 'framer-motion'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns01, columns02, columns03, columns04, columns05, columns06, columns07, columns08, columns09 } from '../../../data/AnalysisData/ADMIN/structure';
import axios from 'axios';


const Responses = () => {

  /**
   * Sample section
   */

  // const [rows, setRows] = useState()
  const [title, setTitle] = useState()
  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])

  const location = useLocation()

  useEffect(() => {
    let path = location.pathname.split('/responses/')[1];

    switch (path) {
      case 'outstanding-institution':
        setTitle('Outstanding Institution')
        setColumns(columns01);
        break;

      case 'research':
        setTitle('Research')
        setColumns(columns02);
        break;

      case 'sports':
        setTitle('Sports')
        setColumns(columns03);
        break;

      case 'teaching':
        setTitle('Teaching')
        setColumns(columns04);
        break;

      case 'non-teaching':
        setTitle('Non Teaching')
        setColumns(columns05);
        break;

      case 'feedback-01':
        setTitle('Teaching Students Feedback')
        setColumns(columns06);
        break;

      case 'feedback-02':
        setTitle('Teaching Peers Feedback')
        setColumns(columns07);
        break;

      case 'feedback-03':
        setTitle('Non Teaching Students Feedback')
        setColumns(columns08);
        break;

      case 'feedback-04':
        setTitle('Non Teaching Peers Feedback')
        setColumns(columns09);
        break;

    }

    axios.get(`http://localhost:5001/admin/data/forms/${path}`,{
      headers:{
        'user_id': localStorage.getItem('user_id'),
        'x-access-token': localStorage.getItem('token'),
      }
    })
    .then((res)=>{
      console.log(res);
      setRows(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })


  }, [location]);



  return (
    <div>

      <div className='flex flex-row'>
        <SideBar />

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col p-5 w-full overflow-x-scroll'>

          <div className='flex flex-col w-full p-5'>

            <h2 className='text-xl font-Poppins font-semibold'>
              {title}
            </h2>

            <div className='my-5'>

              <DataGrid
                rows={rows}
                columns={columns}
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

        </motion.div>
      </div>
    </div>
  )
}

export default Responses
