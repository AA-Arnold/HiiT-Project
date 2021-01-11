import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from "mdbreact";

const Services = () => {
  return (
    <>
      <div className="servicesHero  defaultServices">
        <div className="demo">
          <div className="banner">
            <h1>Services</h1>
            <div>
              <p>we support your work</p>
            </div>
            <Link to="./Affiliates" className="btn">
              Affiliates
            </Link>
          </div>
        </div>
      </div>
      {/*-------------------------- beginning of first row---------------------------------------------- */}
      <MDBCol className="section">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <div className="d-flex flex-row">
                <MDBAnimation reveal type="pulse" duration="4s" delay="5s">
                  <MDBIcon far icon="check-circle" size="3x" className="light-green-text mr-3" />
                </MDBAnimation>
                <div className="d-flex flex-column">
                  <MDBAnimation reveal type="fadeInUp" duration="4s">
                    <h3 className="mr-2">Audit</h3>
                    <p className="m-2">
                      The service that we render is primarily to ensure that our clients' financial
                      statements are prepared in accordance with statutory requirements, and conform
                      to the accounting standards as required by the Indigenous and International
                      Professional Institutes.
                    </p>
                    <br />
                    <ul className="m-3 fa-ul">
                      <li>
                        <MDBIcon className="light-green-text" icon="spinner" list spin />{" "}
                        Identifying areas to increase operational efficiency
                      </li>
                      <br />
                      <li>
                        <MDBIcon className="light-green-text" icon="spinner" list spin />{" "}
                        Identifying areas to increase profitability
                      </li>
                      <br />
                      <li>
                        <MDBIcon className="light-green-text" icon="spinner" list spin /> Improving
                        accounting and reporting systems
                      </li>
                      <br />
                      <li>
                        <MDBIcon className="light-green-text" icon="spinner" list spin /> Advising
                        on appropriate business controls
                      </li>
                    </ul>
                  </MDBAnimation>
                </div>
              </div>
            </MDBCol>

            <MDBCol md="6">
              <div className="d-flex flex-row">
                <MDBIcon icon="bolt" size="3x" className=" indigo-text mr-3" />
                <MDBAnimation reveal type="fadeInUp" duration="4s" delay="2s">
                  <div className="d-flex flex-column">
                    <h3 className="mr-2">Taxation</h3>
                    <p className="m-2">
                      We provide a full range of Tax services for both our Local and International
                      clients. Although the majority of our clients are corporations, we also
                      provide advice and services to individuals. The department, in addition
                      regularly produces circulars and guidelines in respect of the interpretation
                      and application of new tax legislation.
                    </p>
                    <br />
                    <ul className="m-3 fa-ul">
                      <li>
                        <MDBIcon className="indigo-text" icon="spinner" list spin />
                        Employee benefits - introduction of or advice on tax efficient remuneration
                        packages, profit related pay schemes and share option and incentive schemes;
                      </li>
                      <br />
                      <li>
                        <MDBIcon className="indigo-text" icon="spinner" list spin />
                        Advice on management buy-outs and arrangements for tax efficient structures
                        and financing
                      </li>
                    </ul>
                  </div>
                </MDBAnimation>
              </div>
            </MDBCol>
          </MDBRow>{" "}
          {/*-------------------------ending of first row-------------------------------------*/}
          <MDBRow className="mt-5">
            <MDBCol md="6">
              <div className="d-flex flex-row">
                <MDBIcon fas='true' icon="bacon" size="3x" className="deep-purple-text mr-3" />
                <MDBAnimation reveal type="fadeInUp" duration="4s" delay="4s">
                  <div className="d-flex flex-column">
                    <h3 className="mr-2">Liquidation &amp; Receivership</h3>
                    <p className="m-2">
                      De-regulation of the economy has created new hopes and fears. Businesses, in
                      an era of de-regulation may now find themselves saddled with problems in
                      respect of the funding of their operations. Under these circumstances, they
                      may be rescued from bankruptcy or liquidation by using methods such as debt
                      rescheduling, reconstructions, amalgamations and schemes of arrangement.
                      </p>
                    <br />
                    <ul className="m-3 fa-ul">
                      <li>
                        <MDBIcon className="deep-purple-text" icon="spinner" list spin />
                          Reviewing existing controls so that the risk of bad debts and losses
                          arising are minimised
                        </li>
                      <br />
                      <li>
                        <MDBIcon className="deep-purple-text" icon="spinner" list spin />
                          Attending meetings of creditors and reporting on recovery prospects
                        </li>
                      <br />
                      <li>
                        <MDBIcon className="deep-purple-text" icon="spinner" list spin />
                          Providing professional advice to directors of troubled businesses;
                        </li>
                    </ul>
                  </div>
                </MDBAnimation>
              </div>
            </MDBCol>
            {/*-------------------------ending of second row-------------------------------------*/}
            <MDBCol md="6">
              <div className="d-flex flex-row">
                <MDBIcon fas='true' icon="chart-line" size="3x" className="deep-orange-text mr-3" />
                <MDBAnimation reveal type="fadeInUp" duration="4s" delay="6s">
                  <div className="d-flex flex-column">
                    <h3 className="mr-2">Value Added Tax</h3>
                    <p className="m-2">
                      With the introduction of Value Added Tax in 1993, businesses that provide or
                      purchase goods and services are now faced with added legal and financial
                      responsibilities. As contributors during the drafting of the new legislation
                      and specialists in this field, we are able to provide assistance in the form
                      of:
                      </p>
                    <br />
                    <ul className="m-3 fa-ul">
                      <li>
                        <MDBIcon className="deep-orange-text" icon="spinner" list spin />
                          Provision of training for staff
                        </li>
                      <br />
                      <li>
                        <MDBIcon className="deep-orange-text" icon="spinner" list spin />
                          Negotiations with officials responsible for the administration of the tax
                          to ensure that the interests of the client are protected
                        </li>
                      <br />
                      <li>
                        <MDBIcon className="deep-orange-text" icon="spinner" list spin />
                          Negotiations with officials responsible for the administration of the tax
                          to ensure that the interests of the client are protected
                        </li>
                    </ul>
                  </div>
                </MDBAnimation>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBCol>

      {/* <Card /> */}
    </>
  );
};

export default Services;
