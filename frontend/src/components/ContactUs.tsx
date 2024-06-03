import { useState } from 'react';
import axios from 'axios';
import NavBar from "./global/NavBar";
import Footer from "./global/Footer";
import contactUs from "../assets/contact-us.jpg"

const phoneRegex = /^\+\d{3}\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactUs = () => {
    const [loading, setLoading] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessageError] = useState("");

    const getCookie = (name: any) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(firstName === ""){
            setFirstNameError("Enter first name")
            return
        }

        if(lastName === ""){
            setLastNameError("Enter last name")
            return
        }


        if(phoneNumber === ""){
            setPhoneNumberError("Enter phone number")
            return
        }

        if(!phoneRegex.test(phoneNumber)){
            setPhoneNumberError("Enter valid phone number")
            return
        }

        if(email === ""){
            setEmailError("Enter email")
            return
        }

        if(!emailRegex.test(email)){
            setEmailError("Enter valid email")
            return
        }


        if(subject === ""){
            setSubjectError("Enter subject")
        }

        if(message === ""){
            setMessageError("Enter message")
            return
        }

        setLoading(true);

        try {
            await axios.post('http://127.0.0.1:8000/api/contact-us/', {
              firstName,
              lastName,
              email,
              phoneNumber,
              subject,
              message
          }, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        });

          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setSubject("");
          setMessage("");

          alert("Message sent");
          
        } catch (error) {
            alert("Message not set. Please try again");
        } finally {
            setLoading(false);
        }
        

    }

    return (
    <>
        <header>
            <div
            className="bg-image"
            style={{
                backgroundImage:`url(${contactUs})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: '600px',
            }}
            >
                <NavBar/>
                <div className="px-4 py-5 my-5 text-center text-white">
                <h1 className="display-5 fw-bold mb-5">Contact Us</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4"><i className="bi bi-house-door me-4"></i>Home &nbsp;&nbsp;&nbsp; {">"} &nbsp;&nbsp;&nbsp; Contact Us</p>
                </div>
                </div>
            </div>
        </header>

        <main className="main" style={{marginBottom: "600px"}}>
            <section className="my-5">
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center justify-content-center">
                        <div className="col-12 col-lg-5 col-xl-5 shadow-lg p-5 me-3" style={{height:"700px"}}>
                        <h6 className="text-bms-secondary bms-spacing mb-3 fw-bold">LOCATION</h6>
                        <h2 className="h1 mb-3 text-bms-primary fw-bold">Get In Touch</h2>
                        <hr className="w-15 text-bms-secondary"/>
                        <p className="fw-bold my-3">Head Office</p>
                        <p className="fw-medium"><i className="text-bms-secondary bi bi-geo-alt-fill me-2"></i>1 Ross Avenue, Belgravia, Harare, Zimbabwe</p>
                        <p className="fw-medium"><i className="text-bms-secondary bi bi-telephone-fill me-2"></i>+263 8644 309 780</p>
                        <p className="fw-medium"><i className="text-bms-secondary bi bi-envelope-fill me-2"></i>info@bookmediservices.co.zw</p>         
                        </div>
                        <div className="col-12 col-lg-6 col-xl-6">
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.6379967472512!2d31.041652476016033!3d-17.80870258315216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5adb301ea11%3A0x6de3dded2c7beded!2sDilon%20Curis%20Medical%20Centre!5e0!3m2!1sen!2szw!4v1704704855184!5m2!1sen!2szw"
                                width="650"
                                height="850"
                                style={{ border: '0' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial-parent">
                <div
                className="bg-image position-relative"
                style={{
                    backgroundImage:`url(${contactUs})`,
                    backgroundSize: '120%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    height: '550px',
                }}
                >
                    <div className="testimonial-child w-75">
                        <div className="row row-cols-1">
                            <div className="col">
                                <div className="card p-4 my-5 shadow-lg">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 col-xl-6 py-3">
                                                <div className="row justify-content-xl-center">
                                                    <div className="col-12 col-xl-11">
                                                        <h6 className="text-bms-secondary bms-spacing mb-3 fw-bold">CONTACT</h6>
                                                        <h2 className="h1 mb-3 text-bms-primary fw-bold">Let's Have a Talk</h2>
                                                        <hr className="w-15 text-bms-secondary mb-3"/>
                                                        
                                                        <form className="row g-3 fw-bold" onSubmit={handleSubmit}>
                                                            <div className="col-md-6 mb-4">
                                                                <label htmlFor="firstName" className="form-label">
                                                                First Name
                                                                </label>
                                                                <input type="text" className="form-control bms-form text-bms-secondary h-75" id="firstName" placeholder="First Name" value={firstName} onChange={(e) =>  {setFirstName(e.target.value); setFirstNameError("")}}/>
                                                                {firstNameError !== "" && <div className="text-danger fw-normal">{firstNameError}</div>}
                                                            </div>
                                                            <div className="col-md-6 mb-4">
                                                                <label htmlFor="lastName" className="form-label">
                                                                Last Name
                                                                </label>
                                                                <input type="text" className="form-control bms-form text-bms-secondary h-75" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value); setLastNameError("")}}/>
                                                                {lastNameError !== "" && <div className="text-danger fw-normal">{lastNameError}</div>}
                                                            </div>
                                                            <div className="col-md-6 mb-4">
                                                                <label htmlFor="phoneNumber" className="form-label">
                                                                Phone Number
                                                                </label>
                                                                <input type="text" className="form-control bms-form text-bms-secondary h-75" id="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value); setPhoneNumberError("")}}/>
                                                                {phoneNumberError !== "" && <div className="text-danger fw-normal">{phoneNumberError}</div>}
                                                            </div>
                                                            <div className="col-md-6 mb-4">
                                                                <label htmlFor="email" className="form-label">
                                                                Email
                                                                </label>
                                                                <input type="email" className="form-control bms-form text-bms-secondary h-75" id="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value); setEmailError("")}} autoComplete="email"/>
                                                                {emailError !== "" && <div className="text-danger fw-normal">{emailError}</div>}
                                                            </div>
                                                            <div className="col-12 mb-4">
                                                                <label htmlFor="subject" className="form-label">
                                                                Subject
                                                                </label>
                                                                <input type="text" className="form-control bms-form text-bms-secondary h-75" id="subject" placeholder="Subject" value={subject} onChange={(e) => {setSubject(e.target.value); setSubjectError("")}}/>
                                                                {subjectError !== "" && <div className="text-danger fw-normal">{subjectError}</div>}
                                                            </div>

                                                            <div className="col-12 mb-4">
                                                                <label htmlFor="message" className="form-label">
                                                                Message
                                                                </label>
                                                                <textarea
                                                                    className="form-control bms-form text-bms-secondary"
                                                                    placeholder="Message..."
                                                                    id="message"
                                                                    style={{ height: '100px' }}
                                                                    value={message} 
                                                                    onChange={(e) => {setMessage(e.target.value); setMessageError("")}}
                                                                ></textarea>
                                                                {messageError !== "" && <div className="text-danger fw-normal">{messageError}</div>}
                                                            </div>
                                    
                                                            <div className="col-12">
                                                                {
                                                                    loading ? (
                                                                        <button className="btn btn-lg btn-bms-primary w-100 disabled">
                                                                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                                                        </button>
                                                                    ) : (
                                                                        <button type="submit" className="btn btn-lg btn-bms-primary w-100">
                                                                            Send
                                                                        </button>
                                                                    )
                                                                }
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6 col-xl-6 py-3 d-none d-md-block">
                                                <div className="row justify-content-xl-center">
                                                    <div className="col-12 col-xl-11">
                                                        <h6 className="text-bms-secondary bms-spacing mb-3 fw-bold">SOCIAL</h6>
                                                        <h2 className="h1 mb-3 text-bms-primary fw-bold">Connect With Us</h2>
                                                        <hr className="w-15 text-bms-secondary"/>
                                                        <a className="d-inline-block me-3 a-footer"><i className="text-bms-secondary bi bi-facebook m-1 fs-4"></i></a>
                                                        <a className="d-inline-block me-3 a-footer"><i className="text-bms-secondary bi bi-twitter-x m-1 fs-4"></i></a>
                                                        <a className="d-inline-block me-3 a-footer"><i className="text-bms-secondary bi bi-instagram m-1 fs-4"></i></a>
                                                        <a className="d-inline-block a-footer"><i className="text-bms-secondary bi bi-whatsapp m-1 fs-4"></i></a>
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
        </main>

        <Footer/>
    </>
      );
}
 
export default ContactUs;