import { useParams, Link } from "react-router-dom";
import { servicesData } from "../../data/serviceData";

/* 🔥 Services Data */
// const servicesData = [
//   {
//     id: "web_developement",
//     title: "Web Developement",
//     description:
//       "We create modern and responsive website designs tailored to your business.",
//     image: "/images/services.jpg",
//     points: [
//       "Responsive design",
//       "Modern UI/UX",
//       "SEO friendly",
//     ],
//   },
//   {
//     id: "crm",
//     title: "Software Development",
//     description:
//       "Custom software solutions to automate and scale your business operations.",
//     image: "/images/services.jpg",
//     points: [
//       "Custom ERP systems",
//       "CRM solutions",
//       "Automation tools",
//     ],
//   },
//   {
//     id: "tally",
//     title: "Tally",
//     description:
//       "Manage your products effectively with structured workflows.",
//     image: "/images/services.jpg",
//     points: [
//       "Inventory tracking",
//       "Product lifecycle",
//       "Reports & analytics",
//     ],
//     categories: [
//       {
//         title: 'Tally Softwares',
//         slug: 'tally_software',
//         list: [
//           "Tally Software",
//           "Tally Prime",
//           "Tally Software Services(TSS)",
//           "Tally Prime Server",
//           "Upgrade",
//           "Tally Virtual User (TVU)"
//         ]
//       },
//       {
//         title: 'Tally Services',
//         slug: 'tally_services',
//         list: [
//           "Tally Services",
//           "Tally on Cloud",
//           "Support - Onsite and Remote",
//           "AMC / Annual Support Cover",
//           "Data Synchronization",
//           "Priority Support Services",
//         ]
//       },
//       {
//         title: 'Tally Modules',
//         slug: 'tally_modules',
//         list: [
//           "Overdue bill pop up",
//           "Ledger multi address book",
//           "Day wise rent calculation",
//           "Item image in voucher",
//           "Auto backup module",
//           "New product arrival"
//         ]
//       },
//     ]
//   },
// ];



const ServiceDetails = () => {

  const { id } = useParams();

  const service = servicesData.find((s) => s.id === id);

  if (!service) return <h2 className="text-center mt-5">Service Not Found</h2>;

  return (
    <main className="main">

      {/* 🔥 Page Title */}
      <div
        className="page-title dark-background"
        data-aos="fade"
        style={{
          backgroundImage: "url(/images/page-title-bg.webp)",
        }}
      >
        <div className="container position-relative">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li className="current">{service.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 🔥 Service Details Section */}
      <section id="service-details" className="service-details section">
        <div className="container">

          <div className="row gy-4 mb-5" data-aos="fade-up">
            <div className="w-full">
              <div className="flex flex-wrap gap-x-4 bg-gray-100 ">
                {service.categories.map((s , ind) => (
                  <div key={ind} className="px-4 pt-4 ">
                    <h4>
                      {s.title}
                      <ul className="text-sm font-light p-3">
                        {s.items.map((item, index) => {
                          return (<li key={index}>
                            {item.name}
                          </li>)

                        })}
                      </ul>
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row gy-4">

            {/* LEFT SIDE MENU */}
            <div className="col-lg-4" data-aos="fade-up">

              <h4>Why Choose This Service?</h4>
              <p>
                We provide high-quality solutions tailored to your needs with
                professional support and scalable architecture.
              </p>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

              <img
                src={service.image}
                alt={service.title}
                className="img-fluid services-img"
              />

              <h3 className="mt-3">{service.title}</h3>

              <p>{service.description}</p>

              <ul>
                {service.points.map((point, index) => (
                  <li key={index}>
                    <i className="bi bi-check-circle"></i>
                    <span> {point}</span>
                  </li>
                ))}
              </ul>

              <p>
                Our team ensures top-quality service delivery with modern tools
                and technologies, helping your business grow efficiently.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default ServiceDetails;