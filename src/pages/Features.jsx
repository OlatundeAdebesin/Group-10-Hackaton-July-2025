import React from 'react'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import Image1 from "../assets/img-001.png"
import Image2 from "../assets/img-002.png"
import Image3 from "../assets/img-003.png"
import BackToTop from "../components/BackToTop"

const Features = () => {
  return (
    <>
    <section className='h-[380vh] bg-[#def1ef]'>
      <NavBar/>  
     {/* first section */}
      <div className='lg:h-[80vh] h-[60vh] lg:flex flex-col grid grid-cols-1 lg:gap-14 gap-8 lg:mt-[65px] mt-[30px] justify-center w-full'>
      <div className='lg:flex flex-col lg:gap-0 grid grid-cols-1 gap-1'>
        <h1 className='lg:text-[68px] text-[32px] text-[#31587c] font-[600] text-center capitalize font-["plus jakarta Sans, san serif"] mb-2'>Features</h1>
        <h3 className='text-center text-[16px] lg:px-80 px-14 text-[#32597dc4] font-["poppins, san serif"]'>Enjoy the benefits of our advanced features designed to boost your business; whether it's automating marketing campaigns, managing customer relationships, seamless integration of cloud services, or analyzing data.</h3>
      </div>
      <div className='flex flex-col justify-center items-center gap-10'>
        <img className='h-[70px] text-center w-[70px] rounded-full'src={logo2}></img>
          <h1 className='text-xl capitalize text-center text-[#31587c] font-semibold ml-5'>marketing bot</h1>
      </div>
      <div className='flex justify-center items-center'>
         <h1 className='lg:text-4xl text-[21px]  px-8 mt-2 font-[500] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Easily automate your marketing campaigns, track leads
          and<br/> conversions, and optimize your ROI with powerful analytics<br/> and reporting.</h1>
      </div>
      </div>
      {/* Another section */}
      <section className=' h-[150vh] border-t border-[#32597dc4] mt-[98px] lg:px-48 px-8'>
      <div>
         <div className='lg:flex grid grid-cols-1 pt-[100px] gap-3 items-center'>
       <div className=' lg:flex grid grid-cols-1 flex-col lg:w-[40%] w-[100%] gap-5'>
        <h3 className='text-[#f2a341] text-xl pl-14 lg:pl-0 font-[600]'>Targeted campaign</h3>
       <h1 className=' lg:text-2xl text-xl font-[500] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Track leads, Conversion and optimize your ROI ut et nunc laoreet, pottitor nibh vel, iaculis </h1>
       </div>
       <div className='lg:w-[60%]'>
        <img src={Image1} className='lg:w-[650px] w-[350px]'></img>
       </div>
       </div>
      <BackToTop />
        <div className='lg:flex lg:flex-row flex flex-col-reverse pt-[100px] gap-3 items-center'>
         <div className='lg:w-[60%]'>
        <img src={Image2} className='lg:w-[650px] w-[350px]'></img>
       </div>
       <div className=' flex flex-col lg:w-[40%] w-[100%] gap-5'>
        <h3 className='text-[#f2a341] text-xl pl-14 lg:pl-0 font-[600]'>Robust analytics features</h3>
       <h1 className=' lg:text-2xl text-xl font-[500] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Easily automate your marketing campaigns, aliquam erat volutpat aliquam semper</h1>
       </div>
       </div>
      </div>
      </section>
    </section>
     {/* Another section */}
      <section className='h-[320vh] bg-[#def1ef]'>
       <div className=' h-[25vh] border-t border-[#32597dc4] lg:px-48 px-8'>
         <div className='flex flex-col justify-center items-center gap-3 pt-[40px]'>
        <img className='h-[60px] text-center w-[60px] rounded-full'src={logo3}></img>
          <h1 className='text-xl capitalize text-center text-[#31587c] font-semibold ml-5'>CRM manager</h1>
      </div>
      <div className='flex justify-center items-center'>
         <h1 className='lg:text-3xl text-[20px] px-14 mt-8 font-[500] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Powerful customer relationship management (CRM) tool that enables you to manage customer data and track interactions</h1>
      </div>
       </div>
       {/* Another section */}
       <div className=' h-[150vh] border-t border-[#32597dc4] mt-[180px] lg:px-48 px-8 bg-[#def1ef]'>
      <div className='mt-16'>
         <div className='lg:flex grid grid-cols-1 pt-[100px] gap-3 items-center'>
       <div className=' lg:flex grid grid-cols-1 flex-col lg:w-[40%] w-[100%] gap-5'>
        <h3 className='text-[#f2a341] text-xl pl-14 lg:pl-0 font-[600] uppercase'>track interactions</h3>
       <h1 className=' lg:text-2xl text-xl font-[500] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Manage customer data quisque maximus ut urna porta viverra sed quis eros</h1>
       </div>
       <div className='lg:w-[60%]'>
        <img src={Image3} className='lg:w-[650px] w-[350px]'></img>
       </div>
       </div>

        <div className='lg:flex lg:flex-row flex flex-col-reverse pt-[100px] gap-3 items-center'>
         <div className='lg:w-[60%]'>
        <img src={Image1} className='lg:w-[650px] w-[350px]'></img>
       </div>
       <div className=' flex flex-col lg:w-[40%] w-[100%] gap-5'>
        <h3 className='text-[#f2a341] text-xl pl-14 lg:pl-0 font-[600]'>Targeted campaigns</h3>
       <h1 className=' lg:text-2xl text-xl font-[500] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Powerful CRM tool that enables you to duis nibh sapien, porttitor volutpat ipsum nulla ac</h1>
       </div>
       </div>
      </div>
       </div>
      </section>
       {/* Another section */}
       <section className='h-[320vh] bg-[#def1ef]'>
        <div className=' h-[25vh] border-t border-[#32597dc4] mt-[200px] lg:px-48 px-8'>
         <div className='flex flex-col justify-center items-center gap-3 pt-[40px]'>
        <img className='h-[60px] text-center w-[60px] rounded-full'src={logo4}></img>
          <h1 className='text-xl capitalize text-center text-[#31587c] font-semibold ml-5'>The Cloud</h1>
      </div>
      <div className='flex justify-center items-center'>
         <h1 className='lg:text-[27px] text-[20px] px-14 mt-8 font-[700] font-["plus jakarta Sans, san serif"] text-[#31587c]'>A cloud-based management tool designed to help teams collaborate efficiently and complete projects on time</h1>
      </div>
       </div>
       {/* Another section */}
         <div className=' h-[150vh] border-t border-[#32597dc4] mt-[280px] lg:px-48 px-8 bg-[#def1ef]'>
      <div className='mt-16'>
         <div className='lg:flex grid grid-cols-1 pt-[100px] gap-3 items-center'>
       <div className=' lg:flex grid grid-cols-1 flex-col lg:w-[40%] w-[100%] gap-5'>
        <h3 className='text-[#f2a341] text-xl pl-14 lg:pl-0 font-[600] uppercase'>Set deadlines</h3>
       <h1 className=' lg:text-2xl text-xl font-[500] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Intuitive task management system that makes it easy to assign tasks</h1>
       </div>
       <div className='lg:w-[60%]'>
        <img src={Image2} className='lg:w-[650px] w-[350px]'></img>
       </div>
       </div>

        <div className='lg:flex lg:flex-row flex flex-col-reverse pt-[100px] gap-3 items-center'>
         <div className='lg:w-[60%]'>
        <img src={Image1} className='lg:w-[650px] w-[350px]'></img>
       </div>
       <div className=' flex flex-col lg:w-[40%] w-[100%] gap-5'>
        <h3 className='text-[#f2a341] text-xl pl-14 lg:pl-0 font-[600]'>Track progress</h3>
       <h1 className=' lg:text-2xl text-xl font-[500] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Robust reporting and analytics features that provide valuable insights</h1>
       </div>
       </div>
      </div>
       </div>
       </section>
        {/* Another section */}
       <section className='h-[70vh] w-[50wh]'>
         <div className='lg:mt-24 lg:p-8 p-14 border-t border-[#32597dc4]'>
            <div className='lg:flex flex-col lg:gap-7 gap-5 pb-[70px] items-center bg-[#1ca6af] lg:h-[450px] rounded-[20px] pt-32 text-center px-3'>
             <h2 className='text-[#fff] lg:text-xl text-sm uppercase font-semibold font-["plus jakarta Sans, san serif"]'>ready to take your business next level?</h2>
             <div className='font-semibold'><h1 className='text-[#fff] lg:text-3xl text-xl pl-6 font-["plus jakarta Sans, san serif"]'>Request a demo of any of our products today and see how</h1>
             <h1 className='text-[#fff] lg:text-3xl text-xl font-["plus jakarta Sans, san serif"]'>they can help you streamline your operations & boost revenue!</h1></div>
             <button className='bg-[#f2a341] uppercase px-7 py-4 rounded-full text-[#fff] text-base font-bold font-["poppins, san serif"] hover:bg-white hover:text-[#f2a341]'>get started today!</button>
            </div>
          </div>
       </section>
       <Footer/>
    </>
  )
}

export default Features