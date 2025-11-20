import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section>
<div className='flex flex-col items-center py-20'>
        <p className='text-xl text-orange-500 uppercase'>Welcome!</p>
        <h1 className='mt-5 text-4xl capitalize text-[#31587c] font-plus-jakarta text-center lg:text-6xl'>Powerful SaaS apps to</h1>
        <h1 className='text-4xl capitalize text-[#31587c] font-plus-jakarta text-center lg:text-6xl'>transform your business</h1>
       <Link to ='/MarketPlace'> <button className='bg-orange-400 text-white px-7 py-3 rounded-full mt-5 hover:bg-[#31587c] hover:cursor-pointer uppercase'>Get started</button></Link>
    </div>
    <div>
        <img src="src/assets/dashboard-01-2048x1103.png" alt="" />
    </div>
    <div className='mt-500 flex flex-col items-center mt-28 gap-2 lg:gap-5 lg:py-5 px-5'>
      <p className='text-xl text-orange-500 uppercase'>What we do</p>
      <p className='lg:text-4xl lg:px-40 text-[#31587c] font-plus-jakarta text-center px-5 text-xl'>At our company, we specialize in developing powerful software that help business of all sizes streamline their operations, increase productivity, and boost revenue</p>
    </div>
    </section>
  )
}

export default HeroSection