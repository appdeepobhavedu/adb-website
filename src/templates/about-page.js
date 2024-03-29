import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Team from "../components/Team";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, banner_image, content, contentComponent, team_heading, team_subheading, team_members }) => {
  const PageContent = contentComponent || Content;
  const bannerImage = getImage(banner_image) || banner_image;

  return (
    <section className="section section--gradient">

      <FullWidthImage img={bannerImage} title={title} />
      <div className="container pt-120 pb-120">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
      {
        team_members.length > 0 ?
        <Team team_heading={team_heading} team_subheading={team_subheading} team_members={team_members} />
        :
        null
      }
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  banner_image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  team_heading: PropTypes.string,
  team_subheading: PropTypes.string,
  team_members: PropTypes.array,
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
        team_heading={post.frontmatter.team_heading}
        team_subheading={post.frontmatter.team_subheading}
        team_members={post.frontmatter.team_members}
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
        banner_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        team_heading
        team_subheading
        team_members {
          name
          intro
          photo {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
