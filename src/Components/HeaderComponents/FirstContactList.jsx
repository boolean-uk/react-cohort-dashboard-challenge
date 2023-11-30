import React, { useEffect } from "react";  // Importing useEffect from React
import "./FirstContactList.css";
import { useState } from "react";  // Importing useState from React
import { useNavigate } from "react-router-dom";

function FirstContactList(props) {
  // Destructuring props to extract contactIdOne and setContactIdOne
  const { contactIdOne, setContactIdOne } = props;
  // Using the useNavigate hook to get the navigation function
  const navigate = useNavigate();
  
  // Function to fetch contact details based on contactIdOne
  const fetchContactIdone = () => {
    // Making a fetch request to a specific API endpoint
    fetch("https://boolean-api-server.fly.dev/loza01/contact/1")
      .then((response) => response.json())  // Parsing the response as JSON
      .then((data) => setContactIdOne(data));  // Setting the contact details using setContactIdOne
  };

  // useEffect hook to fetch contact details when the component mounts
  useEffect(() => {
    fetchContactIdone();
  }, []);

  // Extracting the first letters of the first and last names of the contact
  const firstLetterFirstName = contactIdOne.firstName
    ? contactIdOne.firstName.charAt(0)
    : "";
  const firstLetterLastName = contactIdOne.lastName
    ? contactIdOne.lastName.charAt(0)
    : "";

  // Rendering a paragraph element with a click event to navigate to the "/Profile" route
  return (
    <>
      <p
        className="first-contact-logo"
        onClick={() => navigate("/Profile")}
      >{`${firstLetterFirstName} ${firstLetterLastName}`}</p>
    </>
  );
}

export default FirstContactList;
