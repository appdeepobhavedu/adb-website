import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";
// import FullWidthImage from "../components/FullWidthImage";

// import Head from "next/head";
import AboutArea from "../components/Home/AboutArea";
// import HomeBlog from "../components/Home/HomeBlog";
import Campus from "../components/Home/Campus";
// import CounterArea from "../components/Home/CounterArea";
import Features from "../components/Home/Features";
// import Header from "../components/Home/Header";
import HeroArea from "../components/Home/HeroArea";
import CategoryArea from "../components/Home/CategoryArea";
// import HomeCourses from "../components/Home/HomeCourses";
import ResearchArea from "../components/Home/ResearchArea";
import Cta from "../components/Home/Cta";
// import Footer from "../components/common/Footer";
// import SEO from "../components/seo";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  about_college,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <HeroArea img={heroImage} title={title} heading={heading} subheading={subheading} />
      <Features />
      <CategoryArea />
      <AboutArea about_college={about_college} />
      {/*<HomeCourses />*/}
      <Campus />
      <ResearchArea />
      {/*<HomeBlog />*/}
      <Cta />
      {/*<section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  about_college: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        about_college={frontmatter.about_college}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        about_college {
          title
          heading
          sub_heading
          features {
            feature
          }
        }
      }
    }
  }
`;
