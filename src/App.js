import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ContactUs } from "./ContactForm";

import Footer from "./Footer";
import { ModalButton } from "./Modal";

const Nav = () => {
    return (
<nav className="flex-row space-between align-center" id="main-nav">
    <div className="nav-left">
        <NavLink className="link" to="/">
            <div className="nav-button-wrapper">
            <button className="button nav-button flex-center">
                <svg className="flex-center nav-symbol" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                </svg>
            </button>
            <p className="nav-writing">home</p>
            </div>
        </NavLink>
    </div>

    <div className="nav-center">
    <NavLink className="link" to="/skills">
            <div className="nav-button-wrapper">
            <button className="button nav-button flex-center">
                <svg className="flex-center nav-symbol" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                </svg>
            </button>
            <p className="nav-writing">about</p>
            </div>
        </NavLink>

        <NavLink className="link" to="/projects">
            <div className="nav-button-wrapper">
            <button className="button nav-button flex-center">
                <svg  className="flex-center nav-symbol" xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                </svg>
            </button>
            <p className="nav-writing">projects</p>
            </div>
        </NavLink>  
    </div>
        
        <div className="nav-right">
  


            <a className="link" href="#footer">
                <div className="nav-button-wrapper">
                <button className="button nav-button flex-center">
                    <svg className="flex-center nav-symbol" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                    </svg>
                </button>
                <p className="nav-writing">contact</p>
                </div>
            </a>
        </div>
    </nav>
    )
}

export const App = () => {
    return (
        <div id="app" className="flex-page" >
            <div className="flex-content">
                <header>
                    <Nav />
                </header>       
                <Outlet />

            </div>
            <div className="flex-footer">
                <Footer />
            </div>
        </div>
    )
}