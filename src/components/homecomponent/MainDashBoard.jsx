import React from 'react';
import Navbar from '../MainDashboardPages/Navbar';
import Wallet from '../MainDashboardPages/Wallet';
import MainBord from '../MainDashboardPages/MainBord';

const MainDashBoard = () => {
    return (
        <div className='w-full bg-gray-100'>
            <Navbar></Navbar>
            <Wallet></Wallet>
            <MainBord></MainBord>
        </div>
    );
};

export default MainDashBoard;