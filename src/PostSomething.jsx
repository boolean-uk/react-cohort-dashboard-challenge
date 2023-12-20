import { useState } from "react";
const PostSomething = ({ loggedInUser, getData }) => {
  const [inputMind, setInputMind] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const words = inputMind.split(" "); // splits into array of words

    // // Get the first word
    // const title = words[0]; // first word

    // Split at the first full stop
    const title = inputMind.split(/\.(?=\s)/);

    // The result will be an array with two elements, separating the first and second sentences
    console.log(title[0], title[1]);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title[0],
        content: title[1],
        contactId: loggedInUser.id,
      }),
    };
    fetch(`https://boolean-api-server.fly.dev/hamza789987/post`, options).then(
      () => {
        // getData and setInputMind after successful post
        getData();
        setInputMind(""); // Clear the input after successful submission
      }
    );
  };

  return (
    <div className='postContainer'>
      <div className='initials'>
        <div>
          {loggedInUser.firstName && loggedInUser.lastName && (
            <p>
              {loggedInUser.firstName[0]}
              {loggedInUser.lastName[0]}
            </p>
          )}
        </div>
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
