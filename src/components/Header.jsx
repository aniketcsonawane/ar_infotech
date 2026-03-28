import { NavLink } from "react-router-dom";

const Header = () => {

  const menus = [
    {
      name: "Home", path: "/"
    },
    {
      name: "About Us", path: "/about_us"
    },
    {
      name: "Services", path: "/services"
    },
    // {
    //   name: "Portfolio", path: "/portfolio"
    // },
    // {
    //   name: "Team", path: "/team"
    // },
    {
      name: "Contact", path: "/contact-us"
    },
  ];

  return (
    <header className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <h1 className="text-3xl font-bold uppercase tracking-wide"><span className="text-[#1ea0e1]">AR</span> <span className="text-[#054296] font-[Orbitron]">infotech</span></h1>
        </a>

        <nav className="navmenu">
          <ul>
            {menus.map((menu, index) => {
              return <li key={index}> <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={menu.path} > {menu.name}</NavLink></li>
            })}
          </ul>
        </nav>

        <a className="cta-btn" href="#about">Get Started</a>

      </div>
    </header>
  );
};

export default Header;