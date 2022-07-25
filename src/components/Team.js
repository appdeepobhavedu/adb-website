import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Team = ({team_heading, team_subheading, team_members}) => {
   // console.log("team_members", team_members)
   // const bannerImage = getImage(banner_image) || banner_image;
   return (
      <>
         <section className="research__area research__border grey-bg-3 pt-115 pb-90 p-relative z-index-1">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <span className="section__title-pre">{team_heading}</span>
                        <h2 className="section__title section__title-44">{team_subheading}</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     team_members.map(member => {
                        return <div key={member.name} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className={`research__item ${member.border ? member.border : ''} text-center mb-30 transition-3`}>
                              <div className="research__thumb mb-35">
                                 <GatsbyImage
                                   image={getImage(member.photo) || member.photo}
                                   objectFit={"cover"}
                                   // objectPosition={imgPosition}
                                   style={{
                                     gridArea: "1/1",
                                     // You can set a maximum height for the image, if you wish.
                                     // height: height,
                                   }}
                                   alt={"Image of " + member.name}
                                   formats={["auto", "webp", "avif"]}
                                 />
                              </div>
                              <div className="research__content">
                                 <h3 className="research__title">{member.name}</h3>
                                 <p>{member.intro}</p>
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

export default Team;