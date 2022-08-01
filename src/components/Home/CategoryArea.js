import React from 'react';
import { Link } from "gatsby";

const CategoryArea = () => {
   // categoryData
   const categoryData = [
      {
         id: 1,
         title: 'ANM',
         sub_1: 'Duration: 2 Years',
         sub_2: 'Seats Available: 60 Seats',
         sub_3: 'Admission Fee: Rs 24,000(One Time Fee)',
         sub_4: 'Per Semester Fee: Rs 31,250',
      },
      {
         id: 2,
         title: 'GNM',
         sub_1: 'Duration: 3.5 Years',
         sub_2: 'Seats Available: 60 Seats',
         sub_3: 'Admission Fee: Rs 24,000 (One Time Fee)',
         sub_4: 'Per Semester Fee: Rs 95,850',
      },
      {
         id: 3,
         title: 'B.Sc. Nursing',
         sub_1: 'Duration: 4 Years',
         sub_2: 'Seats Available: 60 Seats',
         sub_3: 'Admission Fee: Rs 59,000(One Time Fee)',
         sub_4: 'Per Semester Fee: Rs 86,250',
      },
      {
         id: 4,
         title: 'BHA',
         sub_1: 'Duration: 4 Years',
         sub_2: 'Seats Available: 60 Seats',
         sub_3: 'Admission Fee: Rs 50,000 (One Time Fee)',
         sub_4: 'Annual Fee: Rs 67,250',
      },
   ]
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
                     categoryData.map(category => {
                        return <div key={category.id} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                           <div className="category__item-3 fix transition-3 white-bg mb-30">
                              <h3 className="category__title-3">{category.title}</h3>
                              <div className="category__list">
                                 <ul>
                                    <li>{category.sub_1}</li>
                                    <li>{category.sub_2}</li>
                                    <li>{category.sub_3}</li>
                                    <li>{category.sub_4}</li>
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