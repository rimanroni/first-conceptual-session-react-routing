import React from 'react';
import {Link , Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className=' '>
           <div className='  bg-red-500'>
            <Link to="/profile">Profile</Link> <br />
            <Link to="/showdetils">ShowDeitls</Link> <br />
            <Link to="/student">Student Batch</Link>
           </div>
            
           
        </div>
    );
};

export default DashboardLayout;