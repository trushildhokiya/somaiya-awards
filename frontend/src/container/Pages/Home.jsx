import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Model } from '../../components/Scene';
import { OrbitControls, Environment } from '@react-three/drei';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Lottie from 'lottie-react';
import CertificateData from '../assests/certificate.json';
import TrophyData from '../assests/trophy.json';
import MoneyData from '../assests/money.json';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth/login');
  };

  return (
    <div className='w-full h-screen'>
      <Navbar />

      {/* SECTION BANNER */}
      <div className='w-full flex bg-red-800 h-[650px]'>
        <div className='w-[40%]'>
          <Canvas camera={{ position: [-1, 0, 4.5], near: 0.1, far: 100 }}>
            <OrbitControls />

            {/* Lights */}
            <pointLight position={[0, 10, 0]} intensity={2.0} color="#ffffff" />
            <spotLight position={[0, 10, 5]} intensity={5.0} angle={Math.PI / 6} penumbra={0.1} color="#ff9900" />
            <directionalLight position={[-10, 5, -5]} intensity={1.5} color="#00ccff" />
            <ambientLight intensity={0.5} color="#ffffff" />

            {/* Environment Map */}
            <Environment preset='sunset' intensity={2} />

            <Model />
          </Canvas>
        </div>

        <div className='w-full text-center'>
          <div className='h-[100%] justify-center flex flex-col items-center'>
            <h2 className='text-white font-Roboto text-5xl'>
              SOMAIYA AWARDS
            </h2>

            <h3 className='text-white font-Roboto text-4xl mt-3'>
              {new Date().getFullYear()}
            </h3>

            <div
              onClick={handleClick}
              className='mt-10 bg-red-600 shadow-md p-5 rounded-full w-72 cursor-pointer hover:bg-red-500'>
              <p className='font-Poppins text-2xl text-white '>
                Login
              </p>
            </div>
          </div>
        </div>

        <div className='h-[100%] bg-red-700 w-[150px]'>
        </div>
      </div>

      {/* SECTION OVERVIEW */}
      <div className='p-8'>
        <h2 className='text-red-800 font-Roboto text-2xl font-semibold'>
          Overview
          <hr className='w-[4%] border-slate-300 border-2' />
        </h2>
        <p className='my-3 text-md font-Poppins text-slate-950'>
          The Somaiya Vidyavihar Awards have been instituted to recognize and honor the outstanding
          contributions and commitment of its Faculty and Staff towards the achievement of the Mission
          and Vision of the Institute.
        </p>
      </div>

      {/* SECTION Awards Prizes */}
      <div className='p-8'>
        <h2 className='text-red-800 font-Roboto text-2xl font-semibold'>
          Awards Prizes
          <hr className='w-[4%] border-slate-300 border-2' />
        </h2>

        <div className='flex my-7 justify-evenly p-6'>
          <div style={{ width: '200px', height: '200px' }}>
            <Lottie animationData={CertificateData} />
            <p className='text-center font-Poppins text-sm text-red-800'>
              Certificate of Participation
            </p>
          </div>
          <div style={{ width: '200px', height: '200px' }}>
            <Lottie animationData={TrophyData} />
            <p className='text-center font-Poppins text-sm text-red-800'>
              Souvenir trophy
            </p>
          </div>
          <div style={{ width: '200px', height: '200px' }}>
            <Lottie animationData={MoneyData} />
            <p className='text-center font-Poppins text-sm text-red-800'>
              Symbolic financial reward
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
