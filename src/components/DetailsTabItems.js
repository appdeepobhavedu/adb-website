import React, {useState} from "react";
import Content, { HTMLContent } from "../components/Content";

const DetailsTabItems = ({
   dynamicPage,
   content,
   course_outcomes,
   career_opportunities,
   eligibility, }) => {
   const [tab, setTab] = useState(0);
   return (
      <>
         <div className="course__tab-2 mb-45">
            <ul className="nav nav-tabs" id="courseTab">
               <li className="nav-item" role="presentation">
                  <button onClick={() => setTab(0)} className={`nav-link ${tab === 0 ? "active" : ""}`} id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true"><i className="fa-regular fa-medal"></i> <span>Course Overview</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button  onClick={() => setTab(1)} className={`nav-link ${tab === 1 ? "active" : ""}`} id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="curriculum" aria-selected="false"><i className="fa-regular fa-book-blank"></i> <span>Eligibility Criteria</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button  onClick={() => setTab(2)} className={`nav-link ${tab === 2 ? "active" : ""}`} id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false"> <i className="fa-regular fa-star"></i> <span>Course Outcomes</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button  onClick={() => setTab(3)} className={`nav-link ${tab === 3 ? "active" : ""}`} id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i className="fal fa-user"></i> <span>Career Opportunities</span> </button>
               </li>
            </ul>
         </div>

         <div className="course__tab-content mb-95">
            <div className="tab-content" id="courseTabContent">
               <div className={`tab-pane fade ${tab === 0 ? "show active" : ""}`} id="description" role="tabpanel" aria-labelledby="description-tab">
                  <div className="p-20">
                     <h3>Course Overview</h3>
                     <HTMLContent content={content} />
                  </div>
               </div>

               <div className={`tab-pane fade ${tab === 1 ? "show active" : ""}`} id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                  <div className="p-20">
                     <h3>Eligibility Criteria</h3>
                     <Content content={eligibility} />
                  </div>
               </div>
               <div className={`tab-pane fade ${tab === 2 ? "show active" : ""}`} id="review" role="tabpanel" aria-labelledby="review-tab">
                  <div className="p-20">
                     <h3>Course Outcomes</h3>
                     <Content content={course_outcomes} />
                  </div>
               </div>
               <div className={`tab-pane fade ${tab === 3 ? "show active" : ""}`} id="member" role="tabpanel" aria-labelledby="member-tab">
                  <div className="p-20">
                     <h3>Career Opportunities</h3>
                     <Content content={career_opportunities} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DetailsTabItems;