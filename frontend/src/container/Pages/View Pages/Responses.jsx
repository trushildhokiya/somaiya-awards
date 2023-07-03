import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import SideBar from '../../../components/SideBar';
import { motion } from 'framer-motion'
import sampleResponse01 from '../../../data/sample/sampleResponse1';


const Responses = () => {

  /**
   * Sample section
   */

  const [data, setData] = useState(sampleResponse01)
  const [title,setTitle] =useState()

  const location = useLocation()

  useEffect(()=>{
    
    let formTitle = location.pathname.split('/')[2]

    formTitle = formTitle.charAt(0).toUpperCase() + formTitle.slice(1)
    
    setTitle(formTitle)

  },[location])

 
  return (
    <div>

      <div className='flex flex-row'>
        <SideBar />

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col p-5 w-full overflow-x-scroll'>

          Responses
         
        </motion.div>
      </div>
    </div>
  )
}

export default Responses
