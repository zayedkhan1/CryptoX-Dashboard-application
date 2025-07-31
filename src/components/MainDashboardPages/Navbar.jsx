import React from 'react';
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <nav className='bg-white'>
            <div className='max-w-6xl mx-auto '>
                <div className='flex items-center justify-between  py-4'>
                    <p className='text-xl md:text-3xl text-gray-600 font-bold'>Dashboard</p>
                    <CgProfile className=' text-4xl text-purple-500' />
                </div>

            </div>
        </nav>

    );
};

export default Navbar;