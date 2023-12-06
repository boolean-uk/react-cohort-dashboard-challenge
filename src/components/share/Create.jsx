import React, { useState } from "react";

const INITIAL_POST_STATE = {
  title: "",
  content: "",
  // Assuming you get the user ID from some context or props
  contactId: 1, // Replace this with the actual user ID
};

const API_BASE_URL = "http://localhost:8000"; // Fixed quotes around the URL

function Create({ setReload }) {
  const [formData, setFormData] = useState(INITIAL_POST_STATE);

  const createNewPost = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    if (formData.content) {
      fetch(`${API_BASE_URL}/post`, options)
        .then((response) => response.json())
        .then(() => {
          setFormData(INITIAL_POST_STATE);
          setReload(true);
        })
        .catch((error) => {
          console.error("Error creating post:", error);
        });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      
    </>
  );
}

export default Create;
