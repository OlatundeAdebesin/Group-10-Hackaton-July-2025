import React from 'react'

const TestimonialCard = ({description, img, name, title}) => {
  return (
    <div className='px-10 py-10 hover:border-2 hover:border-gray-100 hover:rounded-3xl'>
        {/* <img src="src/assets/rating-stars.png" alt="Rating Stars" className='h-6 w-auto mx-auto mt-3'/> */}
        <p className='text-l text-center text-[#31587c] font-plus-jakarta mt-5 mb-5'>{description}</p>
        <img src={img} alt="Testimonial Avatar" className='h-16 w-16 rounded-full mx-auto'/>
        <p className='text-center text-[#31587c] font-plus-jakarta'>{name}</p>
        <p className='text-center text-[#31587c] font-plus-jakarta'>{title}</p>
    </div>
  )
}

export default TestimonialCard  