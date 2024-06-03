import NavBar from "./global/NavBar";
import Partner from "./global/Partner";
import Footer from "./global/Footer";
import aboutUs from '../assets/about-us.jpg'
import aboutUs2 from '../assets/about-us-2.png'
import aboutUs3 from '../assets/about-us-3.png' 

const AboutUs = () => {
    return (
        <>
          <header>
                <div
                className="bg-image"
                style={{
                    backgroundImage:`url(${aboutUs})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    height: '600px',
                }}
                >
                    <NavBar/>
                    <div className="px-4 py-5 my-5 text-center text-white">
                      <h1 className="display-5 fw-bold mb-5">About Us</h1>
                      <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4"><i className="bi bi-house-door me-4"></i>Home &nbsp;&nbsp;&nbsp; {">"} &nbsp;&nbsp;&nbsp; About Us</p>
                      </div>
                    </div>
                </div>
            </header>

            <main className="main">
              <section className="my-5">
                  <div className="container">
                      <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                          <div className="col-12 col-lg-6 col-xl-6">
                              <img className="img-fluid rounded" loading="lazy" src={aboutUs2} alt="About Us" />
                          </div>
                          <div className="col-12 col-lg-6 col-xl-6">
                              <div className="row justify-content-xl-center">
                                  <div className="col-12 col-xl-11">
                                      <h6 className="text-bms-secondary bms-spacing mb-3 fw-bold">ABOUT US</h6>
                                      <h2 className="h1 mb-3 text-bms-primary fw-bold">We Are Professional Online Booking Platform</h2>
                                      <p className="mb-5"><strong>BookMediServices</strong> is a website that allows clients to find & book healthcare booking platform. It’s a leading digital consumer healthcare booking platform.We bridge the gap in making it easy for clients to find & meet their diagnostic needs. We book appoinments free of charge & make it convenient & simple!</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="d-flex align-items-center justify-content-center bg-bms-primary py-5" >
                <div className="row row-cols-1 row-cols-md-3 g-5">
                  <div className="col">
                      <div className="card h-100 text-center d-flex align-items-center p-5 mx-3">
                          <i className="text-bms-secondary bi bi-eye-fill card-img-top fs-1"></i>
                          <div className="card-body text-bms-primary">
                            <h5 className="card-title fw-semibold fs-3">Vision</h5>
                            <p className="card-text mt-3">Accessible healthcare to clients.</p>                            
                          </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="card h-100 text-center d-flex align-items-center p-5 mx-3">
                          <i className="text-bms-secondary bi bi-heart-pulse-fill card-img-top fs-1"></i>
                          <div className="card-body text-bms-primary">
                            <h5 className="card-title fw-semibold fs-3">Mission</h5>
                            <p className="card-text mt-3">Easy accessibility to healthcare providers.</p>
                          </div>
                      </div>
                  </div>

                  <div className="col">
                      <div className="card h-100 text-center d-flex align-items-center p-5 mx-3">
                          <i className="text-bms-secondary bi bi-trophy-fill card-img-top fs-1"></i>
                          <div className="card-body text-bms-primary">
                            <h5 className="card-title fw-semibold fs-3">Motto</h5>
                            <p className="card-text mt-3">Being loyal to healthcare.</p>
                          </div>
                      </div>
                  </div>                   
                </div>
              </section>

              <section className="my-5">
                    <div className="container">
                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                            <div className="col-12 col-lg-6 col-xl-6">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <h6 className="text-bms-secondary bms-spacing mb-3 fw-bold">OUR VALUES</h6>
                                        <div className="mb-2">
                                          <p className="lh-base"><strong>Quality - </strong>Giving attention to patients through diagnosis follow up & also observing our turnaround times against uncompromising quality results.</p>
                                        </div>
                                        <div className="mb-2">
                                          <p className="lh-base"><strong>Integrity - </strong>Our decisions, actions & all the laboratory services are integrity driven through honesty with ourselves & our customers, with strict compliance to healthcare laws & regulations.</p>
                                        </div>
                                        <div className="mb-2">
                                          <p className="lh-base"><strong>Leadership - </strong>Diligent, courageous, competent & confident application of our skills with a passion to surpass our expectations.</p>
                                        </div>
                                        <div className="mb-2">
                                          <p className="lh-base"><strong>Caring - </strong>Provision of an effective public healthcare system for overall care & well-being of patients.</p>
                                        </div>
                                        <div className="mb-2">
                                          <p className="lh-base"><strong>Collaboration - </strong>Bound by unity & unanimous goals, we shall maximize on the wisdom & skills base of team members.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-6">
                                <img className="img-fluid rounded" loading="lazy" src={aboutUs3} alt="About Us" />
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
 
export default AboutUs;