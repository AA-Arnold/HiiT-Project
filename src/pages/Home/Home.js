import React from "react";
import { Link } from "react-router-dom";
import Reasons from "../../components/Reasons";
import { MDBAnimation } from "mdbreact";
// import "../../App.css";
import "./Home.css";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    // banner starts here
    <>
      <div className="homeHero homeSection">
        <div className="demo">
          <div className="banner">
            <h1>Horwath Dafinone</h1>
            <div>
              <p>The value we bring to our clients.</p>
            </div>
            <Link to="./Career" className="btn">
              Our Services
            </Link>
          </div>
        </div>
      </div>
      {/*--------------------------- home body --------------------------------*/}
      <MDBAnimation reveal type="fadeInDown" duration="3s">
        <div className="wrapper">
          <div className="Heading">Welcome To Horwath Dafinone</div>
          <div className="subHeading">The Unique Alternative to the Big Four</div>
          <div className="stroke"></div>
          <div className="paragraph">
            Horwath Dafinone is one of the largest indigenous accounting and consulting firms in
            Nigeria. We assist public and private company clients in reaching their goals through
            audit, tax, advisory, risk and performance services. With over 100 personnel, we serve
            clients throughout Nigeria and worldwide as an independent member of Crowe Horwath
            International, one of the largest networks in the world, consisting of more than 140
            independent accounting and management consulting firms with offices in more than 400
            cities around the world.
          </div>
        </div>
      </MDBAnimation>
      <MDBAnimation reveal type="flipInX" duration="3s">
        <Reasons />
      </MDBAnimation>
    </>
  );
};

export default Home;
