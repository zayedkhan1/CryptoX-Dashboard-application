import React from 'react';
import { FaCircleExclamation } from "react-icons/fa6";
import { TbReceiptBitcoin } from "react-icons/tb";
import { MdFileDownload } from "react-icons/md";
import { HiUpload } from "react-icons/hi";
const Wallet = () => {
    return (
        <div className='bg-white max-w-6xl mx-auto mt-6 rounded-xl'>
             <div className=' md:flex items-center justify-center gap-6 p-4'>
                <div className='p-4 border-r-2 border-gray-300 text-center'>
                    <div className='flex items-center gap-2 text-gray-500'>
                        <p className=' text-xl font-base  mb-2'>total portfoili value </p>
                    <p ><FaCircleExclamation /></p>
                    </div>
                    <p className='text-xl font-bold'>$ 123,452.32</p>
                </div>
                <div className='p-4 border-r-2 border-gray-300 text-center'>
                    <p className='flex items-center gap-3 text-xl font-bold mb-2 text-gray-500'>Wallet Balances <TbReceiptBitcoin /></p>
                    <p className='text-xl '><span className='font-bold'>22.39483800 </span><span className='text-[15px] bg-gray-300 rounded text-gray-400 px-1'>BTC</span> </p>
                </div>
                <div className='p-4 border-r-2 border-gray-300 flex items-center gap-2 text-center '>
                    <p className='text-xl font-semibold'>BDT 766,68800.655</p>
                    <p className='text-[15px] bg-gray-300 rounded text-gray-400 px-1'>Taka</p>
                </div>
                <div>
                    <div className='p-2 flex items-center gap-4 text-center '>
                        <div className='flex items-center gap-2 p-2 border-none bg-purple-600 text-white rounded-xl '>
                                <MdFileDownload />
                            <button className='btn text-xl cursor-pointer font-semibold'>Deposite</button>
                        </div>
                        <div className='flex items-center gap-2 p-2 border-none text-white bg-purple-600 rounded-xl font-semibold'>
                            <HiUpload />
                               <button className='text-xl cursor-pointer'>Withdraw</button>
                        </div>
                    </div>
                    <p></p>
                </div>
             </div>
        </div>
    );
};

export default Wallet;