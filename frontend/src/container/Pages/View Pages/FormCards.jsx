import React from 'react'
import FormCard from '../../../components/utils/FormCard'


const FormCards = () => {
    return (
        <div className='p-5 w-full h-screen'>

            {/* Headers  */}
            <div className='flex flex-col'>
                <div className='text-xl font-Poppins font-semibold'>
                    <h2> Forms</h2>
                </div>
                <div className='my-1'>
                    <p className='text-md font-Poppins'>
                        Forms ares shown as per eligibility criteria
                    </p>
                </div>
            </div>

            {/* Cards  */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[5rem]  pb-[5rem] mt-[5rem] place-items-center'>

            <div className=''>
                <FormCard />
            </div>
            <div>
                <FormCard />
            </div>
            <div>
                <FormCard />
            </div>
            <div>
                <FormCard />
            </div>
            <div>
                <FormCard />
            </div>
            </div>

        </div>
    )
}

export default FormCards
