import React from 'react'

const Card = ({ title, imgSrc, description }) => {
  return (
    <div>
      <article className='w-72 h-90 bg-white shadow-lg flex flex-col items-center p-5 rounded-lg hover:scale-105 duration-300'>
        <img src={imgSrc} alt="" className='rounded-full w-24'/>
        <h2 className='text-2xl text-[#31587c] font-plus-jakarta mt-5'>{title}</h2>
        <p className='text-center mt-3 text-gray-500'>{description}</p>
      </article>
    </div>
  )
}

export default Card