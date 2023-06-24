import React, { useState, useEffect } from 'react'
import SideBar from './ieacComponents/Sidebar'
import { MoonLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Ieac = () => {

  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  /**
   * Logout
   */

  const handleLogout = () => {

    // remove token from local storage

    localStorage.removeItem('token')
    localStorage.removeItem('user_id')

    Swal.fire({
      title: 'Successfully Logged Out',
      icon: 'success',
      confirmButtonColor: 'rgb(185,28,28)'
    })

    // navigate to login page
    navigate('/auth/login')
  }


  /**
   * Authorization 
   */

  useEffect(() => {

    if (!localStorage.getItem('token') || !localStorage.getItem('user_id')) {
      Swal.fire({
        title: "Failed to Login",
        text: "We failed to recognize you! Try relogging",
        imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
        // imageWidth:"150",
        imageHeight: '250',
        confirmButtonColor: "rgb(185,28,28)"
      })
      navigate('/auth/login')
    }
    else {

      axios.get('http://localhost:5001/auth/validate', {
        headers: {
          'x-access-token': localStorage.getItem('token'),
          'user_id': localStorage.getItem('user_id')
        }
      })
        .then((res) => {

          if (res.data['authorized'] && res.data['role'] === 'IEAC') {

            setAuthorized(res.data['authorized'])
            setLoading(false)
          }
          else {

            Swal.fire({
              title: "Failed to Login",
              text: "We failed to recognize you! Try relogging",
              imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
              // imageWidth:"150",
              imageHeight: '250',
              confirmButtonColor: "rgb(185,28,28)"
            })
            navigate('/auth/login')
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "Failed to Login",
            text: "We failed to recognize you! Try relogging",
            imageUrl: 'https://media.istockphoto.com/id/648691968/vector/website-error-403-forbidden.jpg?s=612x612&w=0&k=20&c=sSc0Cb2as4BKgH0vFq2o5h1U2vUh4xnayaYkuyFPKh8=',
            // imageWidth:"150",
            imageHeight: '250',
            confirmButtonColor: "rgb(185,28,28)"
          })
          navigate('/auth/login')
        })
    }
  }, [])

  return (
    <div>
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
              <div className='flex'>
                <SideBar />
                <div className='flex flex-col p-5 font-Poppins w-full'>

                  <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-col'>
                      <div className='text-xl font-semibold'>
                        Welcome IEAC Member
                      </div>
                      <div className='text-sm'>
                        {localStorage.getItem('institution')}
                      </div>
                    </div>

                    <div
                      onClick={handleLogout}
                      className='p-5 mr-[2rem] hover:cursor-pointer flex flex-col items-center'>
                      <div>
                        <LogoutRoundedIcon />
                      </div>
                      <div>
                        Logout
                      </div>
                    </div>
                  </div>

                  <div className='mt-[2rem]'>
                    <h2 className='text-lg font-semibold'>
                      Instructions
                    </h2>
                    <div className='p-2 ml-[2rem] mt-3'>
                      <ul className=''>
                        <ul>
                          <li class="my-4">Step 1: Preheat the oven to 350°F.</li>
                          <li class="my-4">Step 2: Grease a baking dish with butter.</li>
                          <li class="my-4">Step 3: In a mixing bowl, combine flour, sugar, and salt.</li>
                          <li class="my-4">Step 4: Add eggs, milk, and vanilla extract to the bowl. Mix well.</li>
                          <li class="my-4">Step 5: Pour the batter into the greased baking dish.</li>
                          <li class="my-4">Step 6: Bake for 30 minutes or until golden brown.</li>
                          <li class="my-4">Step 7: Remove from the oven and let it cool for a few minutes.</li>
                          <li class="my-4">Step 8: Dust with powdered sugar for decoration.</li>
                          <li class="my-4">Step 9: Cut into slices and serve.</li>
                          <li class="my-4">Step 10: Enjoy your delicious homemade cake!</li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
            :
            navigate('/auth/login')
      }
    </div>
  )
}

export default Ieac
