import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Reasons extends Component {
  state = {
    services: [
      {
        icons: <FaCocktail />,
        title: "The value we bring to our clients",
        info:
          "We help clients succeed by combining thought leadership in a number of key industries with a comprehensive set of technical business competencies."
      },
      {
        icons: <FaHiking />,
        title: "The values we live daily.",
        info:
          "We care, we share, we invest, and we grow. These are the four core values that ground our firm. We care for one another, our clients, our firm, and our communities."
      },
      {
        icons: <FaShuttleVan />,
        title: "A high level of service commitment.",
        info:
          "We are committed to personal service and integrity. The high expectations we set for our service delivery teams are articulate throughout all facets of the firm from its values to its people."
      },
      {
        icons: <FaBeer />,
        title: "World-class Innovative Business Solutions",
        info:
          "Member firms of Crowe Horwath International offer comprehensive, international expertise in a broad range of business consulting practices, including assurance, benefit plan services, corporate finance, risk consulting."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="The Big Four Reasons to Consult Horwath Dafinone" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icons}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
export default Reasons;
