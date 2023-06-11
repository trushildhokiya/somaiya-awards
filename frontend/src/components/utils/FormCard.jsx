import React, { useState } from 'react';
import Sports from '../../container/assests/sports.jpeg';

const FormCard = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className='flex justify-center'>
      <div
        className='relative w-[70%] h-[20rem] shadow-lg bg-white rounded-sm'
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <img src={Sports} className='w-full h-full object-cover' alt='Sports' />
        <div
          id='card'
          className={`w-full ${hovered ? 'h-full opacity-80' : 'h-[8rem] opacity-50'} transition-all duration-500 rounded-t-lg bottom-0 absolute bg-black`}
        >
          <div className='p-1'>
            <div>
              <h2 className='font-Poppins text-xl text-white ml-[5%] py-2'>
                Sports
              </h2>
              <p className='text-sm font-Poppins text-white p-2'>
                "Award form for sports: Honoring excellence in athletic achievements worldwide"
              </p>

              {
                hovered
                ?
                <>
                    <div className=' relative w-full h-full'>
                        <div className='absolute bg-blue-300 opacity-100'>
                            Link
                        </div>
                    </div>
                </>
                : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
