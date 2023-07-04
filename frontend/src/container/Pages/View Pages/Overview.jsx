import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../../components/SideBar'
import Piechart from '../../../components/status components/Piechart'
import Datagrid from '../../../components/status components/Datagrid'
import LineGraph from '../../../components/status components/LineGraph'
import Box from '../../../components/status components/Box'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


const Overview = () => {

    const navigate = useNavigate()

    const handleLogout = () => {

        // remove token from local storage

        localStorage.removeItem('token')
        localStorage.removeItem('user_id')

        // navigate to login page
        navigate('/auth/login')
    }


    return (
        <div>

            <div className='flex flex-row'>
                <SideBar />
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                    className='flex flex-col w-full'>
                    Overview
                </motion.div>
            </div>

        </div>
    )
}

export default Overview
