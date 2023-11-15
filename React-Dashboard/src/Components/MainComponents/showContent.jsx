import React, { useState, useEffect } from "react";
import AddCommentInput from "./AddCommentInput";
import FirstContact from "../HeaderComponents/FirstContact";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./showContent.css";

function ShowContent(props) {
  const { contents, setContents, rerenderPost, setRerenderPost } = props;
  const [allContact, setAllContact] = useState([]);
  const { contactIdOne, setContactIdOne } = props;
  const { comment, setComment } = props;
  const { anotherComment, setAnotherComment } = props;
  const [newComment, setNewcomment] = useState({
    postId: "",
    comments: [],
    contactId: "",
  });

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

          const combinedData = postContents.map((post) => {
            const contact = allContact.find((c) => c.id === post.contactId);

            return {
              postContent: post,
              contactData: contact || null,
            };
          });

          setContents(combinedData);
        })
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const getRandomColor = () => {
    // Function to generate a random hex color
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  useEffect(() => {
    if (rerenderPost) {
      fetchData();
      //console.log("this is content after post", content);
      setRerenderPost(false);
    }
  }, [rerenderPost]);

  return (
    <section>
      {contents.map((content) => (
        <div className="post-box-container" key={content.postContent.id}>
          <section className="post-box">
            <div className="post-header">
              <p
                className="post-initial"
                style={{ background: getRandomColor() }}
                onClick={() => navigate(`/profile/${content.postContent.id}`)}
              >
                {content.postContent.title}
              </p>
              <div className="poster-content">
                <p>
                  {content.contactData
                    ? `${content.contactData.firstName} ${content.contactData.lastName}`
                    : "Contact Data Not Available"}
                </p>
                <p
                  onClick={() =>
                    navigate(`/myPost/${content.postContent.id}`, {
                      state: { result: content.postContent },
                    })
                  }
                >
                  {content.postContent.title}
                </p>
              </div>
            </div>
            <p>{content.postContent.content}</p>
          </section>
        </div>
      ))}
    </section>
  );
}

export default ShowContent;

/* 


  const handleChange = (e, index, postId, contactId) => {
    const updateNewComment = { ...newComment };
    if (!updateNewComment.comments[index]) {
      updateNewComment.comments[index] = {};
    }
    updateNewComment.comments[index] = { comment: e.target.value };
    updateNewComment.postId = postId;
    updateNewComment.contactId = contactId;

    setNewcomment(updateNewComment);
  };




*/
