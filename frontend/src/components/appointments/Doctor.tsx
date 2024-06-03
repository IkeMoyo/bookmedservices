interface DoctorData {
  id: number;
  first_name: string;
  last_name: string;
  speciality: string;
  image: string;
  address: string;
}

interface DoctorProps {
  doctor: DoctorData;
  handleForm2: Function
}

const Doctor: React.FC<DoctorProps>  = ({doctor, handleForm2}) => {
    return (
        <>
        <div className="card mb-3 bg-bms-primary text-white rounded-1">
          <div className="row g-0">
            <div className="col-md-4 p-5">
              <a href="/profile">
                <img src={doctor.image} className="rounded-circle w-100" alt={`${doctor.first_name} ${doctor.last_name}`} />
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6>{doctor.speciality}</h6>
                <a href="/profile" className="text-decoration-none">
                  <h3 className="card-title text-bms-secondary">dr. {doctor.first_name} {doctor.last_name}</h3>
                </a>
                <p className="card-text"><i className="text-bms-secondary bi bi-geo-alt-fill me-2"></i>{doctor.address}</p>
                <button className="btn btn-bms-secondary bms-spacing rounded-1" role="button" onClick={() => handleForm2(doctor.id)}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </>
      );
}
 
export default Doctor;
