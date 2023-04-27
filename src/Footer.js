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


            <div className="flex-row flex-center">
            {/* Linkedin */}
            <a className="button nav-button flex-center m-1" href="https://www.linkedin.com/feed/" role="button"
                >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-linkedin nav-symbol" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>     
                    
                    </a>

            {/* Github */}
            <a className="button nav-button flex-center m-1" href="https://github.com/AllofTheWeather" role="button"
                >

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github nav-symbol" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>


                </a>
            </div>

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
                <div className="col-md-6 mb-4 mb-md-0">
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
                <div className="col-md-6 mb-4 mb-md-0">
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

            </div>
            {/*Grid row*/}
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