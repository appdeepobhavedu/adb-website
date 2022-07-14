import React from "react";
import Layout from "../../components/Layout";
import ContactInfoArea from "../../components/ContactInfoArea";

// eslint-disable-next-line
export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>We will get back you at the earliest.</p>
        </div>
      </div>
      <ContactInfoArea />
    </section>
  </Layout>
);
