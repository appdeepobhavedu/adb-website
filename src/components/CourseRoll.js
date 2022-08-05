import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

import logo from "../img/logo.jpg";

class CourseRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    // console.log("data.allMarkdownRemark", data.allMarkdownRemark)
    const { edges: courses } = data.allMarkdownRemark
    return (
      <div className="columns is-multiline">
        {
          <div className="container">
            <div className="row">
              {
                courses.map((course, index) => {
                  // console.log("course", course.node.frontmatter)
                  const {img_bg = logo, price = 300, category = 'life', title = 'hello', teacher_img = logo, tutor_name = 'name name', lessons = '12'} = course.node.frontmatter;
                  const slug = course.node.fields.slug;
                  // console.log("slug", slug)
                  return <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                    <div className="course__item white-bg transition-3 mb-30">
                      <div className="course__thumb w-img fix course_thumb_height">
                        <Link to={slug}>
                            <img src={img_bg} alt="" />
                        </Link>
                      </div>
                      <div className="course__content p-relative">
                        <div className="course__price">
                          <span>${price}</span>
                        </div>
                        <div className="course__tag">
                          <Link to={slug}>
                            {category}
                          </Link>
                        </div>
                        <h3 className="course__title">
                          <Link to={slug}>
                            {title.substring(0, 30)}..
                          </Link>
                        </h3>
                        <p>A beginner’s guide to designing or renovating interior spaces that pop.</p>

                        <div className="course__bottom d-sm-flex align-items-center justify-content-between">
                          <div className="course__tutor">
                              <img src={teacher_img} alt="" />{tutor_name}
                          </div>
                          <div className="course__lesson">
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 12.2V4.49999C1 1.7 1.70588 1 4.52941 1H9.47059C12.2941 1 13 1.7 13 4.49999V11.5C13 11.598 13 11.696 12.9929 11.794" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M3.01176 10.0999H13V12.5498C13 13.9008 11.8918 14.9998 10.5294 14.9998H3.47059C2.10824 14.9998 1 13.9008 1 12.5498V12.0948C1 10.9959 1.90353 10.0999 3.01176 10.0999Z" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M4.17647 4.5H9.82353" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M4.17647 6.94995H7.70589" stroke="#49535B" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                              {lessons} Lessons
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query CourseRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "course" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <CourseRollTemplate data={data} count={count} />}
    />
  );
}
