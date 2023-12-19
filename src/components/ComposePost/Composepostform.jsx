/* eslint-disable react/prop-types */
import  { useState } from "react";

const INITIAL_ENTRY_STATE = {
  title: "",
  content: "",
  contactId: 1,
};

export default function Composepostform({ setRefresh, API_BASE_URL }) {
  const [formData, setFormData] = useState(INITIAL_ENTRY_STATE);

  const submitNewEntry = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    if (formData.content) {
      fetch(`${API_BASE_URL}/Elizabethcodes44/post`, options)
        .then((response) => response.json())
        .then(() => {
          const form = document.getElementById("entryform");

          setFormData(INITIAL_ENTRY_STATE);
          setRefresh(true);

          form.reset();
        });
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <form id="entryform">
        <input
          className="titlepost inputp"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleInputChange}
        />
        <input
          className="postcontent inputp"
          type="text"
          name="content"
          placeholder="What's on your mind?"
          onChange={handleInputChange}
        />
      </form>
      <button className="postbutton" onClick={submitNewEntry}>
        Post
      </button>
    </>
  );
}