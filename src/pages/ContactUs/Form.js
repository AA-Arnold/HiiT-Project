import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBAnimation } from "mdbreact";

const FormPage = () => {
  return (
    //------------------------------ FormPage--------------------------------------------
    <MDBContainer>
      <MDBRow>
        <MDBCol md="5">
          <MDBAnimation reveal type="flipInX" duration="4s">
            <form className="mt-5">
              <p className="h4 text-center mb-4">Write to us</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Your name
              </label>
              <input type="text" id="defaultFormContactNameEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Your email
              </label>
              <input type="email" id="defaultFormContactEmailEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                Subject
              </label>
              <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                Your message
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="3"
              />
              <div className="text-center mt-4">
                <MDBBtn color="warning" outline type="submit">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBAnimation>
        </MDBCol>

        {/* --------------------------------Address informations--------------------------------------- */}

        <MDBCol md="4" className="offset-md-3">
          <MDBAnimation reveal type="fadeInRight" duration="4s" delay="2s">
            <h4 className="mt-5">Physical Address: </h4>
            <p>
              {" "}
              Ceddi Towers 16 Wharf Road, <br />
              Apapa P. O. Box 2151 Marina Lagos,
              <br />
              Nigeria
            </p>
            <h4 className="mt-5">Tel</h4>
            <p>
              +23414600518-9 <br />
              +23417615480 <br />
              +23414600619 <br />
              +2348039786138
            </p>
            <h4 className="mt-5">SERVICE HOTLINES</h4>
            <p>
              TAX tax@dafinone.com AUDIT:audit@dafinone.com ACCOUNTING:csl@dafinone.com
              IT:sage@dafinone.com
            </p>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>

      {/* ---------------------------------our team------------------------------------------- */}
      <MDBRow className="mt-5">
        <MDBCol className="mt-5">
          <h4>Our Team</h4>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
