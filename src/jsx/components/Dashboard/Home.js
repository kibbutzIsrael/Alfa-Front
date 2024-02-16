import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion } from "react-bootstrap";

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import ReservationStats from "./Dashboard/ReservationStats";
import LatestReview from "./Dashboard/LatestReview";
import RecentBooking from "./Dashboard/RecentBooking";

const Home = () => {
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);

  const defaultAccordion = [
    {
      title: "Accordion Header One",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
      bg: "primary",
    },
    {
      title: "Accordion Header Two",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

      bg: "info",
    },
    {
      title: "Accordion Header Three",
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",

      bg: "success",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="photo-content ">
                <div className="cover-photo rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-12">
        <div className="card">
          <div className="card-header border-0 pb-0">
            <h4 className="fs-20">חוות דעת של המתנדבים שלנו</h4>
          </div>
          <div className="card-body pt-0">
            <LatestReview />
          </div>
        </div>
      </div>

      <Col xl="6">
        <Card>
          <Card.Header className="d-block">
            <Card.Title>Accordion Gradient</Card.Title>
            <Card.Text className="m-0 subtitle">
              Add <code>accordion-gradient</code> class with{" "}
              <code>accordion</code>
            </Card.Text>
          </Card.Header>
          <Card.Body>
            <Accordion
              className="accordion accordion-rounded-stylish accordion-gradient"
              defaultActiveKey="0"
            >
              {defaultAccordion.map((d, i) => (
                <Accordion.Item key={i} eventKey={`${i}`}>
                  <Accordion.Header className="accordion-header accordion-header--primary">
                    <span className="accordion-header-icon"></span>
                    <span className="accordion-header-text">{d.title}</span>
                    <span className="accordion-header-indicator"></span>
                  </Accordion.Header>
                  <Accordion.Collapse
                    eventKey={`${i}`}
                    className="accordion__body"
                  >
                    <div className="accordion-body">{d.text}</div>
                  </Accordion.Collapse>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Body>
        </Card>
      </Col>

      {/* <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="20"
                            viewBox="0 0 28 20"
                          >
                            <path
                              d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z"
                              transform="translate(-2 -6)"
                              fill="var(--primary)"
                            />
                          </svg>
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">8,461</h2>
                          <p className="mb-0 text-nowrap">New Booking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="20"
                            viewBox="0 0 28 20"
                          >
                            <path
                              d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z"
                              transform="translate(-2 -6)"
                              fill="var(--primary)"
                            />
                          </svg>
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">8,461</h2>
                          <p className="mb-0 text-nowrap ">New Booking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                          >
                            <path
                              data-name="Path 1957"
                              d="M129.035,178.842v2.8a5.6,5.6,0,0,0,5.6,5.6h14a5.6,5.6,0,0,0,5.6-5.6v-16.8a5.6,5.6,0,0,0-5.6-5.6h-14a5.6,5.6,0,0,0-5.6,5.6v2.8a1.4,1.4,0,0,0,2.8,0v-2.8a2.8,2.8,0,0,1,2.8-2.8h14a2.8,2.8,0,0,1,2.8,2.8v16.8a2.8,2.8,0,0,1-2.8,2.8h-14a2.8,2.8,0,0,1-2.8-2.8v-2.8a1.4,1.4,0,0,0-2.8,0Zm10.62-7-1.81-1.809a1.4,1.4,0,1,1,1.98-1.981l4.2,4.2a1.4,1.4,0,0,1,0,1.981l-4.2,4.2a1.4,1.4,0,1,1-1.98-1.981l1.81-1.81h-12.02a1.4,1.4,0,1,1,0-2.8Z"
                              transform="translate(-126.235 -159.242)"
                              fill="var(--primary)"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">753</h2>
                          <p className="mb-0">Check In</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <svg
                            id="_009-log-out"
                            data-name="009-log-out"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                          >
                            <path
                              data-name="Path 1957"
                              d="M151.435,178.842v2.8a5.6,5.6,0,0,1-5.6,5.6h-14a5.6,5.6,0,0,1-5.6-5.6v-16.8a5.6,5.6,0,0,1,5.6-5.6h14a5.6,5.6,0,0,1,5.6,5.6v2.8a1.4,1.4,0,0,1-2.8,0v-2.8a2.8,2.8,0,0,0-2.8-2.8h-14a2.8,2.8,0,0,0-2.8,2.8v16.8a2.8,2.8,0,0,0,2.8,2.8h14a2.8,2.8,0,0,0,2.8-2.8v-2.8a1.4,1.4,0,0,1,2.8,0Zm-10.62-7,1.81-1.809a1.4,1.4,0,1,0-1.98-1.981l-4.2,4.2a1.4,1.4,0,0,0,0,1.981l4.2,4.2a1.4,1.4,0,1,0,1.98-1.981l-1.81-1.81h12.02a1.4,1.4,0,1,0,0-2.8Z"
                              transform="translate(-126.235 -159.242)"
                              fill="var(--primary)"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">516</h2>
                          <p className="mb-0">Check Out</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-header border-0 pb-0">
                      <h4 className="fs-20">Recent Booking Schedule</h4>
                    </div>
                    <RecentBooking />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-12">
                      <ReservationStats />
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div className="card bg-secondary">
                        <div className="card-body">
                          <div className="d-flex align-items-end pb-4 justify-content-between">
                            <span className="fs-14 font-w500 text-white">
                              Available Room Today
                            </span>
                            <span className="fs-20 font-w600 text-white">
                              <span className="pe-2"></span>683
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "60%", height: "13px" }}
                            >
                              <span className="sr-only">60% Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div className="card bg-secondary">
                        <div className="card-body">
                          <div className="d-flex align-items-end pb-4 justify-content-between">
                            <span className="fs-14 font-w500 text-white">
                              Sold Out Room Today
                            </span>
                            <span className="fs-20 font-w600 text-white">
                              <span className="pe-2"></span>156
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "30%", height: "13px" }}
                            >
                              <span className="sr-only">30% Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6">
                              <div className="text-center">
                                <h3 className="fs-28 font-w600">569</h3>
                                <span className="fs-16">Total Concierge</span>
                              </div>
                            </div>
                            <div className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6">
                              <div className="text-center">
                                <h3 className="fs-28 font-w600">2,342</h3>
                                <span className="fs-16">Total Customer</span>
                              </div>
                            </div>
                            <div className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6">
                              <div className="text-center">
                                <h3 className="fs-28 font-w600">992</h3>
                                <span className="fs-16">Total Room</span>
                              </div>
                            </div>
                            <div className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6">
                              <div className="text-center">
                                <h3 className="fs-28 font-w600">76k</h3>
                                <span className="fs-16 wspace-no">
                                  Total Transaction
                                </span>
                              </div>
                            </div>
                            <div className="mb-5 mt-4 d-flex align-items-center">
                              <div>
                                <h4>
                                  <Link to={"#"} className="text-secondary">
                                    Let Travl Generate Your Annualy Report
                                    Easily
                                  </Link>
                                </h4>
                                <span className="fs-12">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labo
                                </span>
                              </div>
                              <div>
                                <Link to={"#"} className="ms-5">
                                  <i className="fas fa-arrow-right fs-20"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="fs-20">Latest Review by Customers</h4>
                </div>
                <div className="card-body pt-0">
                  <LatestReview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Home;
