import { useState } from "react";
import axios from "axios";
import NavBar from "./global/NavBar";
import MoreInfo from "./global/MoreInfo";
import Footer from "./global/Footer";
import joinUs from "../assets/join-us.jpg"
import joinUs2 from "../assets/join-us-2.jpg"

const phoneRegex = /^\+\d{3}\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const JoinUs = () => {
    const [loading, setLoading] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [organisation, setOrganisation] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [organisationError, setOrganisationError] = useState("");

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

      if(organisation === ""){
        setOrganisationError("Enter name of organisation")
        return
      }

      setLoading(true);

      try {
          const response = await axios.post("http://127.0.0.1:8000/api/doctors/", {
              first_name: firstName,
              last_name: lastName,
              email,
              phone_number: phoneNumber,
              organisation
          });

          console.log(response.data);

          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setOrganisation("");

          alert("Application sent");

      } catch (error: any) {
          alert(error.response.data.error);
      } finally {
        setLoading(false);
    }
    };

    return (
        <>
          <header>
              <div
              className="bg-image"
              style={{
                  backgroundImage:`url(${joinUs})`,
                  backgroundSize: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  height: '600px',
              }}
              >
                  <NavBar/>
                  <div className="px-4 py-5 my-5 text-center text-white">
                    <h1 className="display-5 fw-bold mb-5">Join Us</h1>
                    <div className="col-lg-6 mx-auto">
                      <p className="lead mb-4"><i className="bi bi-house-door me-4"></i>Home &nbsp;&nbsp;&nbsp; {">"} &nbsp;&nbsp;&nbsp; Join Us</p>
                    </div>
                  </div>
              </div>
          </header>

          <main className="main">
            <section className="my-5">
              <div className="container d-flex align-items-center justify-content-center">
                <img className="img-fluid w-50 mb-5" loading="lazy" src={joinUs2} alt="Join Us" />
              </div>        
            </section>

            <section className="d-flex align-items-center justify-content-center" style={{height:"600px"}}>
              <div className="col ">
                <div className="card p-4 my-5 shadow-lg bg-bms-primary rounded-0">
                  <div className="card-body">
                    <div className="row ">
                      <div className="col-12 col-lg-4 col-xl-4 py-3">
                        <div className="row justify-content-xl-center">
                            <div className="col-12 col-xl-11 text-white w-75 mt-5">
                              <h2 className="h1 mb-3 fw-bold">Get more patient bookings</h2>
                              <p className="mb-5">BookMediServices is a website & app that patients find medical service providers & book.</p>
                            </div>
                        </div>
                      </div>
                      
                      <div className="col-12 col-lg-3 col-xl-3 py-3"></div>
                      
                      <div className="col-12 col-lg-4 col-xl-4 py-3 bg-white rounded-3  py-5">
                          <div className="row justify-content-xl-center">
                              <div className="col-12 col-xl-11">
                                  <h6 className="text-bms-secondary bms-spacing mb-3 fw-bold">FILL FORM</h6>
                                  <h2 className="h1 mb-3 text-bms-primary fw-bold w-60">Leave your details & we will get back to you</h2>
                                  <hr className="w-15 text-bms-secondary"/>
                                  
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
                                          <input type="email" className="form-control bms-form text-bms-secondary h-75" id="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value); setEmailError("")}}/>
                                          {emailError !== "" && <div className="text-danger fw-normal">{emailError}</div>}
                                      </div>
                                      <div className="col-12 mb-4">
                                          <label htmlFor="organisation" className="form-label">
                                          Name of Organisation
                                          </label>
                                          <input type="text" className="form-control bms-form text-bms-secondary h-75" id="organisation" placeholder="Name of Organisation" value={organisation} onChange={(e) => {setOrganisation(e.target.value); setOrganisationError("")}}/>
                                          {organisationError !== "" && <div className="text-danger fw-normal">{organisationError}</div>}
                                      </div>
              
                                      <div className="col-12 mb-4">
                                          {
                                            loading ? (
                                                <button className="btn btn-lg btn-bms-primary w-100 disabled">
                                                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                                </button>
                                            ) : (
                                                <button type="submit" className="btn btn-lg btn-bms-primary w-100">
                                                    Submit
                                                </button>
                                            )
                                          }
                                      </div>
                                  </form>
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
 
export default JoinUs;