import Doctor from "./Doctor";
import { useState, useEffect } from "react";

interface DoctorData {
  id: number;
  first_name: string;
  last_name: string;
  speciality: string;
  city: string;
  image: string;
  address: string;
}

interface DoctorsProps {
  speciality: string;
  city: string;
  handleForm2: Function
  handlePrevious: () => void;
  handleNext: () => void;
}

const Doctors: React.FC<DoctorsProps> = ({ speciality, city, handleForm2, handlePrevious}) => {
  const [doctors, setDoctors] = useState<DoctorData[]>([]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/doctors/');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getDoctors();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      {doctors.map(
        (doctor) =>
          doctor.speciality === speciality &&
          doctor.city === city && <Doctor key={doctor.id} doctor={doctor} handleForm2={handleForm2}/>
      )}

      <div className="col-12 mt-5 d-flex justify-content-between">
          <button type="button" className="btn btn-lg btn-primary btn-bms-primary w-25" onClick={handlePrevious}>
              Previous
          </button>
      </div>
    </>
  );
};

export default Doctors;
