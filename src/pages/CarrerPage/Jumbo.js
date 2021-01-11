import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBAnimation } from "mdbreact";
import "./jumbo.css";

const FeaturesPage = () => {
  return (
    <section className="my-5">
      <MDBAnimation reveal type="bounceInUp" duration="2s">
        <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          Our culture is characterized by a desire to invest in our people and to build our
          resources for the long-term maximization of value to our clients
        </p>
      </MDBAnimation>

      <MDBRow className="background">
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="flag-checkered" size="2x" className="orange-text" />
            </MDBCol>
            <MDBCol size="10">
              <MDBAnimation reveal type="bounceInLeft" duration="2s" delay="1s">
                <h5 className="font-weight-bold mb-3">Annual Bonus and Long Service Award</h5>
                <p className="grey-text">
                  Our culture is characterized by a desire to invest in our people and to build our
                  resources for the long-term maximization of value to our clients.
                </p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="flask" size="2x" className="orange-text" />
            </MDBCol>
            <MDBCol size="10">
              <MDBAnimation reveal type="bounceInLeft" duration="2s" delay="2s">
                <h5 className="font-weight-bold mb-3">Medical and Hospitalisation Benefits</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti hic.
                </p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="glass-martini" size="2x" className="orange-text" />
            </MDBCol>
            <MDBCol size="10">
              <MDBAnimation reveal type="bounceInLeft" duration="2s" delay="3s">
                <h5 className="font-weight-bold mb-3">Examination Leave</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti hic.
                </p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="text-name">
          {/* <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
            alt=""
          /> */}
        </MDBCol>
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="heart" size="2x" className="orange-text" />
            </MDBCol>
            <MDBCol size="10">
              <MDBAnimation reveal type="bounceInLeft" duration="2s" delay="1s">
                <h5 className="font-weight-bold mb-3">Beloved</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti hic.
                </p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="bolt" size="2x" className="orange-text" />
            </MDBCol>
            <MDBCol size="10">
              <MDBAnimation reveal type="bounceInLeft" duration="2s" delay="2s">
                <h5 className="font-weight-bold mb-3">Pension</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                  nam, aperiam minima assumenda deleniti hic.
                </p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="university" size="2x" className="orange-text" />
            </MDBCol>
            <MDBCol size="10">
              <MDBAnimation reveal type="bounceInLeft" duration="2s" delay="3s">
                <h5 className="font-weight-bold mb-3">Education Subsidies and Training Courses</h5>
                <p className="grey-text">
                  We consider that training is vital in our pursuit of professional excellence, and
                  accordingly, run in-house training courses and seminars regularly to ensure that
                  technical competence of staff at all levels is maintained and updated.
                </p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default FeaturesPage;
