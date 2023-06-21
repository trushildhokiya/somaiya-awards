import React, { useEffect, useState } from 'react'
import SideBar from '../../../components/ieac_components/SideBar'
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import IeacFormCards from '../../Pages/View Pages/IeacFormCards'
const Ieac = () => {

  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)


  const navigate = useNavigate()

  // useEffect(() => {

  //   if (!localStorage.getItem('token') || !localStorage.getItem('user_id')) {
  //     Swal.fire({
  //       title: "Failed to Login",
  //       text: "We failed to recognize you! Try relogging",
  //       imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
  //       // imageWidth:"150",
  //       imageHeight: '250',
  //       confirmButtonColor: "rgb(185,28,28)"
  //     })
  //     navigate('/auth/login')
  //   }
  //   else {

  //     axios.get('http://localhost:5001/auth/validate', {
  //       headers: {
  //         'x-access-token': localStorage.getItem('token'),
  //         'user_id': localStorage.getItem('user_id')
  //       }
  //     })
  //       .then((res) => {

  //         if (res.data['authorized'] && res.data['role'] === 'HOI') {

  //           setAuthorized(res.data['authorized'])
  //           setLoading(false)
  //         }
  //         else {

  //           Swal.fire({
  //             title: "Failed to Login",
  //             text: "We failed to recognize you! Try relogging",
  //             imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
  //             // imageWidth:"150",
  //             imageHeight: '250',
  //             confirmButtonColor: "rgb(185,28,28)"
  //           })
  //           navigate('/auth/login')
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         Swal.fire({
  //           title: "Failed to Login",
  //           text: "We failed to recognize you! Try relogging",
  //           imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
  //           // imageWidth:"150",
  //           imageHeight: '250',
  //           confirmButtonColor: "rgb(185,28,28)"
  //         })
  //         navigate('/auth/login')
  //       })
  //   }
  // }, [])

  return (
    <div>
      
        
         
       
              <div className='flex'>
                <SideBar />
                <div className='flex flex-col w-full overflow-y-scroll bg-[url("https://www.transparenttextures.com/patterns/washi.png")]'>

                  <IeacFormCards />
                </div>
              </div>
            
          
           
      
    </div>
  )
}

export default Ieac;
