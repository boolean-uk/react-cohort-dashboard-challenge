/* eslint-disable react/prop-types */

import { useContext } from "react";
import { UsersContext } from "../../App";


function PostCard({ post }) {
  const { users } = useContext(UsersContext);

  const user = users.find((user) => {if(user.id === post.id) return user})
  console.log(user)

  return (
        <section className="post-container">
          <div className="post-header">
            <div className="profile-initials">
              <p>{user.firstName[0]}{user.lastName[0]}</p>
            </div>
            <div className="post-information">
              <p id="profile-name">{user.firstName} {user.lastName}</p>
              <p id="post-title">{post.title}</p>
            </div>
          </div>
          <div className="post-body">
            <p>{post.content}</p>
          </div>
          <div className="comment-section">
            <form className="comment-section-form">
              <div className="profile-initials">
                <p></p>
              </div>
              <div className="text-input-container">
                <input
                  type="text"
                  name="post"
                  placeholder="Add a comment..."
                ></input>
              </div>
            </form>
          </div>
        </section>
  );
}
export default PostCard;
