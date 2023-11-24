import React from "react";
import "./FirstContact.css";
import { useEffect, useState, useContext } from "react";
import { UserContents } from "../../App";
import { useNavigate } from "react-router-dom";

function FirstContact() {
  const { contents, setContents } = useContext(UserContents);
  const navigate = useNavigate();

  const firstLetterFirstName =
    contents[0]?.contactData?.firstName?.charAt(0) || "";
  const firstLetterLastName =
    contents[0]?.contactData?.lastName?.charAt(0) || "";

  return (
    <>
      <p
        className="first-contact-logo"
        onClick={() => navigate("/profile")}
      >{`${firstLetterFirstName} ${firstLetterLastName}`}</p>
    </>
  );
}

export default FirstContact;
