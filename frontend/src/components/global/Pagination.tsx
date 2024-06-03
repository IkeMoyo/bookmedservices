const Pagination = ({ step }: { step: number }) => {

    return (
        <div className="d-flex align-items-center justify-content-center my-5">
            <div className="rounded-circle bg-bms-secondary circle-1 me-1">1</div>
            <div className={`${step > 1 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2 me-1`}></div>
            <div className={`${step > 1 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2 me-1`}></div>
            <div className={`${step > 1 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2 me-1`}></div>
            <div className={`${step > 1 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2`}></div>
            <div className={`${step > 1 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-1 mx-1`}>2</div>
            <div className={`${step > 2 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2 me-1`}></div>
            <div className={`${step > 2 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2 me-1`}></div>
            <div className={`${step > 2 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2 me-1`}></div>
            <div className={`${step > 2 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2`}></div>
            <div className={`${step > 2 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-1 mx-1`}>3</div>
            <div className={`${step > 3 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2 me-1`}></div>
            <div className={`${step > 3 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2 me-1`}></div>
            <div className={`${step > 3 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2 me-1`}></div>
            <div className={`${step > 3 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-2`}></div>
            <div className={`${step > 3 ? "bg-bms-secondary":"bg-bms-primary"} rounded-circle circle-1 ms-1`}>4</div>
        </div>
      );
}
 
export default Pagination;