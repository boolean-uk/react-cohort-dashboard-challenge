import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import { baseUrl } from "../App";

// components
import AddComment from "./AddComment";
import Avatar from "./Avatar";
import Comment from "./Comment";
import EditPost from "./EditPost";

// icons
import editIcon from "../assets/icons/edit.svg";
import deleteIcon from "../assets/icons/delete.svg";

export default function Post() {
  const [comments, setComments] = useState();
  const [contact, setContact] = useState();
  const [post, setPost] = useState();
  const [showEditBox, setShowEditBox] = useState(false);
  const [prevComments, setPrevComments] = useState(false);

  const { contacts, posts, setPosts } = useContext(DataContext);
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const fetchUrl = `${baseUrl}/post`;

  useEffect(() => {
    fetch(`${fetchUrl}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setPost(data);
        }
      })
      .catch((error) => console.error(error));

    fetch(`${fetchUrl}/${id}/comment`)
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setComments(data);
        }
      })
      .catch((error) => console.error(error));

    contacts?.find((contact) => {
      if (post?.contactId == contact?.id) {
        setContact(contact);
      }
    });
  });

  function handleDeleteClick() {
    const isConfirmed = confirm(
      `⛔ Are you sure you want to delete this post❓`
    );

    if (isConfirmed) {
      fetch(`${fetchUrl}/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPosts(posts.filter((post) => post.id !== data.id));
        });

      navigate("/");
    }
  }

  function handleEditClick() {
    setShowEditBox(true);
  }

  return (
    <>
      <section>
        <article className="post">
          <div className="post-header">
            <div className="post-info">
              <Link to={`/profile/${contact?.id}`}>
                <Avatar>{contact}</Avatar>
              </Link>
              <div className="user-data">
                <h3 className="user-name">
                  <Link to={`/profile/${contact?.id}`}>
                    {contact && `${contact?.firstName} ${contact?.lastName}`}
                  </Link>
                </h3>
                <p className="post-title">{post?.title}</p>
              </div>
            </div>
            <div className="post-btns">
              {contact?.id == 1 && (
                <button
                  title="Delete Post"
                  className="delete-btn"
                  onClick={handleDeleteClick}
                >
                  <img src={deleteIcon} alt="trash icon" />
                </button>
              )}
              {contact?.id == 1 && (
                <button
                  title="Edit Post"
                  className="edit-btn"
                  onClick={handleEditClick}
                >
                  <img src={editIcon} alt="pen icon" />
                </button>
              )}
            </div>
          </div>
          <p className="post-content">{post?.content}</p>
          {showEditBox && (
            <EditPost
              setShowEditBox={setShowEditBox}
              showEditBox={showEditBox}
              post={post}
            />
          )}
        </article>

        <article className="comments">
          {comments &&
            comments.map((comment, index) => {
              if (index <= 2) {
                return (
                  <Comment
                    key={index}
                    comment={comment}
                    contacts={contacts}
                    comments={comments}
                    setComments={setComments}
                    post={post}
                  />
                );
              }
            })}

          {prevComments &&
            comments.map((comment, index) => {
              if (index > 2) {
                return (
                  <Comment
                    key={index}
                    comment={comment}
                    contacts={contacts}
                    comments={comments}
                    setComments={setComments}
                    post={post}
                  />
                );
              }
            })}
        </article>

        {comments?.length > 3 && (
          <Link
            onClick={() => {
              setPrevComments(!prevComments);
            }}
          >
            <p className="see-previous-comments">
              See / hide previous comments
            </p>
          </Link>
        )}

        <article className="">
          <AddComment
            postId={post?.id}
            comments={comments}
            setComments={setComments}
          />
        </article>
      </section>
    </>
  );
}
