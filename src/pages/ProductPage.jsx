import React, { useState } from 'react'
import logo from "../assets/Logo.svg"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { SiCookiecutter } from 'react-icons/si'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

const ProductPage = () => {

    const [isMobileNav, setIsMobileNav ] = useState("false");

    const mobileNav = () => {
        setIsMobileNav(!isMobileNav);
    }
  return (
    <section className='bg-[#def1ef]'>
        <nav className='flex justify-between lg:px-20 py-5'>
            <img src={logo}></img>
            <ul className='lg:flex gap-7 capitalize text-[#6EC1E4] text-lg font-["plus jakarta Sans, san serif"] cursor-pointer hidden'>
                <li className='hover:text-orange-400'>home</li>
                <li className='hover:text-orange-400'>about us</li>
                <li className='hover:text-orange-400'>product</li>
                <li className='hover:text-orange-400'>Features</li>
                <li className='hover:text-orange-400'>contact</li>
            </ul>
            <button onClick={mobileNav} className='lg:hidden pr-2 bg-white text-[#31587c] px-3 py-2 text-xl border-[1px] border-[#6EC1E4]'>{isMobileNav? <IoClose/> :<GiHamburgerMenu />}</button>
        </nav>
        <div className=' h-40 flex flex-col gap-7 mt-[82px] justify-center w-full'>
          <h1 className='text-[68px] text-[#31587c] font-[600] text-center capitalize font-["plus jakarta Sans, san serif"]'>products</h1>
          <h3 className='text-center text-[17px] px-3 text-[#32597dc4] font-["poppins, san serif"]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br/> ullamcorper mattis, pulvinar dapibus leo.</h3>
          </div>
       {/* Herosection */}
        <section className='lg:flex px-12 mt-28 items-center grid grid-cols-1'>
         <div className='lg:w-[25%] flex flex-col gap-3'>
          <img 
          className='h-[150px] w-[150px] rounded-full'
          src={logo2}></img>
          <h1 className='text-xl capitalize text-[#31587c] font-semibold ml-5'>marketing bot</h1>
         </div>
         <div className='lg:w-[75%] items-center'>
          <div className='w-[100%]'>
            <h1 className='lg:text-3xl text-xl mt-8 font-[700] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Easily automate your marketing campaigns, track leads<br/> and conversions, and optimize your ROI with powerful analytics<br/> and reporting.</h1>
          </div>
         </div>
        </section>
        {/* Another section */}
        <section className='lg:flex px-12 mt-20'>
           <div className='lg:w-[25%]'>
           
           </div>
           <div className='lg:w-[75%]'>
           <div className='lg:flex gap-16'>
             <div className='lg:w-[60%] flex flex-col gap-4'>
            <h1 className='text-xl font-semibold text-[#31587c]'>          
                 Track leads and conversions
            </h1>
            <p className='text-[16px] text-[#32597dc4] font-["poppins, san serif"]'>
              Proin porta lorem sed nulla ornare, ac volutpat enim interdum. Quisque maximus mauris ut urna porta viverra. Sed quis vestibulum eros. Vestibulum eget molestie arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
              per inceptos himenaeos. Etiam eleifend a massa at mollis. Etiam a est sagittis, efficitur urna in, convallis nisi. Vestibulum nec leo ut dui commodo elementum. Duis nibh sapien, sollicitudin porttitor augue ac, volutpat vestibulum ipsum.
               Nulla ac interdum leo. Etiam ultrices rutrum tellus, et ornare felis aliquam in. Maecenas faucibus commodo ullamcorper. Phasellus nulla justo, dapibus gravida erat eu, congue euismod lectus.
            </p>
           </div>
           <div className='lg:w-[40%] flex flex-col gap-4 mt-8'>
            <h2 className='text-xl font-semibold text-[#31587c] capitalize'>features</h2>
            <h3 className='text-lg font-[600] text-[#1ca6af] hover:text-[#f2a341] transition-transform cursor-pointer'> Intuitive task management system</h3>
            <h4 className='text-lg font-[600] text-[#1ca6af] hover:text-[#f2a341] transition-transform cursor-pointer'> Create and send targeted campaigns</h4>
            <h5 className='text-lg font-[600] text-[#1ca6af] hover:text-[#f2a341] transition-transform cursor-pointer'> Robust analytics features</h5>
           <div><button className='capitalize bg-[#f2a341] px-7 py-4 rounded-full text-white font-bold text-lg hover:bg-[#1ca6af]'>View more</button></div>
            </div>
           </div>
           </div>
          </section>

          {/* Another section */}

          <section className='lg:flex px-12 mt-28'>
            <div className='lg:w-[25%] flex flex-col gap-3'>
           <img src={logo3} className='w-[150px] h-[150px] rounded-full'></img>
           <h1 className='text-xl capitalize text-[#31587c] font-semibold ml-5'>CRM Manager</h1>
            </div>
            <div className='lg:w-[75%] items-center'>
               <h1 className='lg:text-3xl text-xl mt-8 font-[700] font-["plus jakarta Sans, san serif"] text-[#31587c]'>A powerful customer relationship management (CRM) tool
                <br/> that enables you to manage customer data, <br/> track interactions, and improve customer engagement and<br/> retention.</h1>
            </div>
          </section>

          {/* Another section */}

          <section className='lg:flex px-12 mt-20'>
            <div className='lg:w-[25%]' >
              
            </div>
            <div className='lg:w-[75%]'>
            <div className='lg:flex gap-16'>
             <div className='lg:w-[60%] flex flex-col gap-4'>
              <h1 className='text-xl font-semibold text-[#31587c]'>          
                 Improve customer engagement
            </h1>
            <p className='text-[16px] text-[#32597dc4] font-["poppins, san serif"]'>
              Proin porta lorem sed nulla ornare, ac volutpat enim interdum. Quisque maximus mauris ut urna porta viverra. Sed quis vestibulum eros. Vestibulum eget molestie arcu.
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eleifend a massa at mollis. Etiam a est sagittis, efficitur urna in, 
               convallis nisi. Vestibulum nec leo ut dui commodo elementum. Duis nibh sapien, sollicitudin porttitor augue ac, volutpat vestibulum ipsum. Nulla ac interdum leo. Etiam ultrices
                rutrum tellus, et ornare felis aliquam in. Maecenas faucibus commodo ullamcorper. Phasellus nulla justo, dapibus gravida erat eu, congue euismod lectus.
            </p>
             </div>
             <div className='lg:w-[40%] flex flex-col gap-4 mt-8'>
             <h2 className='text-xl font-semibold text-[#31587c] capitalize'>features</h2>
            <h3 className='text-lg font-[600] text-[#1ca6af] hover:text-[#f2a341] transition-transform cursor-pointer'>Create and send targeted campaigns</h3>
            <h4 className='text-lg font-[600] text-[#1ca6af] hover:text-[#f2a341] transition-transform cursor-pointer'>Intuitive task management system</h4>
            <h5 className='text-lg font-[600] text-[#1ca6af] hover:text-[#f2a341] transition-transform cursor-pointer'>Robust analytics features</h5>
           <div><button className='capitalize bg-[#f2a341] px-7 py-4 rounded-full text-white font-bold text-lg hover:bg-[#1ca6af]'>View more</button></div>
             </div>
            </div>
            </div>
          </section>

          {/* Another section */}

          <section className='lg:flex px-12 mt-28'>
            <div className='lg:w-[25%] flex flex-col gap-3'>
           <img src={logo4} className='w-[150px] h-[150px] rounded-full'></img>
           <h1 className='text-xl capitalize text-[#31587c] font-semibold ml-5'>The Cloud</h1>
            </div>
            <div className='lg:w-[75%] items-center'>
               <h1 className='lg:text-3xl text-xl mt-8 font-[700] font-["plus jakarta Sans, san serif"] text-[#31587c]'>A cloud-based project management tool designed to help<br/>
                teams collaborate more efficiently and complete projects on<br/>time and within budget.</h1>
            </div>
          </section>

          {/* Another section */}

          <section className='lg:flex px-12 mt-20'>
            <div className='lg:w-[25%]' >
              
            </div>
            <div className='lg:w-[75%]'>
            <div className='lg:flex gap-16'>
             <div className='lg:w-[60%] flex flex-col gap-4'>
              <h1 className='text-xl font-semibold text-[#31587c]'>          
                 Complete projects on time
            </h1>
            <p className='text-[16px] text-[#32597dc4] font-["poppins, san serif"]'>
              Proin porta lorem sed nulla ornare, ac volutpat enim interdum. Quisque maximus mauris ut urna porta viverra. Sed quis vestibulum eros. Vestibulum eget molestie arcu.
               Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eleifend a massa at mollis. Etiam a est sagittis, efficitur urna in, 
               convallis nisi. Vestibulum nec leo ut dui commodo elementum. Duis nibh sapien, sollicitudin porttitor augue ac, volutpat vestibulum ipsum. Nulla ac interdum leo. Etiam ultrices
                rutrum tellus, et ornare felis aliquam in. Maecenas faucibus commodo ullamcorper. Phasellus nulla justo, dapibus gravida erat eu, congue euismod lectus.
            </p>
             </div>
             <div className='lg:w-[40%] flex flex-col gap-4 mt-8'>
             <h2 className='text-xl font-semibold text-[#31587c] capitalize'>features</h2>
            <h3 className='text-lg font-[600] text-[#1ca6af] hover:text-[#f2a341] transition-transform cursor-pointer'>Robust analytics features</h3>
            <h4 className='text-lg font-[600] text-[#1ca6af] hover:text-[#f2a341] transition-transform cursor-pointer'>Create and send targeted campaigns</h4>
            <h5 className='text-lg font-[600] text-[#1ca6af] hover:text-[#f2a341] transition-transform cursor-pointer'>Intuitive task management system</h5>
           <div><button className='capitalize bg-[#f2a341] px-7 py-4 rounded-full text-white font-bold text-lg hover:bg-[#1ca6af]'>View more</button></div>
             </div>
            </div>
            </div>
          </section>

          {/* Another section */}

          <section className='lg:mt-24 lg:p-8 p-14'>
            <div className='lg:flex flex-col lg:gap-7 gap-5 pb-[70px] items-center bg-[#1ca6af] lg:h-[450px] rounded-[20px] pt-32 text-center px-3'>
             <h2 className='text-[#fff] lg:text-xl text-sm uppercase font-semibold font-["plus jakarta Sans, san serif"]'>ready to take your business next level?</h2>
             <div className='font-semibold'><h1 className='text-[#fff] lg:text-3xl text-xl pl-6 font-["plus jakarta Sans, san serif"]'>Request a demo of any of our products today and see how</h1>
             <h1 className='text-[#fff] lg:text-3xl text-xl font-["plus jakarta Sans, san serif"]'>they can help you streamline your operations & boost revenue!</h1></div>
             <button className='bg-[#f2a341] uppercase px-7 py-4 rounded-full text-[#fff] text-base font-bold font-["poppins, san serif"] hover:bg-white hover:text-[#f2a341]'>get started today!</button>
            </div>
          </section>

          {/* Footer */}
      <footer className="bg-gray-200  text-cyan-700 font-bold mt-20 py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Menu */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Menu</h3>
            <ul className="space-y-2 text-lg font-semibold">
              <li><a href="/" className="hover:text-orange-400">Home</a></li>
              <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-400">Products</a></li>
              <li><a href="/services" className="hover:text-orange-400">Features</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Quick Links</h3>
            <ul className="space-y-2 text-lg font-semibold">
              <li><a href="/" className="hover:text-orange-400">Blog</a></li>
              <li><a href="/about" className="hover:text-orange-400">Support</a></li>
              <li><a href="/services" className="hover:text-orange-400">Careers</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Contact</h3>
            <ul className="space-y-2 text-lg font-semibold">
              <p>Appclick Tech Academy 10, Soun Ajagungbade Street <br /> Bodija Ibadan.</p>
            </ul>
          </div>

          {/* Media icons */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-950">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-orange-400"><BsTwitter size={20} /></a>
              <a href="#" className="hover:text-orange-400"><BsInstagram size={20} /></a>
              <a href="#" className="hover:text-orange-400"><LiaLinkedin size={20} /></a>
            </div>
                </div>
        </div>

        {/* Copyright Part */}
        <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Hackhathon Group 10 — All Rights Reserved.
        </div>
        </footer>

          {/* Mobile navbar */}

         {isMobileNav && <nav className='bg-[#ccf5ee] absolute top-0 w-[100%] mt-28 h-[400px] lg:hidden'>
           <ul className='capitalize flex flex-col gap-10 px-4 pt-12 text-base'>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>home</li>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>about us</li>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>product</li>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>features</li>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>contact</li>
            </ul> 
          </nav>}
    </section>
  )
}

export default ProductPage