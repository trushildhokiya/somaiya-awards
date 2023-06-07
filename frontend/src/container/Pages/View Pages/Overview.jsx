import React from 'react'
import { motion } from 'framer-motion'
import SideBar from '../../../components/SideBar'

const Overview = () => {
    return (
        <div>

            <div className='flex flex-row'>
                <SideBar />
                <motion.div
                    initial={{x:'100%'}}
                    animate={{x:0}}
                    transition={{duration:0.2}}
                 className='flex flex-col w-full'>
                    <p>
                        Overview
                    </p>
                </motion.div>
            </div>

        </div>
    )
}

export default Overview
