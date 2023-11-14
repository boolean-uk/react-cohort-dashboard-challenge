import React, { useState } from "react";

const INITIAL_POST_STATE = {
  title: "",
  content: "",
  contactId: 1,
};

export default function GeneratePostForm({ setReload, API_BASE_URL }) {
  const [formData, setFormData] = useState(INITIAL_POST_STATE);

  const createNewPost = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    if (formData.content) {
      fetch(`${API_BASE_URL}/Hayor4real/post`, options)
        .then((response) => response.json())
        .then(() => {
          const form = document.getElementById("post__form");

          setFormData(INITIAL_POST_STATE);
          setReload(true);

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
      <form id="post__form">
        <input
          className="post__input__title input__p"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleInputChange}
        />
        <input
          className="post__input__content input__p"
          type="text"
          name="content"
          placeholder="What's on your mind?"
          onChange={handleInputChange}
        />
      </form>
      <button className="post__button" onClick={createNewPost}>
        Post
      </button>
    </>
  );
}
