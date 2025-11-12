import React from 'react'

const Partners = () => {
  return (
    <section>
    <div>
      <p className='text-xl text-orange-500 text-center uppercase mt-20'>Companies that trust us</p>
    </div>
    <div className='flex flex-wrap justify-center mt-2 mb-20 bg-green-100 gap-2 px-10 py-30'>
      <img src="src/assets/partnerlogo_01.png" alt="Partner 1" className='h-24'/>
      <img src="src/assets/partnerlogo_02.png" alt="Partner 2" className='h-24'/>
      <img src="src/assets/partnerlogo_03.png" alt="Partner 3" className='h-24'/>
      <img src="src/assets/partnerlogo_04.png" alt="Partner 4" className='h-24'/>
      <img src="src/assets/partnerlogo_05.png" alt="Partner 5" className='h-24'/>
    </div>
  </section>
  )
}

export default Partners