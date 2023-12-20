import "./specificPost.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SpecificPost = ({ loggedInUser }) => {
  const [specificPostUser, setSpecificPostUser] = useState({});
  const [specificPostUsersContact, setSpecificPostUsersContact] = useState({});
  const { id } = useParams();
  const [specificComments, setSpecificComments] = useState([]);
  const [specificCommentsContact, setSpecificCommentsContact] = useState([]);
  // get the post using the id from params
  const getSpecificPost = () => {
    fetch(`https://boolean-api-server.fly.dev/hamza789987/post/${id}
  `)
      .then((res) => res.json())
      .then((data) => setSpecificPostUser(data));
  };
  ///
  // get the post using the contactId from the new state
  const getSpecificPostsContact = () => {
    console.log("outside if", specificPostUser.contactId);

    if (specificPostUser.contactId) {
      fetch(
        `https://boolean-api-server.fly.dev/hamza789987/contact/${specificPostUser.contactId}`
      )
        .then((res) => res.json())
        .then((data) => setSpecificPostUsersContact(data));
    }
  };
  useEffect(getSpecificPost, [specificComments.id]);
  useEffect(getSpecificPostsContact, [specificPostUser.contactId]);

  /////////////////

  const getSpecificComments = () => {
    fetch(
      `https://boolean-api-server.fly.dev/hamza789987/post/${specificPostUser.id}/comment`
    )
      .then((res) => res.json())
      .then((data) => setSpecificComments(data));
  };
  const getSpecificCommentsInfo = () => {
    fetch(`https://boolean-api-server.fly.dev/hamza789987/contact/`)
      .then((res) => res.json())
      .then((data) => setSpecificCommentsContact([...data]));
  };
  useEffect(getSpecificComments, [specificComments]);
  useEffect(getSpecificCommentsInfo, [specificComments]);

  console.log(specificComments, specificCommentsContact);
  return (
    <div className='eachPostContainer'>
      <div
        className={`otherInitials ${
          specificComments.contactId === 1 ? "mines" : "others"
        }`}>
        {specificPostUsersContact.firstName &&
          specificPostUsersContact.lastName && (
            <>
              {specificPostUsersContact.firstName[0]}
              {specificPostUsersContact.lastName[0]}
            </>
          )}
      </div>
      <div className='postName'>
        {specificPostUsersContact.firstName &&
          specificPostUsersContact.lastName && (
            <>
              {specificPostUsersContact.firstName}{" "}
              {specificPostUsersContact.lastName}
            </>
          )}
      </div>
      <div className='postTitle'>{specificPostUser.title}</div>
      <div className='postContent'> {specificPostUser.content} </div>{" "}
      <div>
        {specificComments.map((specificComments) => {
          const specificCommentsContacts = specificCommentsContact.find(
            (specificCommentsContact) =>
              specificCommentsContact.id === specificComments.contactId
          );

          return (
            <div key={specificComments.id} className='comments'>
              <div
                className={`commentInitials ${
                  specificComments.contactId === 1
                    ? "myComments"
                    : "otherComments"
                }`}>
                {specificCommentsContact && (
                  <p>
                    {specificCommentsContacts.firstName[0]}
                    {specificCommentsContacts.lastName[0]}
                  </p>
                )}
              </div>
              <div className='commentBox'>
                {specificCommentsContacts && (
                  <p className='commentName'>{`
                ${specificCommentsContacts.firstName} ${specificCommentsContacts.lastName}
                `}</p>
                )}
                <p className='commentContent'>{specificComments.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecificPost;
