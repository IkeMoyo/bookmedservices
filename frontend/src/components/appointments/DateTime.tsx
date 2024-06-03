import { useState } from "react";

interface DateTimeProps {
    handleForm3: (data: { date: string; time: string }) => void;
    handlePrevious: () => void;
}

const currentDate = new Date().toISOString().split('T')[0];

const generateTimeOptions = () => {
    let options = [<option key="" value="" disabled selected>Select time</option>];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        let hourStr = hour.toString().padStart(2, '0');
        let minuteStr = minute.toString().padStart(2, '0');
        let time = `${hourStr}:${minuteStr}`;
        options.push(<option key={time} value={time}>{time}</option>);
      }
    }
    return options;
  }
  

const DateTime: React.FC<DateTimeProps>  = ({handleForm3, handlePrevious}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [dateError, setDateError] = useState("");
    const [timeError, setTimeError] = useState("");

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(date === ""){
            setDateError("Enter date")
            return
        }

        if(time === ""){
            setTimeError("Enter time")
            return
        }

        handleForm3({date, time})

        setDate("")
        setTime("")
    }
    
    return (
        <form className="row g-3 fw-bold" onSubmit={onSubmit}>
            <div className="col-12">
                <label htmlFor="appointmentDate" className="form-label">
                    Date of Appointment
                </label>
                <input type="date" className="form-control bms-form text-bms-secondary h-75" id="appointmentDate" min={currentDate} value={date} onChange={(e) => {setDate(e.target.value);setDateError("")}}/>
                {dateError !== "" && <div className="text-danger fw-normal">{dateError}</div>}
            </div>

            <div className="col-md-12 mt-5">
                <label htmlFor="time" className="form-label">
                    Time
                </label>
                <select
                    className="form-control bms-form text-bms-secondary h-75"
                    value={time}
                    onChange={(e) => { setTime(e.target.value); setTimeError("")}}
                >
                    {generateTimeOptions()}
                </select>

                {timeError !== "" && <div className="text-danger fw-normal">{timeError}</div>}
            </div>

            <div className="col-12 mt-5 d-flex justify-content-between">
                <button type="button" className="btn btn-lg btn-bms-primary w-25" onClick={handlePrevious}>
                    Previous
                </button>

                <button type="submit" className="btn btn-lg btn-bms-primary w-25 ml-auto">
                    Next
                </button>
            </div>
            
        </form>
      );
}
 
export default DateTime;