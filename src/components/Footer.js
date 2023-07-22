import React from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

import logo from "../img/logo.jpg";

const Footer = class extends React.Component {
  render() {
    const { data } = this.props
    // console.log("data.allMarkdownRemark", data.allMarkdownRemark)
    const { edges: courses } = data.allMarkdownRemark
    let white_bg = ''
    return (
       <>
          <footer>
             <div className="footer__area">
                <div className={`footer__top pt-95 pb-45 ${white_bg && white_bg}`}>
                   <div className="container">
                      <div className="row">
                         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer__widget footer-col-1 mb-50">
                               <div className="footer__logo">
                                  <div className="logo">
                                     <Link to="/">
                                       <img src={logo} alt="logo" />
                                     </Link>
                                  </div>
                               </div>
                               <div className="footer__widget-content">
                                  <div className="footer__widget-info">
                                     <p>Revolutionising HealthCare from Grassroots.</p>
                                     <div className="footer__social">
                                        <h4>Follow Us</h4>

                                        <ul>
                                           <li><a href="https://www.facebook.com/adbncggh" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"> </i></a></li>
                                           {/*<li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"> </i></a></li>*/}
                                           {/*<li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"> </i></a></li>*/}
                                        </ul>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-6">
                            <div className="footer__widget mb-50">
                               <h3 className="footer__widget-title">Links</h3>
                               <div className="footer__widget-content">
                                  <ul>
                                     <li>
                                        <a href="/pdf/ADB-brochure-web-version.pdf" download>Download Prospectus</a>
                                     </li>
                                     <li>
                                        <Link to="/words-from-chairman">Words From Chairman</Link>
                                     </li>
                                     <li>
                                        <Link to="/words-from-vice-chairman">Words From Vice Chairman</Link>
                                     </li>
                                     <li>
                                        <Link to="/words-from-director">Words From Director</Link>
                                     </li>
                                     <li>
                                        <Link to="/words-from-principal">Message From Principal</Link>
                                     </li>
                                  </ul>
                               </div>
                            </div>
                         </div>
                         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-6">
                            <div className="footer__widget mb-50">
                               <h3 className="footer__widget-title">Explore Courses</h3>
                               <div className="footer__widget-content">
                                  <ul>
                                    {
                                       courses.map((course, index) => {
                                          // console.log("course", course.node.frontmatter)
                                          const {title} = course.node.frontmatter;
                                          const slug = course.node.fields.slug;
                                          return <li key={index}>
                                             <Link to={slug}>{title}</Link>
                                          </li>
                                       })
                                    }
                                  </ul>
                               </div>
                            </div>
                         </div>
                         {/*<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                          <div className="footer__widget footer-col-4 mb-50">
                             <h3 className="footer__widget-title">Sign up for our newsletter</h3>

                             <div className="footer__subscribe">
                                <p>Receive weekly newsletter with educational materials, popular books and much more!</p>
                                <form action="#">
                                   <div className="footer__subscribe-input">
                                      <input type="text" placeholder="Email" />
                                      <button type="submit" className="tp-btn-subscribe">Subscribe</button>
                                   </div>
                                </form>
                             </div>
                          </div>
                       </div>*/}
                      </div>
                   </div>
                </div>
                <div className={`footer__bottom ${white_bg && white_bg}`}>
                   <div className="container">
                      <div className="footer__bottom-inner">
                         <div className="row">
                            <div className="col-xxl-12">
                               <div className="footer__copyright text-center">
                                  <p>© 2022 App Deepo Bhav Trust. All Rights Reserved</p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </footer>
       </>
    );
  }
};

CourseRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function CourseRoll() {
  return (
    <StaticQuery
      query={graphql`
        query FooterRollQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___order] }
            filter: { frontmatter: { templateKey: { eq: "course" } } }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Footer data={data} count={count} />}
    />
  );
}