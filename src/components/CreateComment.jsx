import { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateComment(props) {
  const { setDataFetched } = props;
  const [formData, setFormData] = useState({ });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
                className="comment-input"
                placeholder="Add a comment..."
              />
            </label>
            <button type="submit" className="comment-button">Comment</button>
          </form>
      );
}