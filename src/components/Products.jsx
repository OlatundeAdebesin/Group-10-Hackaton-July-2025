import React from 'react'
import ProductCard_TextFirst from '../Utils/ProductCard_TextFirst'
import ProductCard_TextLast from '../Utils/ProductCard_TextLast'
const Products = () => {
  return (

    <section>
    <div>
      <p className='text-xl text-orange-500 text-center uppercase'>Our Products</p>
      <p className='lg:text-4xl lg:px-40 text-[#31587c] font-plus-jakarta text-center text-xl mt-5'>Get the most out of</p>
      <p className='lg:text-4xl lg:px-40 text-[#31587c] font-plus-jakarta text-center text-xl'>our software</p>
    </div>
    <ProductCard_TextFirst
    title="Marketing Bot"
    description="Easily automate your marketing campaigns, track leads and conversions, and optimize your ROI"
    features={[
      "Create and send target campaigns",
      "Intuitive task management system",
      "Robust reporting and analytics features"
    ]}
    //l1="Create and send target campaigns"
    //l2="Intuitive task management system"
    //l3="Robust reporting and analytics features"
    image="src/assets/pieChart-right.png"
    />
    <ProductCard_TextLast
    title="CRM Manager"
    description="Powerful customer relationship management (CRM) tool that enables you to manage customer data and track interactions"
    features={[
      "Track customer interactions across multiple channels",
      "Intuitive task management system",
      "Robust reporting and analytics features"
    ]}
    //l1="Track customer interactions across multiple channels"
    //l2="Intuitive task management system"
    //l3="Robust reporting and analytics features"
    image="src/assets/12-CRM.png"
    />
    <ProductCard_TextFirst
    title="The Cloud"
    description="A cloud-based project management tool designed to help teams collaborate more efficiently and complete projects on time"
     features={[
      "Intuitive task management system",
      "Collaboration tools that enable team members to communicate",
      "Robust reporting and analytics features"
    ]}
    //l1="Intuitive task management system"
    //l2="Collaboration tools that enable team members to communicate"
    //l3="Robust reporting and analytics features"
    image="src/assets/35-cloud.png"
    />
  
    </section>
  )
}

export default Products