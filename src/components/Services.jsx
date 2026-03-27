import React from 'react'

const ServiceItem = ({ service }) => {

  return (
    <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
      <div class="service-item">
        <div class="img">
          <img src={`/images/${service.img}`} class="img-fluid" alt="" />
        </div>
        <div class="details position-relative">
          <div class="icon">
            <i class={`bi ${service.icon}`}></i>
          </div>
          <a href={`/services/${service.slug}`} class="stretched-link">
            <h3>{service.title}</h3>
          </a>
          <p>{service.desc}</p>
        </div>
      </div>
    </div>
  )
}

function Services() {
  /* 🔥 Services Data */const servicesData = [
    {
      img: "services-1.jpg",
      icon: "bi-code-slash",
      title: "Tally",
      desc: "Tailoring Tally to specific business needs.",
      delay: "200",
      slug:'tally'
    },
    {
      img: "services-1.jpg",
      icon: "bi-code-slash",
      title: "Web Development",
      desc: "We design and develop responsive, high-performance websites and web applications tailored to your business needs.",
      delay: "200",
      slug:'web_developement'
    },
    {
      img: "services-3.jpg",
      icon: "bi-laptop",
      title: "CRM",
      desc: "We provide custom software solutions for businesses including CRM, ERP, and automation systems.",
      delay: "400",
      slug:'crm'
    },
    // {
    //   img: "services-1.jpg",
    //   icon: "bi-globe",
    //   title: "Digital Marketing",
    //   desc: "Grow your business with SEO, social media marketing, and targeted online campaigns.",
    //   delay: "200",
    // },
    // {
    //   img: "services-2.jpg",
    //   icon: "bi-cloud",
    //   title: "Cloud Solutions",
    //   desc: "Secure and scalable cloud deployment, hosting, and maintenance for your applications.",
    //   delay: "300",
    // },
    // {
    //   img: "services-3.jpg",
    //   icon: "bi-shield-check",
    //   title: "Cyber Security",
    //   desc: "Protect your systems and data with advanced security solutions and monitoring services.",
    //   delay: "400",
    // },
  ];


  return (

    <section id="services" className="services section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Featured Srvices<br /></p>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-5">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
          {/* 
          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-item">
              <div class="img">
                <img src="/images/services-1.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-activity"></i>
                </div>
                <a href="service-details.html" class="stretched-link">
                  <h3>Nesciunt Mete</h3>
                </a>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div class="service-item">
              <div class="img">
                <img src="/images/services-2.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-broadcast"></i>
                </div>
                <a href="service-details.html" class="stretched-link">
                  <h3>Eosle Commodi</h3>
                </a>
                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div class="service-item">
              <div class="img">
                <img src="/src/assets//img/services-3.jpg" class="img-fluid" alt="" />
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-easel"></i>
                </div>
                <a href="service-details.html" class="stretched-link">
                  <h3>Ledo Markt</h3>
                </a>
                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              </div>
            </div>
          </div> */}

        </div>

      </div>

    </section>
  )
}

export default Services