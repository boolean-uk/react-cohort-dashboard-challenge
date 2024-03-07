import { Link, useParams } from "react-router-dom";
import CircleAvatar from "./CircleAvatar";
import { useContext, useEffect, useState } from "react";
import {
  ActiveContext,
  ContactContext,
  CommentContext,
  PostContext,
} from "./App";

function EditPost() {
  const { postId } = useParams();
  const createCommentContext = useContext(CommentContext);

  const contactContext = useContext(ContactContext);
  const activeContext = useContext(ActiveContext);
  const postContext = useContext(PostContext);
  const { contacts } = contactContext;
  const { posts } = postContext;
  const { active } = activeContext;
  const { createComment } = createCommentContext;

  const [post, setPost] = useState(posts.find((p) => p.id == postId));
  const [user, setUser] = useState();
  const [comment, setComment] = useState("");
  function onSubmit() {
    const com = { postId: post.id, content: comment, contactId: user.id };
    createComment(com, post.id);
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
              <Link to={`/post/${post.id}`}>
                <p>{post.title}</p>
              </Link>
            </div>
          </div>
          <p>{post.content}</p>
        </div>
      </main>
    );
  }
  return <>Loading...</>;
}

export default EditPost;
