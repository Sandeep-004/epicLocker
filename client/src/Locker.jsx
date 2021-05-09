import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo1 from './Images/logo1.png';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import  { useHistory } from 'react-router-dom';
import Footer from './Footer';


 const Locker = () => {

  const [selectedImages, setSelectedImages] = useState([]);
  const [userData, setUserData] = useState({});

  const history = useHistory(); 


const callLockerPage = async () => {
  try {

      const res = await fetch('/locker',  {
          method: "GET",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          credentials: "include"
      });
      
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 200) {
              const error = new Error(res.error);
              throw error; 
      }

  } catch (err) {
      console.log(err);
      history.push('/signin');
  }
}

useEffect( () => {
  callLockerPage();

}, []);
  const ImagesHandleChange = (e) => {
      // console.log(e.target.files);

      if(e.target.files) {
        const fileArray = Array.from(e.target.files).map( (file) => URL.createObjectURL(file))
        // console.log(fileArray);

        setSelectedImages( (prevImages) => prevImages.concat(fileArray))
        
      }
  }

    const renderPhotos = (source) => {
        return source.map( (photo) => {
          return <img className="resultImage" src={photo} key={photo} /> 
        })
    }
    return (
        <>
            
             <nav className="navbar navbar-expand-lg navbar-light">
                 <a className="navbar-brand logo_Nav" href="#"><img src={logo1} /></a> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                  <form method = "GET">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
               <li className="nav-item"> 
                 <AccountCircleIcon className="iconUser" />
                </li>
                <li className="nav-item">
                   <h3 id="userID">{userData.name}</h3>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;

                <li className="nav-item">
                    <NavLink to="/logout" style={{textDecoration: 'none'}}> <h3>Logout</h3></NavLink>
                </li>
            </ul>
              </div>
              </form>
            </nav>
        
            <div className="container-fluid upper_locker_div">
            
              <div className = "row">
                <div className="col-12">
                  <div className="headerLocker">
                    <h1>Please Select Your Images for epicLocker from below button. </h1>
                  </div>
              <form action="/upload" method="POST" >
                <div className="selectImg">
                  <input type="file" name="images" id="file" onChange={ImagesHandleChange} multiple/>
                    <div className="label-holder">
                        <label htmlFor="file" className="label" >
                            <AddAPhotoIcon className="icon_camera" />
                        </label>
                    </div> 
                </div>
              </form>
                <div className="result">
                        {renderPhotos(selectedImages)}
                      </div>
        </div>
    </div>
              
  </div>
  
  <Footer />

  </>
    )
}


export default Locker;