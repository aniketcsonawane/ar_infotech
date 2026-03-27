import React from 'react'
import Navbar from '../components/Navbar'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Hero from '../components/Hero'
import Header from '../components/Header'
import About from '../components/About'
import Stats from '../components/Stats'
import Features from '../components/Features'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div>
        {/* <Header /> */}
        <Hero />
        <About />
        {/* <Stats /> */}
        <Services />
        <Testimonials />
        <ContactUs />
        {/* <Footer /> */}
    </div>
  )
}

export default Home