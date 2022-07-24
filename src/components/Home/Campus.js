import React from 'react';
import { Link } from "gatsby";

import img1 from "../../img/campus/campus-1.jpg"
import img2 from "../../img/campus/campus-2.jpg"
import img3 from "../../img/campus/campus-3.jpg"
import img4 from "../../img/campus/campus-4.jpg"
import img5 from "../../img/campus/campus-5.jpg"

// import { Modal } from 'react-responsive-modal';
// import ReactPlayer from "react-player";

const Campus = () => {
   return (
      <>
         <section className="campus__area pt-120 pb-120">
            <div className="container">
               <div className="row grid">
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__wrapper">
                        <div className="section__title-wrapper mb-25">
                           <span className="section__title-pre">Campus life</span>
                           <h2 className="section__title section__title-40">University Campus</h2>
                           <p>Our research has an impact globally join us in tackling the big issues.</p>
                        </div>
                        <div className="campus__btn mb-80">
                           <Link href="/about">
                              <button className="tp-btn tp-btn-border">More Research</button>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="campus__thumb w-img mb-30">
                        <img src={img1} alt="" />
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__thumb w-img mb-25">
                        <img src={img2} alt="" />
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__thumb w-img mb-30">
                        <img src={img3} alt="" />
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__thumb w-img mb-30">
                        <img src={img4} alt="" />
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                     <div className="campus__thumb w-img mb-30">
                        <img src={img5} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Campus;