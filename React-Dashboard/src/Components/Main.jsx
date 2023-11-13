import PostInput from "./MainComponents/PostInput";
import FirstContact from "./HeaderComponents/FirstContact";
import PostComment from "./MainComponents/showComment";
function Main(props) {
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
        <PostInput />
      </section>
      <section className="displayed-post">
        <PostComment
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
