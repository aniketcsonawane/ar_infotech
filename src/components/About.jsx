const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-6">
            <h3>Voluptatem dignissimos provident laboris</h3>
            <img
              src="/src/assets/img/about.jpg"
              className="img-fluid rounded-4 mb-4"
            />
            <p>Lorem ipsum dolor sit amet...</p>
          </div>

          <div className="col-lg-6">
            <p className="fst-italic">
              Lorem ipsum dolor sit amet...
            </p>

            <ul>
              <li>✔ Ullamco laboris nisi ut aliquip</li>
              <li>✔ Duis aute irure dolor</li>
              <li>✔ Ullamco laboris nisi ut aliquip</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;