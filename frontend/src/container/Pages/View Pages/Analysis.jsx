import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import SideBar from '../../../components/hoi_components/SideBar'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { columns01 , columns02 , columns03 , columns04 , columns05 } from '../../../data/AnalysisData/HOI/structure';

const rows: GridRowsProp = [
    {
      id: 1,
      email_id: 'example1@gmail.com',
      nomination_category: 'Category 1',
      institution_name: 'Institution 1',
      established_In: '2020',
      head_of_institution: 'John Doe',
      hoi_designation: 'Director',
      hoi_joining_date: '2022-01-01',
      somaiya_mail_id: 'john.doe@somaiya.edu',
      contact_number: '1234567890',
      q_01: 'Answer 1',
      q_02: 'Answer 2',
      q_03: 'Answer 3',
      q_04: 'Answer 4',
      q_05: 'Answer 5',
      q_06: 'Answer 6',
      q_07: 'Answer 7',
      q_08: 'Answer 8',
      q_09: 'Answer 9',
      q_10: 'Answer 10',
      q_11: 'Answer 11',
      q_12: 'Answer 12',
      q_13: 'Answer 13',
      q_14: 'Answer 14',
      q_15: 'Answer 15',
      q_16: 'Answer 16',
      q_17: 'Answer 17',
      institution_ratings: '5',
      q_18: 'Answer 18',
      q_19: 'Answer 19',
      q_20: 'Answer 20',
      q_21: 'Answer 21',
      q_22: 'Answer 22',
      q_23: 'Answer 23',
      q_24: 'Answer 24',
      q_25: 'Answer 25',
      q_26: 'Answer 26',
      q_27: 'Answer 27',
      q_28: 'Answer 28',
      q_29: 'Answer 29',
      q_30: 'Answer 30',
      q_31: 'Answer 31',
      q_32: 'Answer 32',
      q_33: 'Answer 33',
      q_34: 'Answer 34',
      q_35: 'Answer 35',
      q_36: 'Answer 36',
      q_37: 'Answer 37',
      q_38: 'Answer 38',
      supportings: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      ieac_approved: true,
      hr_approved: false,
    },
    {
      id: 2,
      email_id: 'example2@gmail.com',
      nomination_category: 'Category 2',
      institution_name: 'Institution 2',
      established_In: '2010',
      head_of_institution: 'Jane Smith',
      hoi_designation: 'Principal',
      hoi_joining_date: '2018-05-15',
      somaiya_mail_id: 'jane.smith@somaiya.edu',
      contact_number: '9876543210',
      q_01: 'Answer A',
      q_02: 'Answer B',
      q_03: 'Answer C',
      q_04: 'Answer D',
      q_05: 'Answer E',
      q_06: 'Answer F',
      q_07: 'Answer G',
      q_08: 'Answer H',
      q_09: 'Answer I',
      q_10: 'Answer J',
      q_11: 'Answer K',
      q_12: 'Answer L',
      q_13: 'Answer M',
      q_14: 'Answer N',
      q_15: 'Answer O',
      q_16: 'Answer P',
      q_17: 'Answer Q',
      institution_ratings: '4',
      q_18: 'Answer R',
      q_19: 'Answer S',
      q_20: 'Answer T',
      q_21: 'Answer U',
      q_22: 'Answer V',
      q_23: 'Answer W',
      q_24: 'Answer X',
      q_25: 'Answer Y',
      q_26: 'Answer Z',
      q_27: 'Answer AA',
      q_28: 'Answer BB',
      q_29: 'Answer CC',
      q_30: 'Answer DD',
      q_31: 'Answer EE',
      q_32: 'Answer FF',
      q_33: 'Answer GG',
      q_34: 'Answer HH',
      q_35: 'Answer II',
      q_36: 'Answer JJ',
      q_37: 'Answer KK',
      q_38: 'Answer LL',
      supportings: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
      ieac_approved: false,
      hr_approved: true,
    },
  ];


const Analysis = () => {

    const [title, setTitle] = useState()
    const [columns, setColumns] = useState([]);
    const location = useLocation()

    useEffect(() => {

        let formTitle = (location.pathname.split('/analysis/')[1]);
        console.log(formTitle);
        switch (formTitle) {
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
                            {console.log(columns)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Analysis
