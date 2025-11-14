import React, { useState } from 'react'
import logo from "../assets/Logo.svg"
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
        const [isMobileNav, setIsMobileNav ] = useState("");
    
        const mobileNav = () => {
            setIsMobileNav(!isMobileNav);
        }
  return (
    <section>
        <nav className='flex justify-between px-3 lg:px-20 py-5'>
                    <img src={logo}></img>
                    <ul className='lg:flex gap-7 capitalize text-[#32497dc4] text-lg font-["plus jakarta Sans, san serif"] cursor-pointer hidden'>
                        <Link to="/"><li className='hover:text-orange-400'>home</li></Link>
                        {/* <Link to="/about"><li className='hover:text-orange-400'>about us</li></Link> */}
                        <Link to="/ProductPage"><li className='hover:text-orange-400'>products</li></Link>
                        <Link to="/marketplace"><li className='hover:text-orange-400'>market place</li></Link>
                        {/* <Link to="/features"><li className='hover:text-orange-400'>features</li></Link> */}
                        <Link to="/Contact"><li className='hover:text-orange-400'>contact</li></Link>
                    </ul>
                    <button onClick={mobileNav} className='lg:hidden pr-2 bg-white text-[#31587c] px-3 py-2 text-xl border-[1px] border-[#6EC1E4]'>{isMobileNav? <IoClose/> :<GiHamburgerMenu />}</button>
                </nav>
                  {/* Mobile navbar */}

         {isMobileNav && <nav className='bg-[#ccf5ee] absolute top-0 w-[100%] mt-28 h-[400px] lg:hidden'>
           <ul className='capitalize flex flex-col gap-10 px-4 pt-12 text-base'>
                        <Link to="/"><li className=' text-[#32497dc4] cursor-pointer hover:text-[#f2a341]'>home</li></Link>
                        {/* <Link to="/about"><li className='hover:text-orange-400'>about us</li></Link> */}
                        <Link to="/ProductPage"><li className=' text-[#32497dc4] cursor-pointer hover:text-[#f2a341]'>products</li></Link>
                        <Link to="/marketplace"><li className=' text-[#32497dc4] cursor-pointer hover:text-[#f2a341]'>market place</li></Link>
                        {/* <Link to="/features"><li className='hover:text-orange-400'>features</li></Link> */}
                        <Link to="/Contact"><li className=' text-[#32497dc4] cursor-pointer hover:text-[#f2a341]'>contact</li></Link>
            </ul> 
          </nav>}
    </section>
  )
}

export default Navbar