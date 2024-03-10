import { useState } from "react";
import { useNavigate } from "react-router";

export default function CreatePost(props) {
  const { setDataFetched } = props;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    contactId: 1,
    title: "Some Title ...",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Just before trying to fetch post request");
    fetch(`https://boolean-api-server.fly.dev/nicolaiklokmose/post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        console.log("Post created successfully");
        setDataFetched(false);
        // Clear the form after submission
        setFormData({
          contactId: 1,
          title: "Some Title ...",
          content: "",
        });
      }
      //   navigate("/contacts-list");
    });
  };

  const circleStyle = {
    backgroundColor: "pink",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    fontWeight: "bold",
  };

  return (
    <div className="create-post">
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          <div className="circle" style={circleStyle}>
            NK
          </div>
          <input
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="post-input"
            placeholder="What's on your mind?"
          />
        </label>
        <button type="submit" className="post-button">
          Post
        </button>
      </form>
    </div>
  );
}
