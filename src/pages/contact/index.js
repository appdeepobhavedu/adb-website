import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import ContactArea from "./ContactArea";
import ContactInfoArea from "../../components/ContactInfoArea";

import bannerImage from "../../../static/img/contact.jpg";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <img src={bannerImage} title={"Contact Us"} alt={"Contact Us"} height="400" width="100%" style={{objectFit: "cover"}} />
        <section className="section">
          <div className="container">
            <div className="content">
              <ContactArea />
            </div>
          </div>
          <ContactInfoArea />
        </section>
      </Layout>
    );
  }
}
