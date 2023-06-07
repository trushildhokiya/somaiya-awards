import React, { useState } from 'react'
import SideBar from '../../../components/SideBar';
import { motion } from 'framer-motion'
import sampleResponse01 from '../../../data/sample/sampleResponse1';
import MaterialTable, { MTablePagination } from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import { Divider, Grid, TablePagination, Typography } from '@material-ui/core'

const Responses = () => {

  /**
   * Sample section
   */
  const defaultMaterialTheme = createTheme();

  const [data, setData] = useState(sampleResponse01)

  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Email ID', field: 'email_id' },
    { title: 'Nomination Category', field: 'nomination_category' },
    { title: 'Institution Name', field: 'institution_name' },
    { title: 'Established In', field: 'established_In' },
    { title: 'Head of Institution', field: 'head_of_institution' },
    { title: 'HOI Designation', field: 'hoi_designation' },
    { title: 'HOI Joining Date', field: 'hoi_joining_date' },
    { title: 'Somaiya Mail ID', field: 'somaiya_mail_id' },
    { title: 'Contact Number', field: 'contact_number' },
    { title: 'Q1', field: 'q_01' },
    { title: 'Q2', field: 'q_02' },
    { title: 'Q3', field: 'q_03' },
    { title: 'Q4', field: 'q_04' },
    { title: 'Q5', field: 'q_05' },
    { title: 'Q6', field: 'q_06' },
    { title: 'Q7', field: 'q_07' },
    { title: 'Q8', field: 'q_08' },
    { title: 'Q9', field: 'q_09' },
    { title: 'Q10', field: 'q_10' },
    { title: 'Q11', field: 'q_11' },
    { title: 'Q12', field: 'q_12' },
    { title: 'Q13', field: 'q_13' },
    { title: 'Q14', field: 'q_14' },
    { title: 'Q15', field: 'q_15' },
    { title: 'Q16', field: 'q_16' },
    { title: 'Q17', field: 'q_17' },
    { title: 'Institution Ratings', field: 'institution_ratings' },
    { title: 'Q18', field: 'q_18' },
    { title: 'Q19', field: 'q_19' },
    { title: 'Q20', field: 'q_20' },
    { title: 'Q21', field: 'q_21' },
    { title: 'Q22', field: 'q_22' },
    { title: 'Q23', field: 'q_23' },
    { title: 'Q24', field: 'q_24' },
    { title: 'Q25', field: 'q_25' },
    { title: 'Q26', field: 'q_26' },
    { title: 'Q27', field: 'q_27' },
    { title: 'Q28', field: 'q_28' },
    { title: 'Q29', field: 'q_29' },
    { title: 'Q30', field: 'q_30' },
    { title: 'Q31', field: 'q_31' },
    { title: 'Q32', field: 'q_32' },
    { title: 'Q33', field: 'q_33' },
    { title: 'Q34', field: 'q_34' },
    { title: 'Q35', field: 'q_35' },
    { title: 'Q36', field: 'q_36' },
    { title: 'Q37', field: 'q_37' },
    { title: 'Q38', field: 'q_38' },
    { title: 'Supportings', field: 'supportings' },
    { title: 'Filled Date', field: 'createdAt' },
    { title: 'Last Modified', field: 'updatedAt' }
  ];


  return (
    <div>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div className='flex flex-row'>
        <SideBar />

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col p-5 w-full overflow-x-scroll'>

          <div className='p-5  h-[43rem] overflow-y-scroll'>
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                title={'Outstanding Institution Form Responses'}
                columns={columns}
                data={data}
                options={{
                  filtering: true,
                  exportButton: true,
                  columnsButton: true,
                  grouping: true,
                  search: true,
                }}

                components={{
                  Pagination: (props) => <div>
                    <Grid container style={{ backgroundColor: "rgb(185,28,28)", padding: "10px", color: 'white' }} >
                      <Grid sm={6} item >
                        <Typography variant='subtitle1'>
                          Count
                        </Typography>
                      </Grid>
                      <Grid sm={6} align="center" item>
                        <Typography variant='subtitle1'>
                          {props.count}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider />
                    <TablePagination {...props} /></div>
                }}
              />
            </ThemeProvider>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Responses
