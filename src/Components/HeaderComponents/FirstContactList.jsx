import React from "react";
import "./FirstContactList.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FirstContactList(props) {
  const { contactIdOne, setContactIdOne } = props;
  const navigate = useNavigate();

  const fetchContactIdone = () => {
    fetch("https://boolean-api-server.fly.dev/loza01/contact/1")
      .then((response) => response.json())
      .then((data) => setContactIdOne(data));
  };

  useEffect(() => {
    fetchContactIdone();
  }, []);

  const firstLetterFirstName = contactIdOne.firstName
    ? contactIdOne.firstName.charAt(0)
    : "";
  const firstLetterLastName = contactIdOne.lastName
    ? contactIdOne.lastName.charAt(0)
    : "";

  return (
    <>
      <p
        className="first-contact-logo"
        onClick={() => navigate("/profile")}
      >{`${firstLetterFirstName} ${firstLetterLastName}`}</p>
    </>
  );
}

export default FirstContactList;