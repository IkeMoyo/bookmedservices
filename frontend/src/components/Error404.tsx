import NavBar from "./global/NavBar";
import MoreInfo from "./global/MoreInfo";
import Footer from "./global/Footer";

const Error404 = () => {
    return (
      <>
      <header>
        <NavBar/>
      </header>

      <main className="main">
        <section className="my-5">
            <div className="container">
                <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center justify-content-center">
                    <div className="col-12 col-lg-6 col-xl-6 text-center">
                      <h2 id="error" className="fw-bold">Error</h2>
                      <h6 id="error-404" className="h1 text-bms-primary fw-bold">404</h6>
                    </div>
                    <div className="col-12 col-lg-5 col-xl-5 shadow-lg p-5 me-3">
                      <h2 className="h1 mb-3 text-bms-primary fw-bold">Page Not Found</h2>
                      <p className="mb-5">Oops! Page not found. Please check the URL or return to the homepage. Thank you!</p>
                      <a className="btn btn-lg btn-bms-primary bms-spacing rounded-1" href="/" role="button">Home</a>
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
 
export default Error404;