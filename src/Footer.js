import { NavLink } from "react-router-dom"
import { ContactUsFooter } from "./ContactForm"

export default function Footer() {
    return (
        <>
        {/* Footer */}
        <footer id="footer" className="footer text-center ">
        {/* Grid container */}

        <div className="container p-4">
            {/* Section: Social media */}
            <section className="mb-4">
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-facebook-f"></i></a>

            {/* Twitter */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-twitter"></i></a>

            {/* Google */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-google"></i></a>

            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-instagram"></i></a>

            {/* Linkedin */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-linkedin-in"></i></a>

            {/* Github */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-github"></i></a>
            </section>
            {/* Section: Social media */}

            {/* Section: Form */}
            <section className="">
            <div>
                {/*Grid row*/}
                <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                <div className="col-auto">
                    <p className="pt-2">
                    <strong>Get in touch</strong>
                    </p>
                </div>
                {/*Grid column*/}
                </div>
                <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                <div className="col-auto">
                    {/* Email input */}
                    <ContactUsFooter />
                </div>
                </div>
                {/*Grid column*/}

                {/*Grid column*/}
                
                {/*Grid row*/}
            </div>
            </section>
            {/* Section: Form */}

            {/* Section: Text */}
            <section className="mb-4">
            <p>
                This site was made with ReactJs, and a combination of bootstrap and custom css.
            </p>
            </section>
            {/* Section: Text */}

            {/* Section: Links */}
            <section className="">
            {/*Grid row*/}
            <div className="row">
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">pages</h5>

                <ul className="list-unstyled mb-0">
                    <li>
                    <NavLink to="/" className="link">Home</NavLink>
                    </li>
                    <li>
                    <NavLink href="/skills" className="link">About</NavLink>
                    </li>
                    <li>
                    <NavLink href="/projects" className="link">Projects</NavLink>
                    </li>
                </ul>
                </div>
                {/*Grid column*/}

                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Projects</h5>

                <ul className="list-unstyled mb-0">
                    <li>
                    <a href="#!" className="link">Link 1</a>
                    </li>
                    <li>
                    <a href="#!" className="link">Link 2</a>
                    </li>
                    <li>
                    <a href="#!" className="link">Link 3</a>
                    </li>
                    <li>
                    <a href="#!" className="link">Link 4</a>
                    </li>
                </ul>
                </div>
                {/*Grid column*/}

                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Return</h5>

                <ul className="list-unstyled mb-0">
                    <li>
                    <a className="link" href="#main-nav">
                        <div className="nav-button-wrapper">
                        <button className="button nav-button flex-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="flex-center nav-symbol" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                        </svg>
                        </button>
                        <p className="nav-writing">to top</p>
                        </div>
                    </a>
                    </li>

                </ul>
                </div>
                {/*Grid column*/}
            </div>
            {/*Grid row*/}
            </section>
            {/* Section: Links */}
        </div>
        {/* Grid container */}

        
        <div className="row">

        </div>

        {/* Copyright */}
        <div className="text-center p-3">
            <div className="content">
                <h1 className="text-align-center text">© 2023 Copyright: Joe Weatherall</h1>
            </div>
        </div>
        {/* Copyright */}
        </footer>
        {/* Footer */}
        </>
    )
}