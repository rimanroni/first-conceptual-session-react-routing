import React from 'react';
import { Link, NavLink, Outlet, useNavigation } from 'react-router-dom';
import { FaAmazon } from 'react-icons/fa';
import Fotter from '../pages/Fotter/Fotter';
import { ColorRing } from 'react-loader-spinner';

const MainLayOut = () => {
    const navigate = useNavigation()
    return (
        <div>
            <section>
                <div className='py-5 justify-between px-20 shadow-lg flex items-center'>
                    <div>
                        <NavLink to={'/'} className='font-bold text-2xl text-neutral-950'><span><FaAmazon className='inline'/></span> Amazon </NavLink>
                    </div>
                  <nav>
                    <ul className='flex gap-5'>
                        <li>
                            <NavLink  to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink  to="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                  </nav>
                </div>
               <div className='min-h-screen'>
               <div className='flex justify-center'>
         <h1 className='flex justify-center items-center'>
         {navigate.state==='loading'? <div className='flex justify-center mt-40  text-9xl items-center'>
         <span className="loading text-9xl   text-yellow-300 loading-spinner loading-lg"></span>
         </div>
       

             : <Outlet/>}
        </h1> 
         </div>
              
               </div>
                <Fotter/>
            </section>
        </div>
    );
};

export default MainLayOut;