import React, { useState, useEffect } from "react";
import AddCommentInput from "./AddCommentInput";
import FirstContact from "../HeaderComponents/FirstContact";
import { useNavigate } from "react-router-dom";
import "./showComment.css";

function showComment(props) {
  const { comment, setComment } = props;
  const { content, setContent } = props;
  const { anotherComment, setAnotherComment } = props;
  const [allContact, setAllContact] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const { contactIdOne, setContactIdOne } = props;
  const { rerenderpost, setRerenderPost } = props;

  const INITIAL_COMMENTS = {
    postId: "",
    comments: [],
    contactId: "",
  };

  const [newComment, setNewcomment] = useState(INITIAL_COMMENTS);

  const navigate = useNavigate();

  const fetchPost = () => {
    fetch("https://boolean-api-server.fly.dev/tayokanch/post")
      .then((response) => response.json())
      .then((data) => {
        //console.log("this is the post", data);
        setContent(data);
      });
  };

  const fetchAllContact = () => {
    fetch("https://boolean-api-server.fly.dev/tayokanch/contact")
      .then((response) => response.json())
      .then((data) => {
        setAllContact(data);
      });
  };

  useEffect(() => {
    fetchPost();
    fetchAllContact();
  }, []);

  useEffect(() => {
    console.log(content);
  }, [allContact, content]);

  useEffect(() => {
    if (allContact.length > 0 && content.length > 0) {
      const combined = allContact
        .map((contact, index) => {
          if (
            content[index] &&
            content[index].title &&
            content[index].content
          ) {
            return {
              initial: contact.firstName.charAt(0) + contact.lastName.charAt(0),
              firstName: contact.firstName,
              lastName: contact.lastName,
              title: content[index].title,
              content: content[index].content,
              contactId: content[index].contactId,
              postId: content[index].id,
              color: getRandomColor(),
            };
          }
        })
        .filter(Boolean);
      setCombinedData(combined);
    }
  }, [allContact, content]);

  useEffect(() => {
    //console.log("This is combinedData", combinedData);
  }, [combinedData]);

  const getRandomColor = () => {
    // Function to generate a random hex color
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

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

  useEffect(() => {
    if (rerenderpost) {
      fetchPost();
      console.log("this is content after post", content);
      setRerenderPost(false);
    }
  }, [rerenderpost]);

  return (
    <>
      {combinedData.map((data, index) => (
        <section className="post-box-container" key={index}>
          <section className="post-box">
            <div className="post-header">
              <p
                className="post-initial"
                style={{ background: data.color }}
                onClick={() => navigate("/profile")}
              >
                {data.initial}
              </p>
              <div className="poster-content">
                <p>{`${data.firstName} ${data.lastName}`}</p>
                <p>{data.title}</p>
              </div>
            </div>
            <p>{data.content}</p>
          </section>

          <section className="add-comment">
            <FirstContact
              contactIdOne={contactIdOne}
              setContactIdOne={setContactIdOne}
            />
            <AddCommentInput
              setContent={setContent}
              newComment={newComment}
              setNewcomment={setNewcomment}
              combinedData={combinedData}
              setCombinedData={setCombinedData}
              key={index}
              index={index}
              handleChange={(e) =>
                handleChange(e, index, data.contactId, data.postId)
              }
            />
          </section>
        </section>
      ))}
    </>
  );
}

export default showComment;
