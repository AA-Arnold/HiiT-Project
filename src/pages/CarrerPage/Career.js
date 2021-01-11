import React from "react";
import { Link } from "react-router-dom";
import "./career.css";
import Jumbo from "./Jumbo";
const Career = () => {
  return (
    <div>
      <div className="careerHero defaultAffiliate">
        <div className="demo">
          <div className="banner">
            <h1>Career</h1>
            <div>
              <p>Bright Future</p>
            </div>
            <Link to="./ContactUs" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Jumbo />
    </div>
  );
};

export default Career;
