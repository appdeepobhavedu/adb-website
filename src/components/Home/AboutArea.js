import React from "react";
import { Link } from "gatsby";

import img1 from "../../img/about/about-1.jpg"
import img2 from "../../img/about/about-2.jpg"
import img3 from "../../img/about/about-3.jpg"

const AboutArea = ({ about_pt = '' }) => {
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
                           <span className="section__title-pre">About Educal</span>
                           <h2 className="section__title">Degrees in Various academic Didciplines</h2>
                        </div>
                        <p>Not only can university offer an environment rich in our social an cultural experiences.</p>

                        <div className="about__list mb-40">
                           <ul>
                              <li><i className="fa-solid fa-check"></i> Access to all our courses</li>
                              <li><i className="fa-solid fa-check"></i> Learn the latest skills</li>
                              <li><i className="fa-solid fa-check"></i> Upskill your organization</li>
                           </ul>
                        </div>

                        <div className="about__btn">
                           <Link href="/about">
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