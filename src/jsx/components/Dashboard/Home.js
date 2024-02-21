import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import profile08 from "../../../images/profile/8.jpg";
//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import ReservationStats from "./Dashboard/ReservationStats";
import LatestReview from "./Dashboard/LatestReview";
import RecentBooking from "./Dashboard/RecentBooking";
import PostPage from "./Task";

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
                <div className="cover-photo rounded"></div>
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
                    <h1>מי אנחנו</h1>
                  </div>
                </Col>
                <Col xl={3}>{/* <div className="grid-col mb-4"></div> */}</Col>
              </Row>

              <Row>
                <Col xl={2}></Col>
                <Col xl={8}>
                  <p className="">
                    תא אלפ"ה פועל בבאר שבע מאז שנת 2007, במטרה לתת מענה לשורדי
                    שואה וקשישים בודדים בעיר. הסטודנטים שלנו מגיעים אל בתי הדור
                    הותיק, מארחים חברה, מפיגים בדידות ומכניסים אור לבית ולחיים
                    🙂 מעבר לכך הסטודנטים פועלים בתור קבוצה מגובשת שדואגת לשמח
                    את הקשישים ושורדי השואה בחגים, ולציין איתם ימים מיוחדים
                    למדינת ישראל🥀 זו הזדמנות ייחודית לחיבור בין דורי משמעותי
                    ומספק עבור שני הצדדים, מניסיון 😉 הצטרפו אלינו 🤩
                  </p>
                </Col>
                <Col xl={2}></Col>
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
                <Col xl={3}>{/* <div className="grid-col mb-4"></div> */}</Col>
                <Col xl={6}>
                  <div className=" mb-4">
                    {" "}
                    <h1>הפעילויות שלנו </h1>
                  </div>
                </Col>
                <Col xl={3}>{/* <div className="grid-col mb-4"></div> */}</Col>
              </Row>
              <Row>
                <Col xl={2}>{/* <div className="grid-col mb-4"></div> */}</Col>
                <Col xl={8}>
                  <div className="card">
                    <div className="card-body">
                      <div className="post-details">
                        <h2 className="mb-2 text-black">אמץ סבא </h2>
                        <img
                          src={profile08}
                          alt=""
                          className="img-fluid mb-3 w-100 rounded"
                        />
                        <p>
                          במסגרת הפרויקט כל סטודנט מצוות לאדם מבוגר באיזור
                          מגוריו, ויוצר איתו חיבור קבוע למהלך שנת הלימודים. הוא
                          מבקר אותו אחת לשבוע, ויחד שותים קפה, משוחחים, משחקים,
                          ומעניקים שעה של כיף והפגת בדידות 😊
                        </p>
                        <p>
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
                        <h2 className="mb-2 text-black">ביקור חולים</h2>
                        <img
                          src={profile08}
                          alt=""
                          className="img-fluid mb-3 w-100 rounded"
                        />
                        <p>
                          הפרויקט מתקיים במחלקות השונות בבית החולים סורוקה,
                          ומיועדת לסטודנטים למקצועות הבריאות. הסטודנטים מגיעים
                          למחלקות ומארחים חברה לזקנים המאושפזים ונמצאים לא אחת
                          לבד במשך ימים ארוכים. בנוסף הסטודנטים עוברים הכשרה
                          מיוחדת לליווי של שורדי שואה, בשיתוף פעולה עם הצוות
                          הרפואי בבית החולים.
                        </p>
                        <p>
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
                <Col xl={3}>{/* <div className="grid-col mb-4"></div> */}</Col>
                <Col xl={6}>
                  <div className="mb-4">
                    {" "}
                    <h1>אירועים </h1>
                  </div>
                </Col>
                <Col xl={3}>{/* <div className="grid-col mb-4"></div> */}</Col>
              </Row>

              <Row>
                <Col xl={2}></Col>
                <Col xl={8}>
                  <p className="">
                    אירועים אירועים במהלך השנה מתקיימים מספר אירועי שיא, הפתוחים
                    לקהל רחב של סטודנטים, במטרה להגיע לתפוצה גדולה של זקנים בכל
                    רחבי העיר. בחנוכה אנחנו מגיעים על סופגניות וחנוכיות להדליק
                    נרות בבתים של אזרחים ותיקים, וביום השואה אנחנו יוצאים אל
                    שורדי השואה עם פרחים ומאפה, ועומדים לצידם בצפירה.
                  </p>
                </Col>
                <Col xl={2}></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <PostPage />
      </Row>
    </>
  );
};
export default Home;
