import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber';
import { Model } from '../../components/Scene';
import { OrbitControls, Environment } from '@react-three/drei';
import Navbar from '../../components/Navbar';

const Home = () => {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth/login')
  }

  return (
    <div className='w-full h-screen'>
      <Navbar />

      {/* SECTION BANNER  */}
      <div className='w-full flex bg-red-800 h-[650px]'>

        <div className=''>
          <Canvas camera={{ position: [0, 0, 7], near: 0.1, far: 100 }}>
            <OrbitControls />

            {/* Lights  */}
            <pointLight position={[0, 10, 0]} intensity={2.0} color="#ffffff" />
            <spotLight position={[0, 10, 5]} intensity={5.0} angle={Math.PI / 6} penumbra={0.1} color="#ff9900" />
            <directionalLight position={[-10, 5, -5]} intensity={1.5} color="#00ccff" />
            <ambientLight intensity={0.5} color="#ffffff" />

            {/* Environment Map  */}
            <Environment preset='studio' intensity={2} />

            <Model />
          </Canvas>
        </div>

        <div className='w-full text-center '>

          <div className='h-[100%] justify-center flex flex-col items-center'>

            <h2 className='text-white font-Roboto text-5xl'>
              SOMAIYA AWARDS
            </h2>

            <h3 className='text-white font-Roboto text-4xl mt-3'>
              {new Date().getFullYear()}
            </h3>

            <div
              onClick={handleClick}
              className='mt-10 bg-red-600 shadow-md p-5 rounded-full w-72 cursor-pointer'>

              <p className='font-Poppins text-2xl text-white '>
                Login
              </p>
            </div>

          </div>
        </div>

        <div className='h-[100%] bg-red-700 w-[150px]'>

        </div>
      </div>

      {/* SECTION FOOTER  */}

      <div className='flex w-full font-Poppins py-3 px-2 bg-gray-300'>

        <div className='p-3 w-[30%] ml-10'>

        <h2 className='font-semibold my-4 '> Quick Links</h2>
        <ul>
          <li className='t text-slate-800 shadow-sm '>Home</li>
          <li className='t text-slate-800 shadow-sm '>Login</li>
          <li className='t text-slate-800 shadow-sm '>Results</li>
          <li className='t text-slate-800 shadow-sm '>Guidelines</li>
        </ul>
        </div>

        <div className='w-[70%]'>
          <div className='w-full text-center flex flex-col items-center '>

          <img src='https://kjsit.somaiya.edu.in/assets/kjsieit/images/Logo/kjsieit-logo.svg' />
             <h2 className='mt-5'>
             Designed and Developed by
             </h2>
             <h2>
              K.J Somaiya Institute of Technology
             </h2>
          </div>
        </div>

      </div>
    </div >
  );
};

export default Home;
