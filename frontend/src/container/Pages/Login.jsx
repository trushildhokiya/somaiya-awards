import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Wave from 'react-wavify'


const Login = () => {

    const [credentials, setCredentials] = useState({});

    const RenderField = (props) => {

        return (
            <div className='m-5  font-Poppins'>
                <div>
                <label className='block my-1'>
                    {props.title}
                </label>
                </div>
                <div>
                <input
                    className='w-64 transition-all duration-500 p-2 outline-none border-b-2 focus:border-red-700 border-gray-400 focus:w-full'
                    type={props.type}
                    placeholder={props.placeholder}
                    required
                />
                </div>
            </div>
        )
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
                    <div className='py-5'>
                        <RenderField
                         title="Email"
                         type="text"
                         placeholder="kjsit_hoi@somaiya.edu"
                        />
                        <RenderField
                            title="password"
                            type="password"
                            placeholder="password"
                        />
                        <p className='mx-5 py-3 font-Poppins text-sm'>
                            <a href="#" className=' text-blue-800'>
                                Forgot password ?
                            </a>
                        </p>
                    </div>
                    <div className='flex justify-center p-5'>
                        <button
                        className='w-[70%] text-white rounded-lg bg-red-700 p-3 hover:bg-red-600'
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
