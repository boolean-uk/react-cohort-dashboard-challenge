import "../App.css";
import Post from "../components/Post";
import { PostContext } from "../App.jsx";
import { useContext, useEffect, useState } from "react";
import { getAContactByID, makeNewPostToAPI } from "../Api.js";
import {
  ProfileIcon,
  HomePageIcon,
  MainPageIcon,
} from "../components/images.jsx";
import getInitalsFromNames from "../GetInitialsFromNames.jsx";

const initialPostData = "";

function CohortManagerMainPage() {
  const [simulatedUserData, setSimulatedUserData] =
    useState(null); /* simulating a user with id 1 for posting  */

  const { postsData, setPostsData } = useContext(PostContext);
  const [newPostData, setNewPostData] = useState(initialPostData);

  const [canSubmit, setIsButtonEnabled] = useState(false);

  //Controls whether the post button should be disabled or not.
  useEffect(() => {
    getAContactByID(
      1,
      setSimulatedUserData
    ); /* simulating a user with id 1 for posting  */

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

      setIsButtonEnabled(false);
    } else {
      console.log("enable button");

      setIsButtonEnabled(true);
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

    setNewPostData(initialPostData); // this resets the text box
  };

  //Splits the input text to the title and content and puts them in a postRequestBody object
  const stringToPostRequestBody = (newPostData) => {
    const splitTitleAndText = newPostData.split("|");
    const postRequestBody = {
      title: splitTitleAndText[0],
      content: splitTitleAndText[1],
      contactId: 1,
    };
    return postRequestBody;
  };

  const MakeAPIPostRequest = (postRequestData) => {
    const postRequestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postRequestData),
    };

    makeNewPostToAPI(postRequestOption, setPostsData, postsData);

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
              {simulatedUserData && (
                <p className="text">
                  {getInitalsFromNames(
                    simulatedUserData.firstName,
                    simulatedUserData.lastName
                  )}
                </p>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="post-bar-text-field"
                placeholder="Write your post here. To separate post title and post text you ned to add a: | between them."
                type="text"
                name="postText"
                value={newPostData}
                onChange={handleInputPostData}
              />
              <button
                id="submit-button"
                className="post-bar-button"
                disabled={!canSubmit}
              >
                Post
              </button>
            </form>
          </div>
          {postsData.toReversed().map((postData, index) => (
            <Post key={index} postData={postData} simulatedUserID={1} />
          ))}
        </main>
      </div>
    </div>
  );
}
export default CohortManagerMainPage;
