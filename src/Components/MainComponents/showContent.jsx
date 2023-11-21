import React, { useState, useEffect, useContext } from "react";
import AddCommentInput from "./AddCommentInput";
import FirstContact from "../HeaderComponents/FirstContact";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./showContent.css";
import { UserContents } from "../../App";

function ShowContent(props) {
  const [allContact, setAllContact] = useState([]);
  const { comments, setComments } = props;
  const { contents, setContents, rerenderPost, setRerenderPost } =
    useContext(UserContents);

  const navigate = useNavigate();

  const fetchData = () => {
    const postApi = "https://boolean-api-server.fly.dev/tayokanch/post";
    const contactApi = "https://boolean-api-server.fly.dev/tayokanch/contact";

    axios
      .all([axios.get(postApi), axios.get(contactApi)])
      .then(
        axios.spread((postResponse, contactResponse) => {
          const postContents = postResponse.data;
          const allContact = contactResponse.data;

          //console.log("Post Contents:", postContents);
          console.log("All Contact:", allContact);

          const combinedData = postContents.map((post) => {
            const contact = allContact.find(
              (contact) => contact.id === post.contactId
            );

            return {
              postContent: post,
              contactData: contact || null,
              comments: null, // Initialize comments array for each post
            };
          });

          setContents(combinedData);
        })
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchComments = (postId, contentIndex) => {
    fetch(`https://boolean-api-server.fly.dev/tayokanch/post/${postId}/comment`)
      .then((response) => response.json())
      .then((data) => {
        // Update the comments array for the corresponding post
        const updatedContents = [...contents];
        updatedContents[contentIndex].comments = data;
        setContents(updatedContents);
      });
  };

  useEffect(() => {
    fetchData();
  }, [rerenderPost]);

  useEffect(() => {
    // Fetch comments only for posts that haven't had their comments fetched yet
    contents.forEach((content, index) => {
      //console.log(content, "this is content");
      if (!content?.comments) {
        fetchComments(content?.postContent?.id, index);
      }
    });
  }, [contents]);

  useEffect(() => {
    console.log("These are the comments:", comments);
  }, [comments]);

  useEffect(() => {
    console.log("this is con", contents);
  }, [contents]);
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  useEffect(() => {
    getRandomColor();
  }, [contents]);

  return (
    <section>
      {contents.map((content) => (
        <section className="post-box-container" key={content?.postContent?.id}>
          <section className="post-box">
            <div className="post-header">
              <p
                className="post-initial"
                style={{ background: getRandomColor() }}
                onClick={() => navigate(`/profile/${content.postContent.id}`)}
              >
                {`${content?.contactData?.firstName.charAt(
                  0
                )} ${content?.contactData?.lastName.charAt(0)}`}
              </p>
              <div className="poster-content">
                <p>
                  {content?.contactData
                    ? `${content.contactData?.firstName} ${content.contactData.lastName}`
                    : "Contact Data Not Available"}
                </p>
                <p
                  onClick={() =>
                    navigate(`/myPost/${content.postContent.id}`, {
                      state: { result: content },
                    })
                  }
                >
                  {content?.postContent?.title}
                </p>
              </div>
            </div>
            <p>{content?.postContent?.content}</p>

            {/* Render comments for the post */}
            <div className="comments-section">
              <h3>Comments:</h3>
              {content?.comments?.map((comment, index) => (
                <div key={comment.id}>
                  <p>
                    <strong>
                      {comment.postId === content.postContent.id
                        ? `${content?.contactData?.firstName} ${content?.contactData?.lastName}`
                        : "Commenter Name Not Available"}
                    </strong>
                  </p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      ))}
    </section>
  );
}

export default ShowContent;
