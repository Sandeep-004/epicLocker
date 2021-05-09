import React,{ useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useHistory } from "react-router-dom";
import logo1 from './Images/logo1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';


export const Signin = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

     const res  = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = res.json();

        if(res.status === 400 || !data) {
            toast.error("Invalid Credentials");
        }else{

            toast.success("Login Successfull");

            history.push('/locker');
        }

    }

    return (
        <>
            <div className="container-fluid topsigninAcc">
            <a className="navbar-brand" href="#"><img src={logo1} /></a> 
                <div className="row">
                    <div className="col">
                        <form method="POST" className="signinAccForm">
                            <h3 id="signinIDH3" className="formH3" >Sign-In</h3>
                            <label>Email</label>
                            <input className="input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                            <label>Password</label>
                            <input className="input" name="email" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"/><br />
                            <NavLink to="/locker">
                                 <input onClick={loginUser} type="submit" value="Sign-In" className="inputbtnSignin"/>
                            </NavLink>
                             <div className="hr_Div"></div>
                             <p className="paraSignin">New to epicLocker?</p>
                             <NavLink className="NavcreateAcc" to="/createAcc">
                                <input className="inputcreateAcc_btn" type="button" value="Create your epicLocker account" />
                             </NavLink>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />
            <Footer />
        </>
    )
}

export default Signin;