import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import swal from "sweetalert";
import { nanoid } from "nanoid";
//Images
//import data from './../Boltz/Task/Postpage.json';
import card1 from "./../../../images/task/1.jpg";
import card2 from "./../../../images/task/2.jpeg";
import card3 from "./../../../images/task/3.jpeg";
import card4 from "./../../../images/task/4.jpeg";
import card5 from "./../../../images/task/5.jpeg";
import card6 from "./../../../images/task/6.jpeg";
import card7 from "./../../../images/task/7.jpeg";
// import card8 from "./../../../images/task/8.jpg";
import user from "./../../../images/task/user.jpg";

import card8 from "./../../../images/task/h1.jpg";
import card9 from "./../../../images/task/h2.jpeg";
import card10 from "./../../../images/task/h3.jpeg";
import card11 from "./../../../images/task/h4.jpeg";

import card12 from "./../../../images/task/f1.JPG";
import card13 from "./../../../images/task/f2.JPG";
import card14 from "./../../../images/task/f3.JPG";
import card15 from "./../../../images/task/f4.JPG";
// import card16 from "./../../../images/task/h4.jpeg";

const CardListBlog = [
  {
    id: 1,
    image: card1,
    Cust_Id: "01234",
    Date_Join: "19/02/2022",
    Cust_Name: "Munaroh Steffani",
    Location: "India",
    Activity: "יום הזיכרון לשואה",
  },
  {
    id: 8,
    image: card8,
    Cust_Id: "01241",
    Date_Join: "26/09/2022",
    Cust_Name: "Hrisovalantis ",
    Location: "Guatemala",
    Activity: "חג חנוכה",
  },
  {
    id: 16,
    image: card15,
    Cust_Id: "01241",
    Date_Join: "26/09/2022",
    Cust_Name: "Hrisovalantis ",
    Location: "Guatemala",
    Activity: "מסיבת סיום",
  },
  {
    id: 2,
    image: card2,
    Cust_Id: "01235",
    Date_Join: "20/03/2022",
    Cust_Name: "Geovanny Anderson",
    Location: "London ",
    Activity: "יום הזיכרון לשואה",
  },
  {
    id: 9,
    image: card9,
    Cust_Id: "01241",
    Date_Join: "26/09/2022",
    Cust_Name: "Hrisovalantis ",
    Location: "Guatemala",
    Activity: "חג חנוכה",
  },
  {
    id: 3,
    image: card3,
    Cust_Id: "01236",
    Date_Join: "21/04/2022",
    Cust_Name: "Louis Ali",
    Location: "Afghanistan",
    Activity: "יום הזיכרון לשואה",
  },
  {
    id: 4,
    image: card4,
    Cust_Id: "01237",
    Date_Join: "22/05/2022",
    Cust_Name: "Marquezz",
    Location: "Belgium",
    Activity: "יום הזיכרון לשואה",
  },
  {
    id: 5,
    image: card5,
    Cust_Id: "01238",
    Date_Join: "23/06/2022",
    Cust_Name: "Richard ",
    Location: "Colombia",
    Activity: "יום הזיכרון לשואה",
  },
  {
    id: 6,
    image: card6,
    Cust_Id: "01239",
    Date_Join: "24/07/2022",
    Cust_Name: "Andrew Stevano",
    Location: "Czechia",
    Activity: "יום הזיכרון לשואה",
  },
  {
    id: 7,
    image: card7,
    Cust_Id: "01240",
    Date_Join: "25/08/2022",
    Cust_Name: "Cathenna ",
    Location: "El Salvador",
    Activity: "יום הזיכרון לשואה",
  },
  {
    id: 8,
    image: card8,
    Cust_Id: "01241",
    Date_Join: "26/09/2022",
    Cust_Name: "Hrisovalantis ",
    Location: "Guatemala",
    Activity: "חג חנוכה",
  },
  {
    id: 10,
    image: card10,
    Cust_Id: "01241",
    Date_Join: "26/09/2022",
    Cust_Name: "Hrisovalantis ",
    Location: "Guatemala",
    Activity: "חג חנוכה",
  },
  {
    id: 11,
    image: card11,
    Cust_Id: "01241",
    Date_Join: "26/09/2022",
    Cust_Name: "Hrisovalantis ",
    Location: "Guatemala",
    Activity: "חג חנוכה",
  },
  {
    id: 12,
    image: card12,
    Cust_Id: "01241",
    Date_Join: "26/09/2022",
    Cust_Name: "Hrisovalantis ",
    Location: "Guatemala",
    Activity: "מסיבת סיום",
  },
  {
    id: 14,
    image: card14,
    Cust_Id: "01241",
    Date_Join: "26/09/2022",
    Cust_Name: "Hrisovalantis ",
    Location: "Guatemala",
    Activity: "מסיבת סיום",
  },
  {
    id: 15,
    image: card13,
    Cust_Id: "01241",
    Date_Join: "26/09/2022",
    Cust_Name: "Hrisovalantis ",
    Location: "Guatemala",
    Activity: "מסיבת סיום",
  },
];

const PostPage = () => {
  const [postModal, setPostModal] = useState(false);
  const [contacts, setContacts] = useState(CardListBlog);
  // delete data
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  //Add data
  const [addFormData, setAddFormData] = useState({
    Cust_Id: "",
    Date_Join: "",
    Cust_Name: "",
    Location: "",
    image: "",
  });

  //Add Submit data
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    var error = false;
    var errorMsg = "";
    if (addFormData.Date_Join === "") {
      error = true;
      errorMsg = "Please fill date";
    } else if (addFormData.Cust_Name === "") {
      error = true;
      errorMsg = "Please fill name.";
    } else if (addFormData.Location === "") {
      error = true;
      errorMsg = "Please fill location";
    }
    if (!error) {
      const newContact = {
        id: nanoid(),
        Cust_Id: addFormData.Cust_Id,
        Date_Join: addFormData.Date_Join,
        Cust_Name: addFormData.Cust_Name,
        Location: addFormData.Location,
        image: addFormData.image,
      };
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
      setPostModal(false);
      swal("Good job!", "Successfully Added", "success");
      addFormData.Cust_Name = addFormData.Location = addFormData.Date_Join = "";
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  const [editModal, setEditModal] = useState(false);

  // Edit function editable page loop
  const [editContactId, setEditContactId] = useState(null);

  // Edit function button click to edit
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      Cust_Id: contact.Cust_Id,
      Date_Join: contact.Date_Join,
      Cust_Name: contact.Cust_Name,
      Location: contact.Location,
      image: contact.image,
    };
    setEditModal(true);
  };

  return (
    <>
      <div className="row">
        {contacts.map((contact, index) => (
          <div
            className="col-xl-3 col-xxl-4 col-lg-6 col-md-6 col-sm-6"
            key={index}
          >
            <div className="card project-boxed">
              <div className="img-bx">
                <img
                  src={contact.image}
                  alt=""
                  className=" me-3 card-list-img w-100"
                  width="130"
                />
              </div>
              <div className="card-header align-items-end">
                <div>
                  <p className="fs-14 mb-2 text-primary">#{contact.Cust_Id}</p>
                  <h6 className="fs-18 font-w500 mb-3">
                    <Link to={"#"} className="text-black user-name">
                      אירוע: {contact.Activity}
                    </Link>
                  </h6>
                  <div className="text-dark fs-14 text-nowrap">
                    May 7th, 2022
                    <i
                      className="far fa-calendar-alt ms-2"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
              <div className="card-body p-0 pb-3">
                <ul className="list-group list-group-flush">
                  {/* <li className="list-group-item">
                    <span className="mb-0 title">Deadline Date</span> :
                    <span className="text-black ms-2">{contact.Date_Join}</span>
                  </li>
                  <li className="list-group-item">
                    <span className="mb-0 title">Client Name</span> :
                    <span className="text-black ms-2">{contact.Cust_Name}</span>
                  </li> */}
                  <li className="list-group-item">
                    <span className="text-black desc-text ms-2">
                      <span className="mb-0 title">מיקום</span> : באר שבע
                      -סורוקה
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostPage;
