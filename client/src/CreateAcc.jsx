import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useHistory } from "react-router-dom";
import logo1 from './Images/logo1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';


export const CreateAcc = () => {

    const history = useHistory()

    const [userValue, setUserValue] = useState({

        name: "",email: "",password: "",cpassword: ""
        
    });

    let name, value;
    const handleChange = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUserValue({...userValue, [name]: value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, password, cpassword } = userValue;
        
        const res = await fetch('/createAcc', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({

                name, email, password, cpassword
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data) {
                
            toast.error("Invalid Resgistration");
            console.log("Invalid Resgistration");
        
        }else {
            
            toast.success("Resgistration Successful");
            console.log("Resgistration Successful");

            history.push('/signin');
        }

        

    }

    return (
        <>
            <div className="container-fluid topCreateAcc">
            <a className="navbar-brand" href="#"><img id ="logo_createForm" src={logo1} /></a>
                <div className="row">
                    <div className="col">
                        <form method="POST" className="createAccForm">
                            <h3 className="formH3">Create account</h3>
                            <label>Your name</label>
                            <input className="input" onChange={handleChange} name="name" value={userValue.name} type="name" placeholder="Enter Your name" />
                            <label>Email</label>
                            <input className="input" onChange={handleChange} name="email" value={userValue.email} type="email" placeholder="Enter Email" />
                            <label>Password</label>
                            <input className="input" onChange={handleChange} name="password" value={userValue.password} type="password" placeholder="Enter Password" />
                            <label>Re-enter password</label>
                            <input className="input" onChange={handleChange} name="cpassword" value={userValue.cpassword} type="password" placeholder="Re-enter Password"/><br />                       
                            <input id="createID" type="submit" onClick={PostData} value="Create your Epic account"/>
                             <div className="hr_Div"></div>
                             <p>Already have an account?
                                <NavLink className="NavcreateSignin" to="/signin">sign-In</NavLink>
                              </p>
                        </form>
                    </div>
                </div>
            </div>
        <ToastContainer />
        <Footer />
        </>
    )
}

export default CreateAcc;