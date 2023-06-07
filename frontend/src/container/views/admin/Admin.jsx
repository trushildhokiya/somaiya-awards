import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import SideBar from '../../../components/SideBar'
import Box from '../../../components/status components/Box'
import LineGraph from '../../../components/status components/LineGraph'
import Datagrid from '../../../components/status components/Datagrid'
import Piechart from '../../../components/status components/Piechart'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import axios from 'axios'
const Admin = () => {

    const [authorized, setAuthorized] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:5001/auth/validate', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'user_id': localStorage.getItem('user_id')
            }
        })
            .then((res) => {

                if (res.data['authorized']) {

                    setAuthorized(res.data['authorized'])
                }
                else {
                    alert('Failed to login')
                }
            })
            .catch((err) => {
                console.log(err);

            })

    }, [])

    /**
     * Logout Feature
     */

    const handleLogout = ()=>{

        // remove token from local storage

        localStorage.removeItem('token')
        localStorage.removeItem('user_id')

        // navigate to login page
        navigate('/auth/login')
    }


    return (
        <div className=''>

            {
                authorized
                    ?
                    <>
                        {/* sidebar  */}
                        <div className='flex h-screen text-white font-Poppins'>
                            <SideBar />
                            <div className='flex p-3  flex-col w-full overflow-y-scroll'>
                                <div className='p-2 flex flex-row items-center justify-between'>
                                    <div className='w-[70%]'>
                                        <div className='text-black font-Roboto text-2xl '>
                                            DashBoard
                                        </div>
                                        <div className='text-black  '>
                                            Welcome to your Dashboard
                                        </div>
                                    </div>
                                    <div className='text-black'>
                                        <div
                                            onClick={handleLogout}
                                         className='flex flex-col cursor-pointer text-center justify-center'>
                                            <div>
                                                <LogoutRoundedIcon />
                                            </div>
                                            Logout
                                        </div>
                                    </div>
                                </div>

                                {/* flex div containing boxes and graph  */}
                                <div className='flex flex-row p-2 text-black justify-between'>

                                    {/* count section  */}
                                    <div className='flex flex-row w-[30%]'>
                                        <div>
                                            <Box title="Research Forms" count={10} />
                                            <Box title="Sports Forms" count={150} />
                                        </div>
                                        <div>
                                            <Box title="Institution Forms" count={72} />
                                            <Box title="Total Forms Filled" count={771} />
                                        </div>
                                    </div>

                                    {/* graph section  */}
                                    <div className='w-[70%]'>
                                        <LineGraph />
                                    </div>
                                </div>

                                {/* flex row containing table and piechart  */}
                                <div className='flex flex-row text-black p-5 h-full'>
                                    <div className='w-[70%] bg-[#FFFAFA] rounded-lg p-4'>
                                        <Datagrid />
                                    </div>
                                    <div className='w-[30%]'>
                                        <Piechart />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </>
                    :
                    null
            }

        </div>
    )
}

export default Admin
