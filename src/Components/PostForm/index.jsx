import { useState } from "react";

const INPUT_DATA = {
  title: "",
  content: "",
};

export default function PostForm({ getPosts }) {
  const [form, setForm] = useState(INPUT_DATA);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value, contactId: 1 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    };

    fetch(`https://boolean-api-server.fly.dev/ilham-saleh/post`, options)
      .then((res) => res.json())
      .then((data) => getPosts(data));

    setForm(INPUT_DATA);
  };

  return (
    <div className="post-form-container">
      <div className="user-img-container">IS</div>

      <form className="post-form" onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={form.title}
            onChange={(event) => handleChange(event)}
          />

          <input
            type="text"
            placeholder="What's in your mind?"
            name="content"
            value={form.content}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
