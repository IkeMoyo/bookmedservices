import { useState } from "react";

interface SpecialityProps {
    handleForm1: (data: { speciality: string; city: string, reason: string }) => void;
}

const Speciality : React.FC<SpecialityProps> = ({handleForm1}) => {
    const [speciality, setSpeciality] = useState("")
    const [city, setCity] = useState("")
    const [reason, setReason] = useState("")

    const [specialityError, setSpecialityError] = useState("")
    const [cityError, setCityError] = useState("")
    const [reasonError, setReasonError] = useState("")

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(speciality === ""){
            setSpecialityError("Enter speciality")
            return
        }

        if(city === ""){
            setCityError("Enter city")
            return
        }

        if(reason === ""){
            setReasonError("Enter reason for appointment")
            return
        }

        handleForm1({speciality , city, reason})

        setSpeciality("")
        setCity("")
        setReason("")
    }

    return (
        <form className="row g-3 fw-bold" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="speciality" className="form-label">
                    Speciality
                </label>
                <select className="form-select bms-form text-bms-secondary h-75" id="speciality" aria-label="Speciality" value={speciality} onChange={(e) => {setSpeciality(e.target.value); setSpecialityError("")}}>
                    <option value="" disabled selected>Select speciality</option>
                    <option value="Occupational Medicine">Occupational Medicine</option>
                    <option value="Dental Hygiene">Dental Hygiene</option>
                    <option value="Dental Practition">Dental Practition</option>
                    <option value="Dental Therapy">Dental Therapy</option>
                    <option value="Medical Practition">Medical Practition</option>
                    <option value="Anesthesia">Anesthesia</option>
                    <option value="Cardio Vascular & Thoracic">Cardio Vascular & Thoracic</option>
                    <option value="Clinical Immunology">Clinical Immunology</option>
                    <option value="Community Physio">Community Physio</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Family Practition">Family Practition</option>
                    <option value="Forensic Pathology">Forensic Pathology</option>
                    <option value="Haematology">Haematology</option>
                    <option value="Maxillo-Facial & Oral">Maxillo-Facial & Oral</option>
                    <option value="Neuro">Neuro</option>
                    <option value="Obstetrics & Gynaecolgy">Obstetrics & Gynaecolgy</option>
                    <option value="Occupational Physio">Occupational Physio</option>
                    <option value="Ophthalmologist">Ophthalmologist</option>
                    <option value="Oral & Maxillofacial Pathology">Oral & Maxillofacial Pathology</option>
                    <option value="Orthodontic care">Orthodontic care</option>
                    <option value="Orthopaedics">Orthopaedics</option>
                    <option value="Otorhinolaryngology">Otorhinolaryngology</option>
                    <option value="Paediatrics">Paediatrics</option>
                    <option value="Pathology">Pathology</option>
                    <option value="Periodontal">Periodontal</option>
                    <option value="Physical Medicine">Physical Medicine</option>
                    <option value="Physio">Physio</option>
                    <option value="Plastic & Reconstructive Surgery">Plastic & Reconstructive Surgery</option>
                    <option value="Prosthodontics">Prosthodontics</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Radiology">Radiology</option>
                    <option value="Radiotherapy & Oncology">Radiotherapy & Oncology</option>
                    <option value="Urology">Urology</option>
                    <option value="Venereology">Venereology</option>
                </select>
                {specialityError !== "" && <div className="text-danger fw-normal">{specialityError}</div>}
            </div>

            <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                    City
                </label>
                <select className="form-select bms-form text-bms-secondary h-75" id="city" aria-label="City" value={city} onChange={(e) => {setCity(e.target.value); setCityError("")}}>
                    <option value="" disabled selected>Select a city</option>
                    <option value="Harare">Harare</option>
                    <option value="Bulawayo">Bulawayo</option>
                    <option value="Mutare">Mutare</option>
                    <option value="Gweru">Gweru</option>
                    <option value="Masvingo">Masvingo</option>
                    <option value="Chinhoyi">Chinhoyi</option>
                    <option value="Bindura">Bindura</option>
                    <option value="Marondera">Marondera</option>
                    <option value="Kwekwe">Kwekwe</option>
                    <option value="Hwange">Hwange</option>
                </select>
                {cityError !== "" && <div className="text-danger fw-normal">{cityError}</div>}
            </div>


            <div className="col-12 mt-5">
                <label htmlFor="reason" className="form-label">
                    Reason for Appointment
                </label>
                <textarea
                    className="form-control bms-form text-bms-secondary"
                    placeholder="Reason for Appointment..."
                    id="reason"
                    style={{ height: '100px' }}
                    value={reason}
                    onChange={(e) => {setReason(e.target.value); setReasonError("")}}
                ></textarea>
                {reasonError !== "" && <div className="text-danger fw-normal">{reasonError}</div>}
            </div>

            <div className="col-12 mt-5 d-flex justify-content-between">
                <button type="submit" className="btn btn-lg btn-bms-primary w-25 ml-auto">
                    Next
                </button>
            </div>
            
        </form>
      );
}
 
export default Speciality;