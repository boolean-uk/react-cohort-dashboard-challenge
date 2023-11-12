import React, { useState, useEffect } from "react";
import AddCommentInput from "./AddCommentInput";
import FirstContact from "../HeaderComponents/FirstContact";
import { useNavigate } from "react-router-dom";
import "./showComment.css";

function showComment(props) {
  const { setComment, setAllContact } = props;
  const [comment, setCommentState] = useState([]);
  const [allContact, setAllContactState] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const { contactIdOne, setContactIdOne } = props;
  const navigate = useNavigate();

  const fetchPost = () => {
    fetch("https://boolean-api-server.fly.dev/vherus/post")
      .then((response) => response.json())
      .then((data) => {
        console.log("this is the post", data);
        setCommentState(data);
      });
  };

  const fetchAllContact = () => {
    fetch("https://boolean-api-server.fly.dev/vherus/contact")
      .then((response) => response.json())
      .then((data) => {
        setAllContactState(data);
      });
  };

  useEffect(() => {
    fetchPost();
    fetchAllContact();
  }, []);

  useEffect(() => {
    console.log(allContact, comment);
  }, [allContact, comment]);

  useEffect(() => {
    if (allContact.length > 0 && comment.length > 0) {
      const combined = allContact
        .map((contact, index) => {
          if (
            comment[index] &&
            comment[index].title &&
            comment[index].content
          ) {
            return {
              initial: contact.firstName.charAt(0) + contact.lastName.charAt(0),
              firstName: contact.firstName,
              lastName: contact.lastName,
              title: comment[index].title,
              content: comment[index].content,
              color: getRandomColor(),
            };
          }
        })
        .filter(Boolean);
      setCombinedData(combined);
    }
  }, [allContact, comment]);

  const getRandomColor = () => {
    // Function to generate a random hex color
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

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
              comment={comment}
              setCommentState={setCommentState}
            />
          </section>
        </section>
      ))}
    </>
  );
}

export default showComment;
