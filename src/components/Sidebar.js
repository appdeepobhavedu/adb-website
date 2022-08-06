import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'gatsby'

import logo from "../img/logo.jpg";

const Sidebar = ({ show, handleClose, courses, dynammicPageHeader = false }) => {
   return (
      <>
         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="offcanvas__logo logo">
                     <Link to="/">
                        <img src={logo} alt="logo" />
                     </Link>
                  </div>
                  <div className="offcanvas__close">
                     <button className="offcanvas__close-btn" onClick={handleClose}>
                        <i className="fal fa-times"></i>
                     </button>
                  </div>
               </Offcanvas.Header>
               <Offcanvas.Body>
                  <div className="sidebar__content">
                     <div className="mobile-menu">
                        <nav id="mobile-menu">
                           <ul>
                              <>
                                 <ul className="sidebar_sub_menu submenu text-white">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About College</Link></li>
                                    <li><Link to="/about-trust">About Trust</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                 </ul>
                                 <div className='single_link iconAdd border-0'>
                                    <li><Link to="/Courses">All Courses</Link></li>
                                 </div>
                                 <ul className="sidebar_sub_menu submenu text-white">
                                    {
                                       courses.map((course, index) => {
                                         // console.log("course", course.node.frontmatter)
                                         const {acronym} = course.node.frontmatter;
                                         const slug = course.node.fields.slug;
                                         return <li key={index}>
                                          <Link to={slug}>{acronym}</Link>
                                       </li>
                                       })
                                    }
                                 </ul>
                              </>
                           </ul>
                        </nav>
                     </div>
                  </div>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;