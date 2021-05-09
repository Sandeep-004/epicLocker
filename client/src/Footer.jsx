import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <>
            <div className="footer_Main">
               <div className="row">
                    <div className="col-6 footerMe">
                        <h5>Made With<span className="heart_Footer"> ❤️ </span>By Sandeep Sharma</h5>
                    </div>
                    
                        <div className="col-6 footer_social">

                            <ul className="footer_UL">
                                <li className="footer_LI">
                                    <a href="https://www.linkedin.com/in/sandeep-sharma-63162619b/">
                                        <LinkedInIcon id="linked" className="iconFoot"/>
                                    </a>
                               </li>
                                <li className="footer_LI">
                                    <a href="https://www.instagram.com/sandy_s004/">
                                        <InstagramIcon id="insta" className="iconFoot"/>
                                    </a>    
                                </li>

                                <li className="footer_LI">
                                    <a href="https://twitter.com/Sandy97465592">
                                        <TwitterIcon id="tweet" className="iconFoot"/>
                                    </a>        
                                </li>
                            </ul>

                        </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
