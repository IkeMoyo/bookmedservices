import NavBar from "./global/NavBar";
import Partner from "./global/Partner";
import Footer from "./global/Footer";
import bookmediservices from '../assets/bookmediservices.png'
import bmsqrcode from '../assets/bookmediservcies whatsapp qr code.jpeg'
import aboutUs from '../assets/about-us-2.png'
import testimonial from '../assets/testimonial.png'

const Home = () => {
    return (
        <>
            <header>
                <div
                className="bg-image"
                style={{
                    backgroundImage:`url(${bookmediservices})`,
                    backgroundSize: '120%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    height: '750px',
                    borderRadius: '0 0 200px 200px' 
                }}
                >
                    <NavBar/>
                    <center>
                        <div className="w-65 p-5" style={{ backgroundColor: 'rgb(222, 225, 231)' }}>
                            <div className="h-100">
                                <div>
                                    <h6 className="mb-5 text-bms-secondary bms-spacing d-flex align-items-start justify-content-start fw-bold">Welcome To Book<span className='text-bms-primary'>Medi</span>Services</h6>
                                    <h1 className="mb-5 text-bms-primary d-flex align-items-start justify-content-start fw-bold">Booking clients made easy, simple and with convenience</h1> 
                                    <div className="d-flex align-items-start justify-content-start">
                                        <a
                                        className="btn btn-lg btn-bms-primary bms-spacing rounded-1"
                                        href="/about-us"
                                        role="button"
                                        >
                                        Discover More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 d-none d-md-block">
                            <div className="col">
                                <div className="card text-center bg-bms-primary p-4 w-50 my-5">
                                    <i className="text-bms-secondary bi bi-hospital-fill card-img-top fs-1"></i>
                                    <div className="card-body">
                                        <h5 className="card-title text-white fw-semibold fs-1">Doctors Appointments</h5>
                                        <p className="card-text text-bms-secondary fs-4">Comprehensive Specialists Assessments.</p>
                                        <a className="btn btn-lg btn-bms-secondary bms-spacing rounded-1 mt-4 w-25" href="/doctors-appointment" role="button">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </header>

            <section className="hero">
                <div className="row row-cols-1 row-cols-md-5 g-5 m-5">
                    <div className="col">
                        
                    </div>

                    <div className="col d-block d-md-none">
                        <div className="card h-100 text-center d-flex align-items-center bg-bms-primary p-4">
                            <i className="text-bms-secondary bi bi-hospital-fill card-img-top fs-1"></i>
                            <div className="card-body">
                            <h5 className="card-title text-white fw-semibold fs-3">Doctors Appointments</h5>
                            <p className="card-text text-bms-secondary">Comprehensive Specialists Assessments.</p>
                            <a className="btn btn-md btn-bms-secondary bms-spacing rounded-1 mt-4" href="/doctors-appointment" role="button">Book Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 text-center d-flex align-items-center bg-bms-primary p-4">
                            <i className="text-bms-secondary bi bi-capsule card-img-top fs-1"></i>
                            <div className="card-body">
                            <h5 className="card-title text-white fw-semibold fs-3">E - Pharmacy</h5>
                            <p className="card-text text-bms-secondary">Order medicines online and get it delivered from a licensed pharmacy.</p>
                            <a className="btn btn-md btn-bms-secondary bms-spacing rounded-1 mt-4" href="/" role="button">Book Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 text-center d-flex align-items-center bg-bms-primary p-4">
                            <i className="text-bms-secondary bi bi-lungs-fill card-img-top fs-1"></i>
                            <div className="card-body">
                            <h5 className="card-title text-white fw-semibold fs-3">Radiological Services</h5>
                            <p className="card-text text-bms-secondary">Elevate Wellness with Advanced Blood Tests.</p>
                            <a className="btn btn-md btn-bms-secondary bms-spacing rounded-1 mt-4" href="/" role="button">Book Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 text-center d-flex align-items-center bg-bms-primary p-4">
                            <i className="text-bms-secondary bi bi-virus2 card-img-top fs-1"></i>
                            <div className="card-body">
                            <h5 className="card-title text-white fw-semibold fs-3">Pathological Services</h5>
                            <p className="card-text text-bms-secondary">Empowering Wellness Through Pathological Excellence.</p>
                            <a className="btn btn-md btn-bms-secondary bms-spacing rounded-1 mt-4" href="/" role="button">Book Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={bmsqrcode} alt="BookMediServices WhatsApp QR Code"/>
                </div>
            </section>

            <main className="main">
                <section className="my-5">
                    <div className="container">
                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                            <div className="col-12 col-lg-6 col-xl-6">
                                <img className="img-fluid rounded" loading="lazy" src={aboutUs} alt="About Us" />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-6">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <h6 className="text-bms-secondary bms-spacing mb-3 fw-bold">ABOUT US</h6>
                                        <h2 className="h1 mb-3 text-bms-primary fw-bold">We Are Professional Online Booking Platform</h2>
                                        <p className="mb-5"><strong>BookMediServices</strong> is a website that allows clients to find & book healthcare providers. It’s a leading digital consumer healthcare booking platform....</p>
                                        <a className="btn btn-lg btn-bms-primary bms-spacing rounded-1" href="/about-us" role="button">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonial" className="testimonial-parent">
                    <div
                    className="bg-image position-relative"
                    style={{
                        backgroundImage:`url(${testimonial})`,
                        backgroundSize: '120%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        height: '550px',
                    }}
                    >
                        <div className="testimonial-child w-75 ">
                            <div className="row row-cols-1">
                                <div className="col">
                                    <div className="card p-4 my-5 rounded-1 shadow-lg">
                                        <div className="card-body">
                                            <h6 className="text-bms-secondary text-center bms-spacing mb-3 fw-bold">TESTIMONIAL</h6>
                                            <h2 className="h1 mb-5 text-center text-bms-primary fw-bold">What They Say</h2>
                                            <div className="row row-cols-1 row-cols-md-3 g-5">
                                                <div className="col">
                                                    <div className="card h-100 bg-body-secondary border-0 bg-opacity-75 p-4">
                                                        <div className="star-icons">
                                                            <i className="text-warning text-opacity-75 text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5"></i>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse.</p>
                                                            <i className="bi bi-person-circle fs-4 me-3"></i><strong className="fs-4">John Doe</strong>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="card h-100 bg-body-secondary border-0 bg-opacity-75 p-4">
                                                        <div className="star-icons">
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5"></i>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse.</p>
                                                            <i className="bi bi-person-circle fs-4 me-3"></i><strong className="fs-4">John Doe</strong>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="card h-100 bg-body-secondary border-0 bg-opacity-75 p-4">
                                                        <div className="star-icons">
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5 me-2"></i>
                                                            <i className="text-warning text-opacity-75 bi bi-star-fill fs-5"></i>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse.</p>
                                                            <i className="bi bi-person-circle fs-4 me-3"></i><strong className="fs-4">John Doe</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Partner/>
            </main>

            <Footer/>
        </>
        
      );
}
 
export default Home;