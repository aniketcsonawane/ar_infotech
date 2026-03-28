import React from 'react'
import Services2 from '../components/Services2'
import { Link } from 'react-router-dom'


function Services() {
  return (
    <>
      <main>
        <div
          className="page-title dark-background"
          data-aos="fade"
          style={{
            backgroundImage: "url(/images/page-title-bg.webp)",
          }}
        >
          <div className="container position-relative">
            <h1>Services</h1>
            <p></p>
            <nav className="breadcrumbs">
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
              </ol>
            </nav>
          </div>
        </div>
        <Services2 />
      </main>
    </>
  )
}

export default Services