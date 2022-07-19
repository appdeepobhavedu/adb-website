import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.jpg";

const Footer = class extends React.Component {
  render() {
    let white_bg = ''
    return (
       <>
          <footer>
             <div className="footer__area">
                <div className={`footer__top grey-bg-4 pt-95 pb-45 ${white_bg && white_bg}`}>
                   <div className="container">
                      <div className="row">
                         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                            <div className="footer__widget footer-col-1 mb-50">
                               <div className="footer__logo">
                                  <div className="logo">
                                     <Link to="/">
                                       <img src={logo} alt="logo" />
                                     </Link>
                                  </div>
                               </div>
                               <div className="footer__widget-content">
                                  <div className="footer__widget-info">
                                     <p>Revolutionising HealthCare from Grassroots.</p>
                                     <div className="footer__social">
                                        <h4>Follow Us</h4>

                                        <ul>
                                           <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"> </i></a></li>
                                           <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"> </i></a></li>
                                           <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"> </i></a></li>
                                        </ul>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                            <div className="footer__widget mb-50">
                               <h3 className="footer__widget-title">Explore</h3>
                               <div className="footer__widget-content">
                                  <ul>
                                     <li>
                                        <a href="/about">About us</a>
                                     </li>
                                     <li>
                                        <a href="/about-trust">About Trust</a>
                                     </li>
                                     <li>
                                        <a href="/contact">Contact Us</a>
                                     </li>
                                  </ul>
                               </div>
                            </div>
                         </div>
                         <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
                            <div className="footer__widget mb-50">
                               <h3 className="footer__widget-title">Links</h3>
                               <div className="footer__widget-content">
                                  <ul>
                                     <li>
                                        <a href="/about">About us</a>
                                     </li>
                                     <li>
                                        <a href="/about-trust">About Trust</a>
                                     </li>
                                     <li>
                                        <a href="/contact">Contact Us</a>
                                     </li>
                                  </ul>
                               </div>
                            </div>
                         </div>
                         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                            <div className="footer__widget footer-col-4 mb-50">
                               <h3 className="footer__widget-title">Sign up for our newsletter</h3>

                               <div className="footer__subscribe">
                                  <p>Receive weekly newsletter with educational materials, popular books and much more!</p>
                                  <form action="#">
                                     <div className="footer__subscribe-input">
                                        <input type="text" placeholder="Email" />
                                        <button type="submit" className="tp-btn-subscribe">Subscribe</button>
                                     </div>
                                  </form>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className={`footer__bottom grey-bg-4 ${white_bg && white_bg}`}>
                   <div className="container">
                      <div className="footer__bottom-inner">
                         <div className="row">
                            <div className="col-xxl-12">
                               <div className="footer__copyright text-center">
                                  <p>© 2022 App Deepo Bhav Trust. All Rights Reserved</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </footer>
       </>
    );
  }
};

export default Footer;
