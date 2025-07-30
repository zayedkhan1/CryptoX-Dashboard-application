import React, { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import cryptoxLogo from '../../assets/images/cryptoLogo.png'
const SideBar = () => {
    const [open,setOpen]=useState(false);
    return (
        <div className={`min-h-screen w-[15%] md:w-[15%] bg-white shadow flex transition-all duration-300 

         ${open?'w-[150px]':'w-[60px]'}
        
         md:relative
         z-20

         
        `}>
          <div className='p-2  flex flex-col justify-between w-full'>
              <div >
                 <a href='/' className='hidden md:flex md:items-center  gap-2 hover:bg-gray-300 p-2 border-none rounded-xl cursor-pointer mb-5'>
             <img className='w-[20px] rounded-full' src={cryptoxLogo} alt="" />
            <p className='text-base md:text-xl font-bold text-purple-500'>Cryptox</p>        </a>
                <div className='text-2xl p-2 md:hidden'>
                   <button onClick={()=>setOpen(!open)}> <MdOutlineMenu /></button>
                </div>
                <a href='/' className='flex items-center text-gray-600 gap-2 hover:bg-gray-300 p-2 border-none rounded-xl cursor-pointer'>
                        <RxDashboard  className='text-xl '/>
                        {
                            open?<p className='text-base md:text-xl font-semibold'>Dashboard</p>:null

                        }
                          <p className='hidden md:block text-xl '>Dashboard</p>


                </a>
                <a href='/transaction' className='flex items-center text-gray-600 gap-2 hover:bg-gray-300 p-2 border-none rounded-xl cursor-pointer'>
                   <GrTransaction  className='text-xl ' />
                   {
                    open?<p className='text-base md:text-xl font-semibold'>Transactions</p>:null
                   }
                   <p className='hidden md:block text-xl '>Transactions</p>
                </a>

            </div>
            <a href='/support' className='flex items-center text-gray-600 gap-2 hover:bg-gray-300 p-2 border-none rounded-xl cursor-pointer' >
                <MdOutlineSupportAgent  className='text-xl '  />
                {
                    open?<p className=' text-base md:text-xl font-bold'>support</p>:null
                }
                  <p className='hidden md:block text-xl '>Support</p>

            </a>
          </div>


        </div>


    );
};

export default SideBar;