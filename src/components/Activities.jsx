import React from 'react'
import Card from '../Utils/Card'
const Activities = () => {
  return (
    <div className=' rounded-full p-4 justify-center flex gap-2 flex-wrap mb-20 lg:gap-28'>
        <Card
        title= "Marketing"
        imgSrc= "src/assets/2.png"
        description= "Gain valuable insights into your business performance with our advanced analytics tools and automate your targeted marketing campaigns."
         />
        <Card
          title="CRM Manager"
          imgSrc="src/assets/3.png"
          description="Enhance customer relationships and streamline sales processes with our intuitive CRM management software."
        />
        <Card
          title="Cloud"
          imgSrc="src/assets/4.png"
          description="Securely store, manage, and access your data from anywhere with our reliable cloud solutions."
        />
    </div>
  )
}

export default Activities