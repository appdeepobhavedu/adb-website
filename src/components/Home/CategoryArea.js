import React from 'react';
import { Link } from "gatsby";

const CategoryArea = ({courseList}) => {
   return (
      <>
         <section className="category__area pb-90 pt-50">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-5 col-xl-5">
                     <div className="section__title-wrapper mb-60">
                        <span className="section__title-pre-3">Top Courses for</span>
                        <h2 className="section__title-2">Aspiring medical and<br />paramedical students</h2>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-xl-7">
                     <div className="category__wrapper-3 mb-60 d-sm-flex align-items-end justify-content-between">
                        <p>Our course follows a holistic approach starting with extreme basics and then going up to intermediate and then expert level content.</p>
                        <div className="category__more mb-10">
                           <Link to="/courses">
                              <button className="tp-btn-5 tp-btn-8">All Courses</button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {
                     courseList.map((category, index) => {
                        return <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="category__item-3 fix transition-3 white-bg mb-30">
                              <h3 className="category__title-3">{category.title}</h3>
                              <div className="category__list">
                                 <ul>
                                    <li>{category.duration}</li>
                                    <li>{category.seats}</li>
                                    <li>{category.admission_fee}</li>
                                    <li>{category.per_semester_fee}</li>
                                 </ul>
                              </div>
                              <div className="category__btn-3">
                                 <Link to="/courses">
                                    <button className="tp-btn-9 w-100">Explore</button>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     })
                  }


               </div>
            </div>
         </section>
      </>
   );
};

export default CategoryArea;