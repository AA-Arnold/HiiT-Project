import React from "react";
import "./styles/Section.css";
import { MDBIcon } from "mdbreact";
// import Demo from "../../../images/Demo.jpg";

const Section = (props) => {
  return (
    <>
      <div className="block">
        {/* <MDBView hover zoom> */}
        <img src={props.img} alt="pics" width="300" height="250" />
        {/* </MDBView> */}
        <div className="imgText">
          <span>
            July 20, 2019 Adim <MDBIcon far icon="comments" /> 3
          </span>
          <h3>{props.title} </h3>
          <p>{props.p}</p>
          <button>{props.btn}</button>
        </div>
      </div>
    </>
  );
};

export default Section;
