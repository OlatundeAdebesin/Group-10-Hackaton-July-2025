import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

const ProductCard_TextFirst = ({ title, description, image, features, l1, l2, l3 }) => {
  return (
    <div className='mt-10 flex lg:flex-row flex-col gap-2 justify-center items-center'>
     <div className='flex flex-col gap-5 text-left px-6'>
      <p className='text-xl text-orange-500 uppercase'>{title}</p>
      <p className='lg:text-3xl text-[#31587c] font-plus-jakarta text-xl hover:cursor-pointer'>{description}</p>
    <ul className='flex flex-col text-[#1CA6AF] gap-2 hover:text-orange-500'>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
      {/* <li className='flex flex-row items-left'><IoMdCheckmark />{l1}</li>
      <li className='flex flex-row items-left'><IoMdCheckmark />{l2}</li>
      <li className='flex flex-row items-left'><IoMdCheckmark />{l3}</li> */}
    </ul>
    </div>
    <div>
      <img className='w-[1900px]' src={image} alt="" />
    </div>
    </div>
  )
}

export default ProductCard_TextFirst