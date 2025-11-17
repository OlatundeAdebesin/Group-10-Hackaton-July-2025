import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Activities from '../components/Activities'
import Products from '../components/Products'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Request from '../components/Request'
//import SaaSAppList from '../components/SaaSAppList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section>
    <div>
        <NavBar />
        <HeroSection />
        <Activities />
        <Products />
        <Partners />
        <Testimonials />  
        <Request />
        {/* <SaaSAppList /> */}
        <Footer />

    </div>

    </section>

  )
}

export default Home