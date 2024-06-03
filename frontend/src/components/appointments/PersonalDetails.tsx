import React, { useState } from "react";

interface PersonalDetailsProps {
    handleForm4: (data: { firstName: string; lastName: string; phoneNumber: string; email: string; gender: string; age: number }) => void;
    handlePrevious: () => void;
    loading: boolean;
}

const phoneRegex = /^\+\d{3}\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const PersonalDetails: React.FC<PersonalDetailsProps> = ({handleForm4, handlePrevious, loading}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [genderError, setGenderError] = useState("");
    const [ageError, setAgeError] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
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


        if(gender === ""){
            setGenderError("Enter gender")
            return
        }

        if(!(age > 0)){
            setAgeError("Enter age")
            return
        }


        handleForm4({firstName, lastName, phoneNumber, email, gender, age})

        setFirstName("")
        setLastName("")
        setPhoneNumber("")
        setEmail("")
        setGender("")
        setAge(0)
    }

    return (
        <form className="row g-3 fw-bold" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                First Name
                </label>
                <input type="text" className="form-control bms-form text-bms-secondary h-75" id="firstName" placeholder="First Name" value={firstName} onChange={(e) =>  {setFirstName(e.target.value); setFirstNameError("")}}/>
                {firstNameError !== "" && <div className="text-danger fw-normal">{firstNameError}</div>}
            </div>
            <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                Last Name
                </label>
                <input type="text" className="form-control bms-form text-bms-secondary h-75" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value); setLastNameError("")}}/>
                {lastNameError !== "" && <div className="text-danger fw-normal">{lastNameError}</div>}
            </div>
            <div className="col-md-6 mt-5">
                <label htmlFor="phoneNumber" className="form-label">
                Phone Number
                </label>
                <input type="text" className="form-control bms-form text-bms-secondary h-75" id="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value); setPhoneNumberError("")}}/>
                {phoneNumberError !== "" && <div className="text-danger fw-normal">{phoneNumberError}</div>}
            </div>
            <div className="col-md-6 mt-5">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="email" className="form-control bms-form text-bms-secondary h-75" id="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value); setEmailError("")}} autoComplete="email"/>
                {emailError !== "" && <div className="text-danger fw-normal">{emailError}</div>}
            </div>
            <div className="col-md-6 mt-5">
                <label htmlFor="gender" className="form-label">
                    Gender
                </label>
                <select className="form-select bms-form text-bms-secondary h-75" id="gender" aria-label="Gender" value={gender} onChange={(e) => {setGender(e.target.value); setGenderError("")}}>
                    <option value="" disabled selected>Select gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
                {genderError !== "" && <div className="text-danger fw-normal">{genderError}</div>}
            </div>
            <div className="col-md-6 mt-5">
                <label htmlFor="age" className="form-label">
                Age
                </label>
                <input type="number" className="form-control bms-form text-bms-secondary h-75" id="age" placeholder="Age" min="0" value={age} onChange={(e) => {setAge(e.target.valueAsNumber); setAgeError("")}}/>
                {ageError !== "" && <div className="text-danger fw-normal">{ageError}</div>}
            </div>
            

            <div className="col-12 mt-5 d-flex justify-content-between">
                <button type="button" className="btn btn-lg btn-bms-primary w-25" onClick={handlePrevious}>
                    Previous
                </button>

                {/* <button type="submit" className="btn btn-lg btn-primary btn-bms-primary w-25 ml-auto">
                    Submit
                </button> */}

                {
                    loading ? (
                        <button type="submit" className="btn btn-lg btn-bms-primary w-25 ml-auto disabled">
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        </button>
                    ) : (
                        <button type="submit" className="btn btn-lg btn-bms-primary w-25 ml-auto">
                            Submit
                        </button>
                    )
                }
            </div>
        </form>
      );
}
 
export default PersonalDetails;