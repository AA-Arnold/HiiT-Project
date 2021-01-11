import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBMask, MDBView } from "mdbreact";
import Account from "../../images/accounting.jpg";
import info from "../../images/info.jpg";
import property from "../../images/propertyconsulting.jpeg";
import "./AffiliateSection.css";

const AffiliateSection = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12" sm="12">
          <h2 className="affHeader text-center">Affiliates</h2>
        </MDBCol>

        <MDBCol md="12" sm="12">
          <p className="text-center">
            The computer accounting systems we design are tailored to the individual client's needs.
            For clients who have their own computers, we are also able to assist in the installation
            of accounting systems. Where clients do not possess computerised facilities and yet wish
            to computerise their accounting records, they may initially utilise our computer bureau
            facilities, prior to the procurement of their hardware and software.
          </p>
        </MDBCol>

        <MDBCol md="6" sm="6">
          <MDBView hover zoom>
            <img src={Account} className="img-fluid" alt="" />
            <MDBMask className="flex-center">
              <p>
                <MDBIcon icon="forward" className="pink-text mr-3" />
              </p>
              <p className="white-text">Accurate accounting information</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="6" sm="6" className="text">
          <h3 className="affSubHeader text-center">Accounting</h3>
          <h4 className="affSubHeader2">
            With the aid of in-house computers, our accountancy service
          </h4>
          <p>
            With the aid of in-house computers, our accountancy services are able to provide timely
            and accurate accounting information for the needs of our clients. Clients may prefer to
            utilise our in-house services (Ceddi Services Limited) to having their employees perform
            the assignment because of the following advantages:-
          </p>
          <ul className="m-3 fa-ul">
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              Advice on management buy-outs and arrangements for tax efficient structures and
              financing
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              Accuracy of information
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              Better information systems and appraisal
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              Superior presentation of financial information, thereby facilitating management
              decisions
            </li>
          </ul>
        </MDBCol>
      </MDBRow>

      {/*-------------------------------- information field row----------------------------------------- */}
      <MDBRow className="pt-5">
        <MDBCol md="6" sm="6" className="text">
          <h3 className="affSubHeader">Information Technology Services</h3>
          <h4 className="affSubHeader2">
            Our affiliated company (Dafinone Consulting limited) has several
          </h4>
          <p>
            Our affiliated company (Dafinone Consulting limited) has several consultants with
            significant experience and expertise in installing and running computer systems and
            software. One important area of our specialty is the computerisation of accounting
            systems of companies. This is particularly helpful because most software packages
            require expert handling from day one to avoid unnecessary and costly mistakes. We have
            experts who install the Software on request, and have also developed a well-structured
            training scheme
          </p>
          <p>
            Other services rendered include advice on purchasing or assembling of hardware for our
            clients. This becomes necessary if the client in question does not possess a computer
            system, or where the present system does not meet with the requirements for the
            installation of the software. In most cases the system may only require a simple
            upgrade, as most current systems are fully compatible with the Sage range.
          </p>
        </MDBCol>
        <MDBCol md="6" sm="6">
          <MDBView hover zoom>
            <img src={info} className="img-fluid" alt="" />
            <MDBMask className="flex-center">
              <p>
                <MDBIcon icon="forward" className="pink-text mr-3" />
              </p>
              <p className="white-text">Reliable IT Infastructure</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>

      {/* -----------------------company Company Secretarial----------------------------------  */}

      <MDBRow className="pt-5 pb-3">
        <MDBCol md="12" sm="12">
          <h2 className="affHeader text-center">Company Secretarial</h2>
        </MDBCol>

        <MDBCol md="12" sm="12">
          <p className="text-center">
            The registrar of companies is taking a very firm stand with companies that do not comply
            with requirements regarding the filing of accounts and statutory documents. It is
            therefore becoming more important that companies' public records are kept up to date.
            Through the secretarial services division of our firm, Dodco Services Limited (a
            corporate entity under the supervision of a Partner that utilises the services of a
            number of qualified Lawyers), Horwath Dafinone operates a complete range of company
            secretarial services that are necessary in order to assist our clients in fulfilling
            both the statutory and commercially prudent requirements of corporate affairs.
          </p>
        </MDBCol>

        <MDBCol md="6" sm="6">
          <MDBView hover zoom>
            <img src={property} className="img-fluid" alt="" />
            <MDBMask className="flex-center">
              <p>
                <MDBIcon icon="forward" className="pink-text mr-3" />
              </p>
              <p className="white-text">Accurate accounting information</p>
            </MDBMask>
          </MDBView>
        </MDBCol>

        <MDBCol md="6" sm="6" className="text">
          <h4 className="affSubHeader2">With the aid of in-house computers</h4>
          <ul className="m-3 fa-ul">
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              Providing accommodation for registered offices
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              Acting as company secretaries and registrar
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              Providing nominee directors and/or shareholders
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              Managing and controlling bank accounts for clients
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              Giving advice on and assistance in formation of companies in Nigeria
            </li>
          </ul>

          <h4 className="affSubHeader2">
            The division may also liaise with the various Ministries on matters relating to
          </h4>
          <ul className="m-3 fa-ul">
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              the granting of approved status to foreign capital investment
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              the remittance of dividends and technical fees
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              the establishment of businesses in Nigeria
            </li>
            <li>
              <MDBIcon icon="star" className="pink-text mr-3" />
              the advice and provision of information relating to new measures
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AffiliateSection;
