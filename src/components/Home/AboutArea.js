import React from "react";
import { Link } from "gatsby";

import img1 from "../../img/about/about-1.jpg"
import img2 from "../../img/about/about-2.jpg"
import img3 from "../../img/about/about-3.jpg"

const AboutArea = ({ about_pt = '', about_college }) => {
   console.log("about_college", about_college)
   let {title, heading, sub_heading, features} = about_college;
   return (
      <>
         <section className={`about__area pb-120 p-relative ${about_pt && about_pt}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-7 col-xl-7 col-lg-7">
                     <div className="about__thumb-wrapper d-sm-flex mr-20 p-relative">
                        <div className="about__thumb-left mr-10">
                           <div className="about__thumb-1 mb-10">
                              <img src={img1} alt="" />
                           </div>
                           <div className="about__thumb-1 mb-10 text-end">
                              <img src={img3} alt="" />
                           </div>
                        </div>
                        <div className="about__thumb-2 mb-10">
                           <img src={img2} alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-5">
                     <div className="about__content pl-70 pr-25">
                        <div className="section__title-wrapper mb-15">
                           <span className="section__title-pre">{title}</span>
                           <h2 className="section__title">{heading}</h2>
                        </div>
                        <p>{sub_heading}</p>

                        <div className="about__list mb-40">
                           <ul>
                           {
                              features.map(({feature}) => 
                                 <li key={feature}><i className="fa-solid fa-check"></i> {feature}</li>
                              )
                           }
                              {/*{
                                 
                              }*/}
                           </ul>
                        </div>

                        <div className="about__btn">
                           <Link to="/about">
                              <button className="tp-btn tp-btn-2">Read more</button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutArea;