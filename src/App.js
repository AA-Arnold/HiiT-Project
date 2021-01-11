import React, { Component } from "react";
import Services from "./pages/Services/Services";
import Affiliates from "./pages/AffiliatePage/Affiliates";
import Career from "./pages/CarrerPage/Career";
import News from "./pages/News/News";
import ContactUs from "./pages/ContactUs/ContactUs";
// import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
// import Footer2 from "./components/Footer2";
import Home from "./pages/Home/Home";
import { MDBAnimation } from "mdbreact";
// import "./App.css";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Affiliates" component={Affiliates} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/news" component={News} />
          <MDBAnimation reveal type="slideInRight" duration="3s">
            <Footer />
          </MDBAnimation>
        </Router>

        {/* <Switch>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/Affiliates" component={Affiliates} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/news" component={News} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route component={Error} />
          </Switch> */}
      </>
    );
  }
}

export default App;
