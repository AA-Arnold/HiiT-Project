import React from "react";
import { Link } from "react-router-dom";
import "./Affiliate.css";
import AffiliateSection from "./AffiliateSection";

const Affiliates = () => {
  return (
    <div>
      <div className="affiliateHero defaultAffiliate">
        <div className="demo">
          <div className="banner">
            <h1>Affiliate</h1>
            <div>
              <p>we support your work</p>
            </div>
            <Link to="./Career" className="btn">
              Career
            </Link>
          </div>
        </div>
      </div>
      {/* body section */}

      <AffiliateSection />
    </div>
  );
};

export default Affiliates;
