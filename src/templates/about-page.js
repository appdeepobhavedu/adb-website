import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, banner_image, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  console.log("banner_image", banner_image)
  return (
    <section className="section section--gradient">
    <section
      className="breadcrumb__area include-bg pt-150 pb-150 mb-100 breadcrumb__overlay"
      style={{ background: `url(${banner_image.substring(7)})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
       <div className="container">
          <div className="row">
             <div className="col-xxl-12">
                <div className="breadcrumb__content text-center p-relative z-index-1">
                   <h3 className="breadcrumb__title">{title}</h3>
                </div>
             </div>
          </div>
       </div>
      </section>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  banner_image: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        banner_image={post.frontmatter.banner_image}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        banner_image
      }
    }
  }
`;
