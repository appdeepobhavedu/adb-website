import React from "react";
import { Link } from "gatsby";

import img1 from "../../img/features/features-1.svg"
import img2 from "../../img/features/features-2.svg"
import img3 from "../../img/features/features-3.svg"
import img4 from "../../img/features/features-4.svg"

const Features = () => {
   const featuresData = [
      {
         id: 1,
         icon_img: img1,
         title: 'Code of Conduct',
         description: 'Euucal University was established it is recognized.'
      },
      {
         id: 2,
         icon_img: img2,
         title: 'Training Perfectionists',
         description: 'Euucal University was established it is recognized.'
      },
      {
         id: 3,
         icon_img: img3,
         title: 'Fighting Stereotypes',
         description: 'Euucal University was established it is recognized.'
      },
      {
         id: 4,
         icon_img: img4,
         title: 'Soft Skill Development',
         description: 'Euucal University was established it is recognized.'
      },
   ]
   return (
      <>
         <section className="features__area pb-50">
            <div className="container">
               <div className="features__inner p-relative z-index-1 white-bg">
                  <div className="row">
                     {
                        featuresData.map((feature, index) => {
                           return <div key={feature.id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                              <div className={`features__item d-sm-flex align-items-center flex-sm-column white-bg mb-30 ${featuresData.length -1 === index ? "" : "features__border-right"}`}>
                                 <div className="features__icon mb-25">
                                    <img width="100" src={feature.icon_img} alt={feature.title} />
                                 </div>
                                 <div className="features__content text-center">
                                    <h3 className="features__title">
                                       <Link to="/about">
                                          <button>{feature.title}</button>
                                       </Link>
                                    </h3>
                                    <p>{feature.description}</p>
                                    <Link to="/about">
                                       <button className="link-btn">Learn More <i className="fa-regular fa-arrow-right"></i></button>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        })
                     }

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Features;