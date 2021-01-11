import React from "react";
import "./staff.css";
import Img from "../../images/face.jpg";
import Img2 from "../../images/face2.jpg";
import Img3 from "../../images/face3.jpg";
const Staff = () => {
  return (
    <div className="staff">
      <div className="container">
        <div className="box">
          <div className="imgBx">
            <img src={Img} alt="staff1" width="400" height="400" />
          </div>
          <div className="content">
            <h2>software Engineer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <span href="#">Read More</span>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={Img2} alt='' width="400" height="400" />
          </div>
          <div className="content">
            <h2>Manager</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <span href="#">Read More</span>
          </div>
        </div>
        <div className="box">
          <div className="imgBx">
            <img src={Img3} alt='' width="400" height="400" />
          </div>
          <div className="content">
            <h2>Maketing strategist</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <span href="#">Read More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
