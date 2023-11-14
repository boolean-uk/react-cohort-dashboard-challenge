import PostInput from "./MainComponents/Postinput";
import FirstContact from "./HeaderComponents/FirstContactList";
import PostComment from "./MainComponents/ShowContent";
import { useState, useEffect } from "react";

function Main(props) {
  const commentData = {
    contactId: 1,
  };
  const [anotherComment, setAnotherComment] = useState(commentData);
  const [rerenderPost, setRerenderPost] = useState(false);
  const [comment, setComment] = useState([]);

  const {
    contactIdOne,
    setContactIdOne,
    allContact,
    setAllContact,
    content,
    setContent,
  } = props;

  return (
    <main>
      <section className="post">
        <FirstContact
          contactIdOne={contactIdOne}
          setContactIdOne={setContactIdOne}
        />
        <PostInput
          content={content}
          setContent={setContent}
          anotherComment={anotherComment}
          setAnotherComment={setAnotherComment}
          rerenderPost={rerenderPost}
          setRerenderPost={setRerenderPost}
        />
      </section>
      <section className="displayed-post">
        <PostComment
          comment={comment}
          setComment={setComment}
          rerenderPost={rerenderPost}
          setRerenderPost={setRerenderPost}
          anotherComment={anotherComment}
          setAnotherComment={setAnotherComment}
          contactIdOne={contactIdOne}
          setContactIdOne={setContactIdOne}
          content={content}
          setContent={setContent}
          allContact={allContact}
          setAllContact={setAllContact}
        />
      </section>
    </main>
  );
}
export default Main;