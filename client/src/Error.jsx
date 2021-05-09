import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo1 from './Images/logo1.png';
import error from './Images/error.png';

const Error = () => {
    return (
        <>
            <div className="error_page">
                <a className="navbar-brand" href="#"><img src={logo1} /></a> 
                  <div className="error_text">
                        <h2 id="errorH2"> We are sorry, page not found </h2>
                        <p id="error_para">The page you are looking for might have been removed or is temporarily unavailable.</p>
                        <NavLink to="/">
                        <button className="btn btn-primary">
                             Back To Homepage
                         </button>
                         </NavLink>                       
                  </div>
                    <div className="showError">
                        <img src={error} className="error_photo" alt="error_image" /> 
                    </div>

            </div>
        </>
    )
}

export default Error
