import React from 'react'
import { Link } from 'react-router-dom'

const Request = () => {
  return (
    <section className='flex justify-center items-center mb-24'>
    <div className='flex flex-col justify-center items-center gap-5 text-white text-center bg-[#1CA6AF] w-screen py-10 px-6 h-auto ml-5 mr-5 lg:py-24 lg:px-24 lg:space-y-4 rounded-3xl'>
      <p className='lg:text-xl uppercase'>Ready to take your business to the next level?</p>
      <p className='text-xl lg:text-3xl lg:px-32'>Request a demo of any of our products today and see how they can help you streamline your operations & boost revenue!</p>
      <Link to = "/MarketPlace"><button className='bg-orange-400 text-white lg:text-lg py-4 px-8 font-bold rounded-full w-auto uppercase hover:bg-white hover:text-orange-400'>Get Started Today!</button></Link>
    </div>
    </section>
  )
}

export default Request





