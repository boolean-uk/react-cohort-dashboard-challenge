import { useState } from "react";
const PostSomething = ({ posts, loggedInUser, getData }) => {
  const [inputMind, setInputMind] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "newTitle",
        content: inputMind,
        contactId: 1,
      }),
    };
    fetch(`https://boolean-api-server.fly.dev/hamza789987/post`, options);
    getData();
    console.log(inputMind);
    setInputMind("");
  };

  return (
    <div className='postContainer'>
      <div className='initials'>
        <p>
          {loggedInUser.firstName && loggedInUser.lastName && (
            <p>
              {loggedInUser.firstName[0]}
              {loggedInUser.lastName[0]}
            </p>
          )}
        </p>
      </div>
      <input
        value={inputMind}
        onChange={(e) => setInputMind(e.target.value)}
        placeholder="what's on your mind"
        className='yourMind'
        type='text'></input>
      <div className='submitPost' onClick={handleSubmit}>
        Post
      </div>
    </div>
  );
};

export default PostSomething;
