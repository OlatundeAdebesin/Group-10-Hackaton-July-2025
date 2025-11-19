import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Activities from '../components/Activities'
import Products from '../components/Products'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Request from '../components/Request'
import BackToTop from '../components/BackToTop'
//import SaaSProductList from '../components/SaaSProductList'
//import SaaSAppList from '../components/SaaSAppList'
//import AppMarket from '../components/AppMarket'
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
        {/* <SaaSProductList /> */}
        {/* <SaaSAppList /> */}
        {/* <AppMarket /> */}
        <Footer />
        <BackToTop />
    </div>

    </section>

  )
}

export default Home