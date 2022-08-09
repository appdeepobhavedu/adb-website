import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
// import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const WordsFromPageTemplate = ({ title, banner_image, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const bannerImage = getImage(banner_image) || banner_image;
  console.log(bannerImage, banner_image)
  return (
    <section className="section section--gradient pt-120 pb-120 grey-bg-3">
      <div className="container">
        <div className="row">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 pt-10">
            <GatsbyImage
              image={bannerImage}
              objectFit={"cover"}
              objectPosition="top left"
              style={{
                gridArea: "1/1",
                height: 360,
              }}
              alt={title}
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
            <div className="container">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="section">
                    <PageContent className="content" content={content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WordsFromPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  banner_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const WordsFromPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <WordsFromPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        banner_image={post.frontmatter.banner_image}
        content={post.html}
      />
    </Layout>
  );
};

WordsFromPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WordsFromPage;

export const WordsFromPageQuery = graphql`
  query WordsFromPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title,
        banner_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
