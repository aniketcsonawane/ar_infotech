// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="d-flex align-items-center"
//       style={{
//         backgroundImage: `url(/src/assets/img/hero-bg.jpg)`
//       }}
//     >
//       <div className="container text-center">
//         <h1>Better digital experience with Dewi</h1>
//         <h2>We are team of talented designers</h2>
//         <a href="#about" className="btn-get-started">
//           Get Started
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
const Hero = () => {
  return (
    <section
      id="hero"
      className="hero section dark-background"
      style={{
        backgroundImage: "url(/src/assets/img/hero-bg.jpg)",
        backgroundSize: "cover"
      }}
    >
      <div className="container text-center">
        <h2>PLAN. LAUNCH. GROW.</h2>
        <p>
          Empowering Businesses with Smart Software Solutions.
        </p>
        {/* <p>
          <small>
            Authorized Tally Partners providing seamless integration, customization, and 24/7 technical support.
          </small>
        </p> */}

        <div className="mt-4">
          <a href="#about" className="btn-get-started me-3">
            Get Started
          </a>

          <a href="#" className="btn-watch-video">
            Watch Video
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;