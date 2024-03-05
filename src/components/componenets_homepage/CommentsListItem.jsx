import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getInitials } from "../../utils/getInitials";

function CommentsListItem(props) {
  const { post } = props;

  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  const postURL = `https://boolean-api-server.fly.dev/llllllll-l/post`;
  const userURL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;

  useEffect(() => {
    const fetchDataForComments = async () => {
      try {
        const response = await fetch(`${postURL}/${post.id}/comment`);

        if (!response.ok) {
          console.log(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setComments(data);

        // Fetch user information for each comment
        const userIds = data.map((comment) => comment.contactId);
        const usersResponse = await Promise.all(
          userIds.map((userId) => fetch(`${userURL}/${userId}`))
        );
        const usersData = await Promise.all(
          usersResponse.map((response) => response.json())
        );
        setUsers(usersData);
      } catch (error) {
        console.log(
          `OBS!!! Something went wrong retrieving comments for ${post.id}`
        );
      }
    };

    fetchDataForComments();
  }, [post.id, postURL, userURL]);

  //console.log("Comment: ", comments);
  return (
    <>
      <div className="post-comments">
        <h3>See previous comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={comment.id}>
              <div className="comment-card">
                <div className="initials-circle">
                  {getInitials(
                    `${users[index]?.firstName} ${users[index]?.lastName}`
                  )}
                </div>
                <h4>
                  {users[index]?.firstName} {users[index]?.lastName}
                </h4>
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

CommentsListItem.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object,
};

export default CommentsListItem;
