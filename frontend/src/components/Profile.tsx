import NavBar from "./global/NavBar";
import MoreInfo from "./global/MoreInfo";
import Footer from "./global/Footer";
import profile from "../assets/profile.jpg"
import doctor from "../assets/doctor.jpg"

const   Profile = () => {
    return (
        <>
            <header>
                <div
                className="bg-image"
                style={{
                    backgroundImage:`url(${profile})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    height: '600px',
                }}
                >
                    <NavBar/>
                    <div className="px-4 py-5 my-5 text-center text-white">
                      <h1 className="display-5 fw-bold mb-5">Profile</h1>
                      <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4"><i className="bi bi-house-door me-4"></i>Home &nbsp;&nbsp;&nbsp; {">"} &nbsp;&nbsp;&nbsp; Profile</p>
                      </div>
                    </div>
                </div>
            </header>

            <main className="main">
                <section className="my-5">
                    <div className="container">
                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                            <div className="col-12 col-lg-2 col-xl-2"></div>
                            <div className="col-12 col-lg-4 col-xl-4 shadow-lg p-5 me">
                                <img className="img-fluid rounded" loading="lazy" src={doctor} alt="Doctor" />
                                <div className="d-flex align-items-center justify-content-center my-3">
                                    <a className="d-inline-block me-3 a-footer fs-4"><i className="text-bms-secondary bi bi-facebook m-1"></i></a>
                                    <a className="d-inline-block me-3 a-footer fs-4"><i className="text-bms-secondary bi bi-twitter-x m-1"></i></a>
                                    <a className="d-inline-block me-3 a-footer fs-4"><i className="text-bms-secondary bi bi-instagram m-1"></i></a>
                                </div>
                                <h2 className="h3 text-bms-primary mb-3 fw-bold">Dr. John Doe</h2>
                                <h5 className="mb-3 text-bms-primary bms-spacing">CARDIOLOGY</h5>
                                <hr className="w-15 text-bms-secondary"/>
                                <p className="lh-base"><strong>Experience: </strong>14 years</p>
                                <p className="lh-base"><strong>Office Hours: </strong>8AM - 6PM (Mon - Fri)</p>
                                <p className="lh-base"><strong>Phone: </strong>+263 787 715 129</p>
                                <p className="lh-base"><strong>Email: </strong>johndoe@gmail.com</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn btn-md btn-bms-secondary bms-spacing rounded-1 mt-4" href="/doctors-appointment" role="button">Book Now</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-1 col-xl-1"></div>
                            <div className="col-12 col-lg-5 col-xl-5">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <h6 className="text-bms-secondary bms-spacing mb-3 fw-bold">WHO AM I</h6>
                                        <h2 className="h1 mb-3 text-bms-primary fw-bold">Professional Summary</h2>
                                        <p className="mb-5">Dedicated and highly skilled Medical Doctor with 7 years of experience in Cardiology. Adept at providing compassionate and evidence-based patient care, I have a comprehensive understanding of medical sciences and a proven track record of successful diagnoses and treatment. My commitment to continuous learning, effective communication, and patient advocacy positions me as an ideal candidate for contributing to a dynamic healthcare team.</p>
                                        <h2 className="h1 mb-3 text-bms-primary fw-bold">Qualifications</h2>
                                        <div className="mb-2">
                                          <p className="lh-base"><strong>Institution: </strong>University of Zimbabwe (UZ)</p>
                                          <p className="lh-base"><strong>Study: </strong>Doctor of Medicine</p>
                                          <p className="lh-base"><strong>Class: </strong>2007</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonial-parent">
                    <div
                    className="bg-image position-relative"
                    style={{
                        backgroundImage:`url(${profile})`,
                        backgroundSize: '120%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        height: '550px',
                    }}
                    >
                        <div className="testimonial-child w-75">
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

                <MoreInfo/>
            </main>

            <Footer/>
        </>
      );
}
 
export default Profile;