import "../App.css";
import PostElement from "../components/Post";
import { PostContext } from "../App";
import { useContext, useEffect, useState } from "react";
import GetAContactByID from "../Api.js";
import {
  ProfileIcon,
  HomePageIcon,
  MainPageIcon,
} from "../components/images.jsx";

function CohortManagerMainPage() {
  const simulatedUser =
    GetAContactByID(1); /* simulating a user with id 1 for posting  */

  const { postsData, setPostsData } = useContext(PostContext);
  const [newPostData, setNewPostData] = useState("");

  //Controls whether the post button should be disabled or not.
  useEffect(() => {
    //Moved this check out of stringToPostRequestBody. Instead of checking for a bad value and sending an error, I decided that the button should not be interactable while the postData is bad/empty.
    console.log("doing this");
    console.log(newPostData);
    if (
      newPostData === "" ||
      newPostData === null ||
      newPostData === undefined ||
      !newPostData.includes("|")
    ) {
      console.log("you are not allowed to make an empty post");
      document.getElementById("submit-button").disabled = "disabled";
    } else {
      console.log("enable button");
      document.getElementById("submit-button").removeAttribute("disabled");
    }
  }, [newPostData]);

  const handleInputPostData = (event) => {
    const postTextValue = event.target.value;

    setNewPostData(postTextValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postRequestData = stringToPostRequestBody(newPostData);

    MakeAPIPostRequest(postRequestData);
  };

  //Splits the input text to the title and content and puts them in a postRequestBody object
  const stringToPostRequestBody = (newPostData) => {
    const splitTitleAndText = newPostData.split("|");
    const postRequestBody = {
      title: splitTitleAndText[0],
      content: splitTitleAndText[1],
      contactId: simulatedUser,
    };
    return postRequestBody;
  };

  const MakeAPIPostRequest = (postRequestData) => {
    const postRequestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postRequestData),
    };

    fetch(
      "https://boolean-api-server.fly.dev/MackanPalm/post",
      postRequestOption
    )
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw responce;
      })
      .then((data) => {
        setPostsData([...postsData, data]);
      })
      .catch((err) => {
        console.log(err);
        //add something for the user to see
      });

    console.log(postRequestOption);
  };

  return (
    <div className="container">
      <header className="header header-colour">
        <MainPageIcon />
      </header>
      <div className="container-nav-main">
        <nav className="sidebar sidebar-colour">
          <button className="sidebar-button">
            <HomePageIcon />
            <p className="sidebar-button-image-and-font">Home</p>
          </button>
          <button className="sidebar-button">
            <ProfileIcon />
            <p>Profile</p>
          </button>
        </nav>
        <main className="main background">
          <div className="post-bar-box">
            <div className="circle">
              <p className="text">MP</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="post-bar-text-field"
                placeholder="Write your post here. To separate post title and post text you ned to add a: | between them."
                type="text"
                name="postText"
                onChange={handleInputPostData}
              />
              <button
                id="submit-button"
                className="post-bar-button"
                disabled="disabled"
              >
                Post
              </button>
            </form>
          </div>
          {postsData.toReversed().map((postData, index) => (
            <PostElement key={index} postData={postData} />
          ))}
        </main>
      </div>
    </div>
  );
}
export default CohortManagerMainPage;
