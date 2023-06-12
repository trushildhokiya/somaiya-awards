import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../../components/SideBar'
import Box from '../../../components/status components/Box'
import LineGraph from '../../../components/status components/LineGraph'
import Datagrid from '../../../components/status components/Datagrid'
import Piechart from '../../../components/status components/Piechart'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import Swal from 'sweetalert2'

const Admin = () => {

    const [authorized, setAuthorized] = useState(false)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        if(!localStorage.getItem('token') || !localStorage.getItem('user_id')){
            Swal.fire({
                title:"Failed to Login",
                text:"We failed to recognize you! Try relogging",
                imageUrl:'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
                // imageWidth:"150",
                imageHeight:'250',
                confirmButtonColor:"rgb(185,28,28)"
            })
            navigate('/auth/login')
            navigate('/auth/login')
        }

        axios.get('http://localhost:5001/auth/validate', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'user_id': localStorage.getItem('user_id')
            }
        })
            .then((res) => {

                if (res.data['authorized'] && res.data['role'] === 'admin') {

                    setAuthorized(res.data['authorized'])
                    setLoading(false)
                }
                else {
                    Swal.fire({
                        title:"Failed to Login",
                        text:"We failed to recognize you! Try relogging",
                        imageUrl:'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
                        // imageWidth:"150",
                        imageHeight:'250',
                        confirmButtonColor:"rgb(185,28,28)"
                    })
                    navigate('/auth/login')
                }
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    title:"Failed to Login",
                    text:"We failed to recognize you! Try relogging",
                    imageUrl:'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
                    // imageWidth:"150",
                    imageHeight:'250',
                    confirmButtonColor:"rgb(185,28,28)"
                })
                navigate('/auth/login')
                navigate('/auth/login')
            })

    }, [])

    /**
     * Logout Feature
     */

    const handleLogout = () => {

        // remove token from local storage

        localStorage.removeItem('token')
        localStorage.removeItem('user_id')

        Swal.fire({
            title: 'Successfully Logged Out',
            icon:'success',
            confirmButtonColor:'rgb(185,28,28)'
        })
        // navigate to login page
        navigate('/auth/login')
    }


    return (
        <div className=''>

            {
                loading
                    ?
                    <>
                        <div className='w-full h-screen flex justify-center items-center'>
                            <MoonLoader
                            loading={loading}
                            size={50}
                            color="rgb(185,28,28"
                            />
                        </div>
                    </>
                    :
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
