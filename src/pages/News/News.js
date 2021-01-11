import React from "react";
import { Link } from "react-router-dom";
import "./News.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Property from "../../images/propertyconsulting.jpeg";
import Coperate from "../../images/coperateF.jpeg";
import IT from "../../images/IT.jpeg";
import Invest from "../../images/invest.jpg";
import Lgs from "../../images/legsupport.jpeg";
import Section from "./components/Section";

const News = () => {
  return (
    <div>
      <div className="NewsHero defaultNews">
        <div className="demo">
          <div className="banner">
            <h1>News</h1>
            <div>
              <p>Activies</p>
            </div>
            <Link to="./ContactUs" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/*----------------------------------- body------------------------------- */}
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="7">
            <Section
              img={IT}
              title={"Information Technology"}
              btn={"Read More"}
              p={
                "Our affiliated company (Dafinone Consulting limited) has several consultants with significant experience and expertise in installing and running computer systems and software. "
              }
            />
            <div style={{ float: "left", marginTop: "20px" }}>
              <Section
                img={Coperate}
                title={"Corporate Finance"}
                btn={"Read More"}
                p={
                  "Our experts in this field offer independent and objective advice to companies and their shareholders in the following areas"
                }
              />
            </div>

            <div style={{ float: "left", marginTop: "20px" }}>
              <Section
                img={Property}
                title={"Property Consulting"}
                btn={"Read More"}
                p={
                  "In today's sophisticated property markets the making of sound decisions is not an easy task.  The economics of each transaction are substantially affected by accounting, tax and financial constraints. "
                }
              />
            </div>

            <div style={{ float: "left", marginTop: "20px" }}>
              <Section
                img={Lgs}
                title={"Litigation Support"}
                btn={"Read More"}
                p={
                  "We, when necessary, act for solicitors and barristers in connection with their accounting and taxation affairs"
                }
              />
            </div>

            <div style={{ float: "left", marginTop: "20px", marginBottom: "60px" }}>
              <Section
                img={Invest}
                title={"Investigations"}
                btn={"load more"}
                p={
                  "Investigations can be varied and complex. Our dedicated teams of multi-disciplinary professionals will assist you in many area"
                }
              />
            </div>

            {/*opening div*/}
          </MDBCol>

          <MDBCol md="3 offset-md-2  ">
            <input type="search" placeholder="search" className="mt-5" />
            <h3 className="mt-5">Categories</h3>
            <div>
              Business <span style={{ marginLeft: "120px" }}> 12 </span>
              <hr />
              Finance <span style={{ marginLeft: "120px" }}> 7 </span>
              <hr />
              Supports <span style={{ marginLeft: "120px" }}> 8 </span>
              <hr />
              Startups <span style={{ marginLeft: "120px" }}> 24 </span>
            </div>
            <h3 className="mt-5">Recent News</h3>
            <p>lorem lorem lorem lorem</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default News;
