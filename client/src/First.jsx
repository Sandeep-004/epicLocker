import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import logo1 from './Images/logo1.png';
import Footer from './Footer';

export const First = () => {
    return (
        <>
            <div className="upper_div">
               <div className="row">
                  <div className="col-12 first-col">
                    <a className="navbar-brand" href="#"><img src={logo1} /></a>
                   <NavLink to="/signin" >
                     <button type="button" className="btn-login">LOG IN</button>
                   </NavLink> 
                    </div>
                </div>
                     <div className="center">
                        <div className="row">
                            <div className="col-12 ">
                             <h1 className = "content">Start Something epic.</h1>
                             <div className="createAccDiv">
                               <NavLink to="/createAcc" style={{textDecoration: 'none'}}> 
                                    <input type="button" value="Create Account" className="btn-createAcc" />
                                </NavLink>
                             </div>
                                <NavLink to="/signin" style={{textDecoration: 'none'}}>
                                      <button type="button" className="btn-ResLogin">Log in</button>
                                </NavLink>
                            </div>
                        </div>
                    </div> 
            </div>

            <Footer />
        </>
    )
}


export default First;