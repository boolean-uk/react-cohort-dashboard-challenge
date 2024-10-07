import { useContext, useState } from "react";
import { FeedContext } from "../../App";

export default function CreateContent() {
  const context = useContext(FeedContext);
  const signedInUsr = context.signedInUsr;

  const initialData = {
    title: "",
    content: "",
    contactId: 1,
  };

  const [postData, setPostData] = useState(initialData);

  const postRequest = async () => {

    console.log("Sending...")
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    };

    const response = await fetch("https://boolean-uk-api-server.fly.dev/LudwigJL/post", requestOptions);
    const data = await response.json();

    context.setPosts([...context.posts, data]);
    }


  function sendPostRequest() {
    postRequest();
  }


  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName == "post-comment") {
      const content = inputValue;
      const title = content.split(" ").slice(0, 6).join(" ");
      setPostData({ ...postData, content: content, title: title });
    }
  }

  return (
    <>
      <div className="make-content-form">
        <div
          className="Image"
          style={{
            backgroundColor: signedInUsr
              ? signedInUsr.favouriteColour
              : "#ffffff",
          }}
        >
          {signedInUsr ? (
            <p>
              {signedInUsr.firstName.charAt(0)}
              {signedInUsr.lastName.charAt(0)}
            </p>
          ) : (
            <p>?</p>
          )}
        </div>

        <input
          type="text"
          name="post-comment"
          placeholder="What's on your mind?"
          onChange={handleChange}
        />

        <button onClick={sendPostRequest} className="post-button">
          Post
        </button>
      </div>
    </>
  );
}
