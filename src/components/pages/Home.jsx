import React from 'react';
import SideBar from '../homecomponent/SideBar';
import MainDashBoard from '../homecomponent/MainDashBoard';
import Navbar from '../MainDashboardPages/Navbar';

const Home = () => {
    return (
        <div className='flex'>
           <SideBar></SideBar>
           <MainDashBoard></MainDashBoard>
        </div>
    );
};

export default Home;