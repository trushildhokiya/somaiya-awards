import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Wave from 'react-wavify'
import Field from '../../components/utils/Field'
import axios from 'axios'

const Login = () => {

    const [credentials, setCredentials] = useState({})
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));

    };

    const handleClick = ()=>{

        navigate('/auth/forgot-password')
    }

    const handleSubmit = async () => {

        if (Object.keys(credentials).length === 2) {

            await axios.post('http://localhost:5001/auth/login', credentials)
                .then((res) => {
                    console.log(res);
                    if(res.data['authorized']){

                        localStorage.setItem('token',res.data['token'])
                        localStorage.setItem('user_id',res.data['user_id'])
                        setCredentials({})

                        navigate('/admin/dashboard')
                    }
                    else{
                        console.log("Failed to login");
                    }
                })
                .catch((err) => {
                    
                    console.log(err);
                    alert("Invalid email Id or password ")

                })
        }
        else {
            alert('Fill out the form man! ')
        }
    }

    return (
        <div className='h-screen'>
            <Navbar />

            <div className='flex items-center mt-[3rem]'>
                <div className='mx-auto shadow-xl w-[30%] p-5 rounded-md'>
                    <div className='text-center'>
                        <h2 className='font-Poppins text-2xl font-semibold text-red-700'>
                            Login
                        </h2>
                    </div>
                    <div className='p-5'>
                        <Field
                            className='w-full'
                            page='login'
                            placeholder="kjsit_hoi@somaiya.edu"
                            title="Email"
                            type='email'
                            name="user_email"
                            value={credentials['user_email'] || ''}
                            onChange={handleChange}
                        />
                        <Field
                            className="w-full"
                            page='login'
                            placeholder="password"
                            title="Password"
                            type='password'
                            name="user_password"
                            value={credentials['user_password'] || ''}
                            onChange={handleChange}
                        />
                        <p
                            onClick={handleClick}
                            className='mx-4 py-3 hover:cursor-pointer font-Poppins text-md text-blue-800 hover:animate-pulse'
                        >
                            Forgot password ?
                        </p>
                    </div>
                    <div className='flex justify-center p-5'>
                        <button
                            className='w-[70%] text-white rounded-lg bg-red-700 p-3 hover:bg-red-600'
                            onClick={handleSubmit}
                            type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <Wave
                fill="#b91c1c"
                paused={false}
                className='absolute bottom-0'
                options={{
                    height: 10,
                    amplitude: 50,
                    speed: 0.15,
                    points: 5
                }}
            />
        </div>
    )
}

export default Login
