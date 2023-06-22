import React, { useEffect, useState } from 'react'
import SideBar from '../ieacComponents/Sidebar'
import { useLocation } from 'react-router-dom'

const Review = () => {

    const [title, setTitle] = useState('');

    const location = useLocation();

    useEffect(() => {

        let pathLabel = location.pathname.split('/review/')[1];
        setTitle(pathLabel);

    }, [location])


    return (
        <div>
            <div className='flex'>
                <SideBar />

                <div className='flex p-5 flex-col w-full font-Poppins'>
                    <h2 className='text-xl font-semibold'>
                        Wanna review {title} Form?
                    </h2>
                    <div>
                        Under Construction 🚧
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
