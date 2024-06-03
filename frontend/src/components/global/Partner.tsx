import logo from '../../assets/Bookmediservices Logo-01.svg'

const Partner = () => {
    return (
        <section className="d-flex align-items-center justify-content-center" style={{marginTop: "150px"}}>
            <div className="text-center">
                <h6 className="mb-3 text-bms-secondary bms-spacing fw-bold">PARTNER</h6>
                <h2 className="h1 mb-5 text-bms-primary fw-bold">Our Partner’s</h2>
                <div className="slider">
                    <div className="logos d-flex align-items-center justify-content-center mb-5">
                        <img src={logo} alt="BookMediServices"/>
                        <img src={logo} alt="BookMediServices"/>
                        <img src={logo} alt="BookMediServices"/>
                        <img src={logo} alt="BookMediServices"/>
                        <img src={logo} alt="BookMediServices"/>
                        <img src={logo} alt="BookMediServices"/>
                        <img src={logo} alt="BookMediServices"/>
                        <img src={logo} alt="BookMediServices"/>
                    </div>
                </div>   
            </div>
        </section>
      );
}
 
export default Partner;