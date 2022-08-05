import * as React from "react";

import Layout from "../../components/Layout";
import CourseRoll from "../../components/CourseRoll";

import FullWidthImage from "../../components/FullWidthImage";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FullWidthImage title={'All Courses'} />
        <section className="section">
          <div className="container">
            <div className="content">
              <CourseRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
