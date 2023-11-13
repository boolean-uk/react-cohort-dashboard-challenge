import PostInput from "./MainComponents/PostInput";
import FirstContact from "./HeaderComponents/FirstContact";
import PostComment from "./MainComponents/showComment";
import { useState, useEffect } from "react";
function Main(props) {
  const commentData = {
    contactId: 1,
  };
  const [anotherComment, setAnotherComment] = useState(commentData);
  const { rerenderpost, setRerenderPost } = useState(false);

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
          anotherComment={anotherComment}
          setAnotherComment={setAnotherComment}
          rerenderpost={rerenderpost}
          setRerenderPost={setRerenderPost}
        />
      </section>
      <section className="displayed-post">
        <PostComment
          rerenderpost={rerenderpost}
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
