import React from 'react'
import TestimonialCard from '../Utils/TestimonialCard'

const Testimonials = () => {
  return (
    <section>
    <div>
      <p className='text-xl text-orange-500 text-center uppercase'>Testimonials</p>
      <p className='lg:text-3xl lg:px-80 text-[#31587c] font-plus-jakarta text-center text-xl mt-5 px-10'>No matter which product you choose, you can count on our team of experts to provide top-notch support and help you get the most out of our software</p>
    </div>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 ml-10 mr-10 justify-center mt-10 mb-20'>
      <TestimonialCard
      description='"This software has completely transformed the way we do business. The user-friendly interface and powerful features have helped us streamline our operations and increase productivity."'
      img="src/assets/testimonial-01.jpg"
      name="Jane Doe"
      title="CEO of Acme Corp"
       />
      <TestimonialCard
      description='"This software changed the way we manage our projects. The collaboration tools are fantastic and have made a real difference to our workflow. Highly recommend!"'
      img="src/assets/testimonial-02.jpg"
      name="John Smith"
      title="Project Manager at Beta Inc"
      />
      <TestimonialCard
      description='"I was amazed at how quickly we were able to implement this software. The support team was incredibly helpful and responsive. They made the integration look so easy!"'
      img="src/assets/testimonial-03.jpg"
      name="Alice Johnson"
      title="CTO at Gamma LLC"
      />
    </div>
    </section>
  )
}

export default Testimonials