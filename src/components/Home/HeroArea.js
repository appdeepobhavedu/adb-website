import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "gatsby";
// import SwiperCore, { Navigation, EffectFade } from 'swiper';
// SwiperCore.use([Navigation]);

const HeroArea = ({img, title, heading, subheading}) => {
   console.log("img", img)
   return (
      <>
         <section className="slider__area">
            <div className="slider__active swiper-container">
               <div className="slider__item swiper-slide p-relative slider__height d-flex align-items-center z-index-1">
                  <div className="slider__bg slider__overlay include-bg" 
                  style={{ background: `url(${img.images.fallback.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
                  <div className="container">
                     <div className="row">

                        <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-10 col-sm-10">
                           <div className="slider__content p-relative z-index-1">
                              <span>{title}</span>
                              <h2 className="slider__title">{heading}</h2>
                              <p>{subheading}</p>
                              <div className="slider__btn">
                                 <Link href="/courses">
                                    <a className="tp-btn">Apply Now</a>
                                 </Link>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default HeroArea;