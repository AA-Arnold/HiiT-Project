import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import Form from "./Form";
import Staff from "./Staff";
const ContactUs = () => {
  return (
    <div className="herocontact">
      <div className="contactHero defaultAffiliate">
        <div className="demo">
          <div className="banner">
            <h1>Contact Us</h1>
            <div>
              <p>We Value our clients</p>
            </div>
            <Link to="./ContactUs" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Form />
      <Staff />
    </div>
  );
};

export default ContactUs;
