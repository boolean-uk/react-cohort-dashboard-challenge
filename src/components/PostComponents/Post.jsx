import "../../styles/Post.css";
import ProfileCircle from "../ProfileComponents/ProfileCircle";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import PostCommentList from "./PostCommentList";
import { getContact, deletePost } from "../../services/PostService";


export default function Post({ children, title, id, onDelete, contactId }) {
  const [contact, setContact] = useState({});
  const { mutateAsync } = useMutation(["deletePost", id], () => deletePost(id));
  const { isLoading, isSuccess, data } = useQuery(
    ["getContact", contactId],
    () => getContact(contactId)
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setContact(data);
    }
  }, [isSuccess, data]);

  const removePost = async () => {
    const response = await mutateAsync(id);
    if (response) onDelete(id);
  };

  const contactFullname = `${contact.firstName} ${contact.lastName}`;

  return (
    <div className="card">
      <span
        onClick={removePost}
        className="material-symbols-outlined delete-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
        </svg>
      </span>
      {isLoading ? (
        <h1>Page is loading...</h1>
      ) : (
        <div className="user-info">
          <ProfileCircle
            contactId={contact.id}
            color={contact.favouriteColour}
            fullname={contactFullname}
          />
          <div className="user-info-text">
            <h3 style={{ padding: 0, margin: 0 }}>{contactFullname}</h3>
            <p
              className="title"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/post/${id}`)}
            >
              {title}
            </p>
          </div>
        </div>
      )}
      <p className="card-content">{children}</p>
      <PostCommentList postId={id} />
    </div>
  );
}