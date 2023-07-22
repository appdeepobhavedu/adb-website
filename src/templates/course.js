import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import DetailsTabItems from "../components/DetailsTabItems";
import { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const CourseTemplate = ({
  content,
  course_outcomes,
  career_opportunities,
  eligibility,
  contentComponent,
  description,
  tags,
  title,
  acronym,
  helmet,
  is_featured,
  duration,
  duration_phrase,
  seats,
  admission_fee,
  application_and_prospectus_fee,
  per_semester_fee,
  total_fee,
  fee_notes,
  hostel_charges,
}) => {
  // const PostContent = contentComponent || Content;

  return (
    <>
     <section className="course__area pt-115 pb-25">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="course__wrapper">
              <div className="page__title-content mb-25">
                <div className="breadcrumb__list breadcrumb__list-2 mb-10">
                  <span><Link to="/">Home</Link></span>
                  <span className="dvdr">
                    <i className="fa-regular fa-angle-right"></i>
                  </span>
                  <span><Link to="/course">All Courses</Link></span>
                </div>
                <h5 className="breadcrumb__title-2">{title} ({acronym})</h5>
              </div>
              <div className="course__meta-2 d-sm-flex align-items-center mb-30">
                {/*<div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                  <div className="course__teacher-thumb-3 mr-15">
                    <img src={teacher_img} alt="" />
                  </div>
                  <div className="course__teacher-info-3">
                    <h5>Teacher</h5>
                    <p><a href="#">{tutor_name}</a></p>
                  </div>
                </div>*/}
                {/*<div className="course__update mr-80 mb-30">
                  <h5>Last Update:</h5>
                  <p>{date}</p>
                </div>*/}
                {/*<div className="course__rating-2 mb-30">
                  <h5>Review:</h5>
                  <div className="course__rating-inner d-flex align-items-center">
                    <ul>
                      <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                      <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                      <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                      <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                      <li><a href="#"><i className="fa-solid fa-star"></i></a></li>
                    </ul>
                    <p>{review}</p>
                  </div>
                </div>*/}
              </div>
              {/*<div className="course__img w-img mb-30">
                <img src={img_bg} alt="" />
              </div>*/}

              <DetailsTabItems
                dynamicPage={true}
                content={content}
                course_outcomes={course_outcomes}
                career_opportunities={career_opportunities}
                eligibility={eligibility}
              />

              <div className="course__related">
                {/*<div className="row">
                  <div className="col-xxl-12">
                    <div className="section__title-wrapper mb-40">
                      <h2 className="section__title">Related Course</h2>
                      <p>You dont have to struggle alone, you have got our assistance and help.</p>
                    </div>
                  </div>
                </div>*/}
                {/*<div className="row">
                  <div className="col-xxl-12">
                    <div className="course__slider swiper-container pb-60">
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className='swiper-wrapper'
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 6000 }}
                        breakpoints={{
                          550: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          992: {
                            slidesPerView: 2,
                          },
                        }}
                      >

                        {
                          allCourseItems.slice(0, 6).map(testimonial => {
                            const { price, category, img_bg, title, review, enrolled, watching, teacher_img, _id } = testimonial;
                            return <SwiperSlide key={testimonial.id}>
                              <div className="course__item-2 swiper-slide transition-3 white-bg mb-30 fix">
                                <div className="course__thumb-2 w-img fix course_thumb_height">
                                  <Link href={`/course-details/${_id}`}>
                                    <a>
                                      <img src={img_bg} alt="" />
                                    </a>
                                  </Link>
                                </div>
                                <div className="course__content-2">
                                  <div className="course__top-2 d-flex align-items-center justify-content-between">
                                    <div className="course__tag-2">
                                      <Link href={`/course-details/${_id}`}>
                                        <a >{category}</a>
                                      </Link>
                                    </div>
                                    <div className="course__price-2">
                                      <span>${price}</span>
                                    </div>
                                  </div>
                                  <h3 className="course__title-2">
                                    <Link href={`/course-details/${_id}`}>
                                      <a >{title.slice(0, 30)}...</a>
                                    </Link>
                                  </h3>
                                  <div className="course__bottom-2 d-flex align-items-center justify-content-between">
                                    <div className="course__action">
                                      <ul>
                                        <li>
                                          <div className="course__action-item d-flex align-items-center">
                                            <div className="course__action-icon mr-5">
                                              <span>
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M5.00004 5.5833C6.28592 5.5833 7.32833 4.5573 7.32833 3.29165C7.32833 2.02601 6.28592 1 5.00004 1C3.71416 1 2.67175 2.02601 2.67175 3.29165C2.67175 4.5573 3.71416 5.5833 5.00004 5.5833Z" stroke="#5F6160" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                  <path d="M9 11.0001C9 9.22632 7.20722 7.79175 5 7.79175C2.79278 7.79175 1 9.22632 1 11.0001" stroke="#5F6160" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                              </span>
                                            </div>
                                            <div className="course__action-content">
                                              <span>{enrolled.substring(0, 3)}</span>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="course__action-item d-flex align-items-center">
                                            <div className="course__action-icon mr-5">
                                              <span>
                                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M9.01232 5.95416C9.01232 7.06709 8.11298 7.96642 7.00006 7.96642C5.88713 7.96642 4.98779 7.06709 4.98779 5.95416C4.98779 4.84123 5.88713 3.94189 7.00006 3.94189C8.11298 3.94189 9.01232 4.84123 9.01232 5.95416Z" stroke="#5F6160" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                  <path d="M7 10.6026C8.98416 10.6026 10.8334 9.43342 12.1206 7.40991C12.6265 6.61737 12.6265 5.28523 12.1206 4.49269C10.8334 2.46919 8.98416 1.30005 7 1.30005C5.01584 1.30005 3.16658 2.46919 1.87941 4.49269C1.37353 5.28523 1.37353 6.61737 1.87941 7.40991C3.16658 9.43342 5.01584 10.6026 7 10.6026Z" stroke="#5F6160" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                              </span>
                                            </div>
                                            <div className="course__action-content">
                                              <span>{watching}</span>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="course__action-item d-flex align-items-center">
                                            <div className="course__action-icon mr-5">
                                              <span>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M6.86447 1.72209L7.74447 3.49644C7.86447 3.74343 8.18447 3.98035 8.45447 4.02572L10.0495 4.29288C11.0695 4.46426 11.3095 5.2103 10.5745 5.94625L9.33447 7.19636C9.12447 7.40807 9.00947 7.81637 9.07447 8.10873L9.42947 9.65625C9.70947 10.8812 9.06447 11.355 7.98947 10.7148L6.49447 9.82259C6.22447 9.66129 5.77947 9.66129 5.50447 9.82259L4.00947 10.7148C2.93947 11.355 2.28947 10.8761 2.56947 9.65625L2.92447 8.10873C2.98947 7.81637 2.87447 7.40807 2.66447 7.19636L1.42447 5.94625C0.694466 5.2103 0.929466 4.46426 1.94947 4.29288L3.54447 4.02572C3.80947 3.98035 4.12947 3.74343 4.24947 3.49644L5.12947 1.72209C5.60947 0.759304 6.38947 0.759304 6.86447 1.72209Z" stroke="#5F6160" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                              </span>
                                            </div>
                                            <div className="course__action-content">
                                              <span>{review}</span>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="course__tutor-2">
                                      <a href="#">
                                        <img src={teacher_img} alt="" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          })
                        }

                      </Swiper>

                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
                </div>*/}
              </div>

            </div>
          </div>


          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="course__sidebar pl-70 p-relative">
              <div className="course__sidebar-widget-2 white-bg mb-20">
                <div className="course__video">
                  <div className="course__video-content mb-35">
                    <ul>
                      {
                        seats?
                        <li className="d-flex align-items-center">
                          <div className="course__video-icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                              x="0px" y="0px" viewBox="0 0 24 24" style={{ enableBackground: "new 0 0 16 16" }} xmlSpace="preserve">
                              <path className="st0" d="M4,19.5C4,18.1,5.1,17,6.5,17H20" />
                              <path className="st0" d="M6.5,2H20v20H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2z" />
                            </svg>
                          </div>
                          <div className="course__video-info">
                            <h5><span>Seats:</span>{seats}</h5>
                          </div>
                        </li>
                        :
                        null
                      }
                      <li className="d-flex align-items-center">
                        <div className="course__video-icon">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            x="0px" y="0px" viewBox="0 0 16 16" style={{ enableBackground: "new 0 0 16 16" }} xmlSpace="preserve">
                            <circle className="st0" cx="8" cy="8" r="6.7" />
                            <polyline className="st0" points="8,4 8,8 10.7,9.3 " />
                          </svg>
                        </div>
                        <div className="course__video-info pr-1">
                          <h5><span>Duration:</span></h5>
                        </div>
                        <div><span className="d-block" style={{lineHeight: "1.2"}}>{duration_phrase ? duration_phrase : duration}</span></div>
                      </li>
                      {/*<li className="d-flex align-items-center">
                        <div className="course__video-icon">
                          <svg>
                            <path className="st0" d="M13.3,14v-1.3c0-1.5-1.2-2.7-2.7-2.7H5.3c-1.5,0-2.7,1.2-2.7,2.7V14" />
                            <circle className="st0" cx="8" cy="4.7" r="2.7" />
                          </svg>
                        </div>
                        <div className="course__video-info">
                          <h5><span>Enrolled :</span>{enrolled?.substring(0, 3)} students</h5>
                        </div>
                      </li>*/}
                      {/*<li className="d-flex align-items-center">
                        <div className="course__video-icon">
                          <svg>
                            <circle className="st0" cx="8" cy="8" r="6.7" />
                            <line className="st0" x1="1.3" y1="8" x2="14.7" y2="8" />
                            <path className="st0" d="M8,1.3c1.7,1.8,2.6,4.2,2.7,6.7c-0.1,2.5-1,4.8-2.7,6.7C6.3,12.8,5.4,10.5,5.3,8C5.4,5.5,6.3,3.2,8,1.3z" />
                          </svg>
                        </div>
                        <div className="course__video-info">
                          <h5><span>Language :</span>English</h5>
                        </div>
                      </li>*/}
                    </ul>
                  </div>
                  <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                    <div className="course__video-price">
                      <h4>Rs. {application_and_prospectus_fee}</h4>
                      <h6>Application & Prospectus Fee</h6>
                    </div>
                  </div>
                  {/*<div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                    <div className="course__video-price">
                      <h4>Rs. {admission_fee}</h4>
                      <h6>Admission Fee</h6>
                    </div>
                  </div>
                  <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                    <div className="course__video-price">
                      <h4>Rs. {per_semester_fee}</h4>
                      <h6>Per Semester Fee</h6>
                    </div>
                  </div>
                  <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                    <div className="course__video-price">
                      <h5>Rs. {total_fee}</h5>
                      <h6>Total Fee</h6>
                    </div>
                  </div>*/}
                  <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                    <div className="course__video-price">
                      <h6>Note:</h6>
                      <p><b>{fee_notes}</b></p>
                    </div>
                  </div>
                  {/*<div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                    <div className="course__video-price">
                      <h6>Hostel Charges:</h6>
                      <p>{hostel_charges}</p>
                    </div>
                  </div>*/}
                  <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
                    <div className="course__video-price">
                      <h6>Application Form:</h6>
                      <p>Download the application, print it, complete it, attach the required documents, have them attested, and submit a scanned copy to admissions@adbinstitute.in</p>
                    </div>
                  </div>
                  {/*<div className="course__payment mb-35">
                    <h3>Payment:</h3>
                    <a href="#">
                      <img src={"/" + "assets/img/course/payment/payment-1.png"} alt="" />
                    </a>
                  </div>*/}


                  <a href={`/pdf/${acronym}.pdf`} download className="tp-btn w-100 text-center my-3">Download Application Form</a>

                  {/*<div className="course__enroll-btn">
                    {
                      user?.email && !paymentInformation?.payment ? <button onClick={handleShow} type="button" className="tp-btn w-100 text-center">Enroll
                        <i className="far fa-arrow-right ms-3"></i>
                      </button> : paymentInformation?.payment ? <button type="button" className="tp-btn w-100 text-center">
                        Already Enrolled </button>
                        : <Link href="/sign-in">
                          <a>
                            <button type="button" className="tp-btn w-100 text-center">Login To Buy
                              <i className="far fa-arrow-right ms-3"></i>
                            </button>
                          </a>
                        </Link>
                    }
                  </div>*/}

                </div>
              </div>

              {/*<SidebarRelatedCourse />*/}

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

CourseTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CourseTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        acronym={post.frontmatter.acronym}
        is_featured={post.frontmatter.is_featured}
        duration={post.frontmatter.duration}
        duration_phrase={post.frontmatter.duration_phrase}
        seats={post.frontmatter.seats}
        admission_fee={post.frontmatter.admission_fee}
        per_semester_fee={post.frontmatter.per_semester_fee}
        application_and_prospectus_fee={post.frontmatter.application_and_prospectus_fee}
        total_fee={post.frontmatter.total_fee}
        fee_notes={post.frontmatter.fee_notes}
        hostel_charges={post.frontmatter.hostel_charges}

        course_outcomes={post.frontmatter.course_outcomes}
        career_opportunities={post.frontmatter.career_opportunities}
        eligibility={post.frontmatter.eligibility}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query CourseByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        acronym
        description
        tags
        is_featured
        duration
        duration_phrase
        seats
        admission_fee
        application_and_prospectus_fee
        per_semester_fee
        total_fee
        fee_notes
        hostel_charges
        course_outcomes
        career_opportunities
        eligibility
      }
    }
  }
`;
