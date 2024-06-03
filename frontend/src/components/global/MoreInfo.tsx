const MoreInfo = () => {
    return (
        <section className="d-flex align-items-center justify-content-center" style={{marginTop: "150px", marginBottom: "200px"}}>
            <div className="text-center d-none d-md-block">
                <h6 className="mb-3 text-bms-secondary bms-spacing fw-bold">MORE INFORMATION</h6>
                <h2 className="h1 mb-3 text-bms-primary fw-bold">Need More Help or Information</h2>
                <p className="mb-5">Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum.</p>
                <a className="btn btn-lg btn-bms-primary bms-spacing rounded-1" href="/contact-us" role="button">Contact Us</a>  
            </div>
        </section>
        );
}
 
export default MoreInfo;