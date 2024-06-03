import { useState } from "react";
import axios from "axios";
import NavBar from "./global/NavBar";
import Pagination from "./global/Pagination";
import Speciality from "./appointments/Speciality";
import Doctors from "./appointments/Doctors";
import DateTime from "./appointments/DateTime";
import PersonalDetails from "./appointments/PersonalDetails";
import MoreInfo from "./global/MoreInfo";
import Footer from "./global/Footer";
import doctorsAppointment from "../assets/doctors-appointment.jpg"
import doctorsAppointment2 from "../assets/doctors-appointment-2.jpg"
import doctorsAppointment3 from "../assets/doctors-appointment-3.jpg"


const Appointment = () => {
    const [loading, setLoading] = useState(false);

    const [step, setStep] = useState(1);
    const [speciality, setSpeciality] = useState("");
    const [city, setCity] = useState("");
    const [reason, setReason] = useState("");
    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

     // Get Cookies
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

    const handlePrevious = () => {
        setStep(prevStep =>  prevStep - 1)
    }

    const handleNext = () => {
        setStep(prevStep =>  prevStep + 1)
    }

    const handleForm1 = (data: { speciality: string; city: string; reason: string}) => {
        setSpeciality(data.speciality)
        setCity(data.city)
        setReason(data.reason)

        handleNext()
    }

    const handleForm2 = (doctor: string) => {
        setDoctor(doctor)

        handleNext()
    }

    const handleForm3 = (data: {date: string; time: string}) => {
        setDate(data.date)
        setTime(data.time)

        handleNext()
    }

    const handleForm4 = async (data: {firstName: string; lastName: string; phoneNumber: string; email: string; gender: string, age: number}) => {
        setLoading(true);

        try {
    
            const response = await axios.post("http://127.0.0.1:8000/api/customers/", {
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                phone_number: data.phoneNumber,
                gender: data.gender,
                age: data.age
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                }
            });
    
            const customer = response.data.id;
            console.log(customer)
    
            const response2 = await axios.post("http://127.0.0.1:8000/api/appointments/", {
                customer,
                doctor,
                speciality,
                city,
                reason,
                date,
                time
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                }
            });
            
            console.log(response2.data)
    
            alert("Appointment Booked")
        } catch (error) {
            alert("Appointment booking failed. Please try again!")
        } finally {

            setStep(1)
            setSpeciality("")
            setCity("")
            setReason("")
            setDoctor("")
            setDate("")
            setTime("")
            setLoading(false)
        }
    }
    

    return (
        <>
          <header>
                <div
                className="bg-image"
                style={{
                    backgroundImage:`url(${doctorsAppointment})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    height: '600px',
                }}
                >
                    <NavBar/>
                    <div className="px-4 py-5 my-5 text-center text-white">
                      <h1 className="display-5 fw-bold mb-5">Doctors Appointment</h1>
                      <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4"><i className="bi bi-house-door me-4"></i>Home &nbsp;&nbsp;&nbsp; {">"} &nbsp;&nbsp;&nbsp; Doctors Appointment</p>
                      </div>
                    </div>
                </div>
            </header>

            <main className="main">
              <section className="my-5">
                <div className="container d-flex align-items-center justify-content-center">
                  <img className="img-fluid w-50 mb-5" loading="lazy" src={doctorsAppointment2} alt="Doctors Appointment" />
                </div>        
              </section>

              <section className="d-flex align-items-center justify-content-center" style={{height:"600px"}}>
                      <div className="col ">
                          <div className="card p-4 my-5 shadow-lg bg-bms-primary rounded-0">
                              <div className="card-body">
                                <div className="row ">
                                    <div className="col-12 col-lg-2 col-xl-2 py-3"></div>
                                    <div id="doctorsAppointment3" className="col-12 col-lg-4 col-xl-4 py-3 d-none d-sm-block">
                                        <div className="row justify-content-xl-center">
                                            <div className="col-12 col-xl-11 text-white w-75 mt-5">
                                                <img className="img-fluid rounded" loading="lazy" src={doctorsAppointment3} alt="Doctors Appointment" />
                                            </div>
                                        </div>
                                    </div>
                                  
                                    <div className="col-12 col-lg-4 col-xl-4 py-3 bg-white rounded-3  py-5">
                                        <div className="row justify-content-xl-center">
                                            <div className="col-12 col-xl-11">
                                                <h6 className="text-bms-secondary bms-spacing mb-3 fw-bold">FILL FORM</h6>
                                                <h2 className="h1 mb-3 text-bms-primary fw-bold ">Book an Appointment</h2>
                                                <hr className="w-15 text-bms-secondary"/>
                                                
                                                <Pagination step={step}/>

                                                {(() => {
                                                    switch (step) {
                                                        case 1:
                                                            return <Speciality handleForm1={handleForm1}/>;
                                                        case 2:
                                                            return <Doctors city={city} speciality={speciality} handleForm2={handleForm2} handlePrevious={handlePrevious} handleNext={handleNext}/>;
                                                        case 3:
                                                            return <DateTime handleForm3={handleForm3} handlePrevious={handlePrevious}/>;
                                                        case 4:
                                                            return <PersonalDetails handleForm4={handleForm4} handlePrevious={handlePrevious} loading={loading}/>;
                                                        default:
                                                            return "";
                                                    }
                                                })()}

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
 
export default Appointment;