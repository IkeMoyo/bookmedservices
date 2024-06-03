import bookmediserviceslogo from '../../assets/Bookmediservices Logo-01.svg'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand bms-link" href="/">
                <img src={bookmediserviceslogo} alt="BookMediServices" width="150"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fw-bold" id="navbarNavDropdown">
              <ul className="navbar-nav offset-1">
                <li className="nav-item">
                    <a className="nav-link bms-link me-4 text-bms-primary" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link bms-link me-4 text-bms-primary" href="/about-us">About Us</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link bms-link dropdown-toggle me-4 text-bms-primary" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item service-link text-bms-primary fw-bold" href="/">Doctors Appointments</a></li>
                        <li><a className="dropdown-item service-link text-bms-primary fw-bold" href="/">E-Pharmacy</a></li>
                        <li><a className="dropdown-item service-link text-bms-primary fw-bold" href="/">Radiological Services</a></li>
                        <li><a className="dropdown-item service-link text-bms-primary fw-bold" href="/">Pathological Services</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link me-2 text-bms-primary bms-link" href="/contact-us">Contact Us</a>
                </li>
              </ul>
              <div className="text-center ms-auto me-5">
                <a href="/join-us" role="button" className="btn btn-lg btn-bms-primary rounded-1 fs-3">Join Us</a>
              </div>            
            </div>
          </div>
        </nav>
      );
}
 
export default NavBar;