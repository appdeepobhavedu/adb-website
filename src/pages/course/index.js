import * as React from "react";

import Layout from "../../components/Layout";
import CourseRoll from "../../components/CourseRoll";

// import FullWidthImage from "../../components/FullWidthImage";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="course__area pt-115 pb-90 grey-bg-3">
          <div className="container">
            <div className="content">
              <h1 className="px-3 py-3">All Courses</h1>
              <CourseRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
