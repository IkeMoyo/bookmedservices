import bookmediserviceslogo_2 from '../../assets/Bookmediservices Logo-02.png'

const Footer = () => {
    return ( 
        <footer className="text-center fw-bold  bg-bms-primary text-lg-start text-muted p-1">
            <section>
                <div className="container text-white text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <img src={bookmediserviceslogo_2} alt="BookMediServices" width="150"/>
                        <p><i className="text-bms-secondary bi bi-clock-fill me-2"></i>Office Hours: 24 hrs</p>
                        <p><i className="text-bms-secondary bi bi-telephone-fill me-2"></i>+263 8644 309 780</p>
                        <p><i className="text-bms-secondary bi bi-whatsapp me-2"></i>+263 732 487 408</p>
                        <p><i className="text-bms-secondary bi bi-envelope-fill me-2"></i>info@bookmediservices.co.zw</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-bms-secondary display-4 fw-bold mb-4">
                            Links
                        </h6>
                        <p>
                            <a href="/" className="nav-link text-reset bms-footer-link">Home</a>
                        </p>
                        <p>
                            <a href="/about-us" className="nav-link text-reset">About Us</a>
                        </p>
                        <p>
                            <a href="/contact-us" className="nav-link text-reset">Contact Us</a>
                        </p>
                        <p>
                            <a href="/join-us" className="nav-link text-reset">Join Us</a>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-bms-secondary display-4 fw-bold mb-4">
                            Address
                        </h6>
                        <p>
                            1 Ross Avenue, Belgravia, Harare, Zimbabwe
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto  mb-4">
                        <h6 className="text-bms-secondary display-4 fw-bold mb-4">Connect</h6>
                        <a className="bg-white rounded-circle d-inline-block me-3 a-footer"><i className="text-bms-secondary bi bi-facebook m-1"></i></a>
                        <a className="bg-white rounded-circle d-inline-block me-3 a-footer"><i className="text-bms-secondary bi bi-twitter-x m-1"></i></a>
                        <a className="bg-white rounded-circle d-inline-block me-3 a-footer"><i className="text-bms-secondary bi bi-instagram m-1"></i></a>
                        <a className="bg-white rounded-circle d-inline-block a-footer"><i className="text-bms-secondary bi bi-whatsapp m-1"></i></a>
                    </div>
                </div>
                </div>
            </section>
            <div className="text-center text-bms-primary p-4 bg-body-tertiary">
                Copyright @2024 - <span className='text-bms-secondary'>Book</span>Medi<span className='text-bms-secondary'>Services</span>. All rights reserved.
            </div>
        </footer>
     );
}
 
export default Footer;