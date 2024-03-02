import React, { useState } from 'react'
import {FaBars,FaXmark} from 'react-icons/fa6';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const[isMenuOpen,setisMenuOpen]=useState(false);
    const { loginWithRedirect ,logout, isAuthenticated} = useAuth0();
    

    const toggleMenu = () =>{
        setisMenuOpen(!isMenuOpen);
    }
    const navItems=[
        {link:"Home", path: "/"},
        {link:"About", path: "about"},
        {link:"Customers", path: "customers"},
        {link:"Features", path: "features"},
    ]
  return (
    <>
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a href='/'>Logo</a>
                <ul className='md:flex space-x-12' hidden>
                    {
                        navItems.map(({link,path})=><a key={link} href={path} className='block
                         hover:text-secondary'>{link}</a>)
                    }
                </ul>
            </div >
            
            <div className='space-x-12 hidden md:flex items-center'>
                {isAuthenticated? (
                    <button onClick={() => loginWithRedirect()} className='bg-primary py-2 px-4 text-white transition-all duration-300 rounded
                    hover:text-white hover:bg-secondary'>Log out</button>
                ):(
               <button onClick={() => loginWithRedirect()} className='bg-primary py-2 px-4 text-white transition-all duration-300 rounded
               hover:text-white hover:bg-secondary'>Sign Up</button>
                )}
           </div>

           <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none
            focus:text-gray-300'>
                {
                    isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />):(<FaBars className='w-6 h-6 text-primary' />)
                 
                }

            </button>
           </div>
          
        </div>
    </nav>
    <div className={`space-y-4 px-4 pt-5 pb-5 bg-white text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {
         navItems.map(({link,path})=><a key={link} href={path} className='block
         hover:text-secondary'>{link}</a>)
        }
    </div>
    </>
  )
}

export default Navbar
