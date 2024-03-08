import { Link, useNavigate, useParams } from "react-router-dom";
import CircleAvatar from "./CircleAvatar";
import { useContext, useEffect, useState } from "react";
import { ContactContext, PostContext } from "./App";

function EditPost() {
  const { postId } = useParams();
  const contactContext = useContext(ContactContext);
  const postContext = useContext(PostContext);
  const { contacts } = contactContext;
  const { posts, editPost } = postContext;
  const navigate = useNavigate();
  const [post, setPost] = useState(posts.find((p) => p.id == postId));
  const [user, setUser] = useState();

  function onSave() {
    editPost(post);
    navigate("/");
  }
  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    event.target.style.height = 0;
    event.target.style.height = `${event.target.scrollHeight}px`;
    setPost({ ...post, [name]: value });
  }
  useEffect(() => {
    if (posts) {
      setPost(posts.find((p) => p.id == postId));
    }
  }, [postId, posts]);
  useEffect(() => {
    if (post) {
      setUser(contacts.find((c) => c.id == post.contactId));
    }
  }, [contacts, post]);
  if (user && post) {
    return (
      <main>
        <div className="post">
          <div className="post-header">
            <div className="post-avatar">
              <Link to={`/profile/${user.id}`}>
                <CircleAvatar
                  backgroundColor={user.favouriteColour}
                  initials={user.firstName.charAt(0) + user.lastName.charAt(0)}
                />
              </Link>
            </div>
            <div className="post-header-text">
              <h4>{user.firstName + " " + user.lastName}</h4>

              <input
                name="title"
                onChange={onChange}
                value={post.title}
              ></input>
            </div>
          </div>
          <textarea
            name="content"
            value={post.content}
            onChange={onChange}
            style={{ resize: "none", width: "100%" }}
          ></textarea>
          <button onClick={onSave}>Save</button>
          <p>{post.content}</p>
        </div>
      </main>
    );
  }
  return <>Loading...</>;
}

export default EditPost;
