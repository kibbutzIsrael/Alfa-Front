import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import profile08 from "../../../images/profile/8.jpg";
import profile12 from "../../../images/profile/12.jpg";
import profile13 from "../../../images/profile/13.jpg";
import profile14 from "../../../images/profile/14.jpg";
//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import ReservationStats from "./Dashboard/ReservationStats";
import LatestReview from "./Dashboard/LatestReview";
import RecentBooking from "./Dashboard/RecentBooking";
import PostPage from "./Task";
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

const Home = () => {
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="photo-content ">
                <div className="cover-photo rounded">
                  {" "}
                  {/* <div className="overlay-button">
                    <Button
                      as="a"
                      href="/form-wizard"
                      to="/form-wizard"
                      className="me-2"
                      variant="info"
                    >
                      הצטרפו למערך המתנדבים שלנו
                      <span className="btn-icon-end">
                        <i className="fa fa-heart" />
                      </span>
                    </Button>
                  </div>
                  <div className="overlay-button-small">
                    <Button className="me-2" variant="info">
                      הצטרפו אלינו
                      <span className="btn-icon-end">
                        <i className="fa fa-heart" />
                      </span>
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={3}>{/* <div className="grid-col mb-4"></div> */}</Col>
                <Col xl={6}>
                  <div className="mb-4">
                    <h1 className="home-header">
                      {/* מי אנחנו{" "} */}
                      <span className="underlined underline-clip">
                        מי אנחנו
                      </span>
                    </h1>
                  </div>
                </Col>
                <Col xl={3}>{/* <div className="grid-col mb-4"></div> */}</Col>
              </Row>

              <Row>
                <Col xl={3}></Col>
                <Col xl={6}>
                  <div className="home-header-p">
                    <p className="">
                      תא אלפ"ה פועל בבאר שבע מאז שנת 2007, במטרה לתת מענה לשורדי
                      שואה וקשישים בודדים בעיר. הסטודנטים שלנו מגיעים אל בתי
                      הדור הותיק, מארחים חברה, מפיגים בדידות ומכניסים אור לבית
                      ולחיים 🙂 מעבר לכך הסטודנטים פועלים בתור קבוצה מגובשת
                      שדואגת לשמח את הקשישים ושורדי השואה בחגים, ולציין איתם
                      ימים מיוחדים למדינת ישראל🥀 זו הזדמנות ייחודית לחיבור בין
                      דורי משמעותי ומספק עבור שני הצדדים, מניסיון 😉 הצטרפו
                      אלינו 🤩
                    </p>
                  </div>
                </Col>
                <Col xl={3}></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="row">
        <div className="col-xl-4 col-xxl-6 col-lg-6">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="card-title">תהליך חברות</h4>
            </div>
            <div className="card-body">
              <PerfectScrollbar
                style={{ height: "370px" }}
                id="DZ_W_TimeLine"
                className="widget-timeline dlab-scroll height370 ps ps--active-y"
              >
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge primary"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>שלב ראשון</span>
                      <h6 className="mb-0">
                        ממלאים טופס{" "}
                        <strong className="text-primary">בקשת התנדבות</strong>
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge info"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>שלב שני </span>
                      <h6 className="mb-0">
                        עוברים ראיון טלפוני
                        <strong className="text-info"> עם אחד מהנציגים </strong>
                      </h6>
                      <p className="mb-0">
                        היכרות הדדית על מנת להתאים את הציפיות
                      </p>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge danger"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>30 minutes ago</span>
                      <h6 className="mb-0">
                        john just buy your product{" "}
                        <strong className="text-warning">Sell $250</strong>
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge success"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>15 minutes ago</span>
                      <h6 className="mb-0">
                        StumbleUpon is acquired by eBay.{" "}
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge warning"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">
                        Mashable, a news website and blog, goes live.
                      </h6>
                    </Link>
                  </li>
                  <li>
                    <div className="timeline-badge dark"></div>
                    <Link
                      className="timeline-panel text-muted"
                      to="/widget-basic"
                    >
                      <span>20 minutes ago</span>
                      <h6 className="mb-0">
                        Mashable, a news website and blog, goes live.
                      </h6>
                    </Link>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={1}>{/* <div className="grid-col mb-4"></div> */}</Col>
                <Col xl={10}>
                  <div className="mb-4">
                    <h1 className="Activity-header mb-4 ">
                      <span className="underlined underline-overflow">
                        הפעילויות שלנו{" "}
                      </span>
                    </h1>
                  </div>
                </Col>
                <Col xl={1}>{/* <div className="grid-col mb-4"></div> */}</Col>
              </Row>
              <Row>
                <Col xl={2}>{/* <div className="grid-col mb-4"></div> */}</Col>
                <Col xl={8}>
                  <div className="card">
                    <div className="card-body">
                      <div className="post-details ">
                        <h2 className="mb-2  Activity">אמץ סבא </h2>
                        <img
                          src={profile13}
                          alt=""
                          className="img-fluid mb-3 w-100 rounded"
                        />
                        <p className="Activity-header-p">
                          במסגרת הפרויקט כל סטודנט מצוות לאדם מבוגר באיזור
                          מגוריו, ויוצר איתו חיבור קבוע למהלך שנת הלימודים. הוא
                          מבקר אותו אחת לשבוע, ויחד שותים קפה, משוחחים, משחקים,
                          ומעניקים שעה של כיף והפגת בדידות 😊
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={2}>{/* <div className="grid-col mb-4"></div> */}</Col>
              </Row>
              <Row>
                <Col xl={2}>{/* <div className="grid-col mb-4"></div> */}</Col>
                <Col xl={8}>
                  <div className="card">
                    <div className="card-body">
                      <div className="post-details">
                        <h2 className="mb-2 Activity">ביקור חולים</h2>
                        <img
                          src={profile14}
                          alt=""
                          className="img-fluid mb-3 w-100 rounded"
                        />
                        <p className="Activity-header-p">
                          הפרויקט מתקיים במחלקות השונות בבית החולים סורוקה,
                          ומיועדת לסטודנטים למקצועות הבריאות. הסטודנטים מגיעים
                          למחלקות ומארחים חברה לזקנים המאושפזים ונמצאים לא אחת
                          לבד במשך ימים ארוכים. בנוסף הסטודנטים עוברים הכשרה
                          מיוחדת לליווי של שורדי שואה, בשיתוף פעולה עם הצוות
                          הרפואי בבית החולים.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={2}>{/* <div className="grid-col mb-4"></div> */}</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={1}>{/* <div className="grid-col mb-4"></div> */}</Col>
                <Col xl={10}>
                  <div className="mb-4">
                    <h1 className="Activity-header ">
                      <span className="underlined underline-mask">אירועים</span>
                    </h1>
                  </div>
                </Col>
                <Col xl={1}>{/* <div className="grid-col mb-4"></div> */}</Col>
              </Row>

              <Row>
                <Col xl={1}>{/* <div className="grid-col mb-4"></div> */}</Col>
                <Col xl={10}>
                  <p className="Activity-header-p p-4">
                    אירועים אירועים במהלך השנה מתקיימים מספר אירועי שיא, הפתוחים
                    לקהל רחב של סטודנטים, במטרה להגיע לתפוצה גדולה של זקנים בכל
                    רחבי העיר. בחנוכה אנחנו מגיעים על סופגניות וחנוכיות להדליק
                    נרות בבתים של אזרחים ותיקים, וביום השואה אנחנו יוצאים אל
                    שורדי השואה עם פרחים ומאפה, ועומדים לצידם בצפירה.
                  </p>
                </Col>
                <Col xl={1}></Col>
              </Row>
              <PostPage />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Home;
