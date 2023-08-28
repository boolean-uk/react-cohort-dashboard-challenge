import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getInitials, getRandomUserId, isObjectEmpty } from "../../Utils";
import DataContext from "../../DataContext";
import CommentsLists from "../Comment/CommentsList";
import CommentForm from "../../Forms/CommentForm";

function PostItem(props) {
    const { post, index, author } = props;

    const { comments, posts, setPosts, setComments, updateComment } =
        useContext(DataContext);

    let authorInitials = "";

    const toggleExpanded = () => {
        const updatedPosts = [...posts];
        updatedPosts[index].expanded = !updatedPosts[index].expanded;
        setPosts(updatedPosts);
    };

    if (!author || !post) {
        return <p>Loading.. .</p>;
    } else {
        authorInitials = getInitials(author.name);
    }

    return (
        <div class="post">
            <div class="user-info">
                <Link
                    to={`/view/profile/${author.id}`}
                    state={{ userData: author }}
                    style={{ textDecoration: "none" }}
                >
                    <div class="user-circle">{authorInitials}</div>
                </Link>
                <div class="user-name">{author.name}</div>
            </div>
            <div class="post-content">
                <Link
                    to={`/view/post/${post.id}`}
                    state={{
                        data: { currentPost: post, comments },
                    }}
                    style={{ textDecoration: "none" }}
                >
                    <div class="post-title">{post.title}</div>
                </Link>

                <div class="post-text">{post.body}</div>
                {comments[post.id] ? (
                    <CommentsLists
                        comments={
                            post.expanded
                                ? comments[post.id]
                                : (comments[post.id].length > 3
                                      ? comments[post.id].slice(0, 3)
                                      : comments[post.id]) || []
                        }
                        post={post}
                        update={updateComment}
                    />
                ) : (
                    <p>No comments yet...</p>
                )}
                {comments[post.id]
                    ? comments[post.id].length > 3 && (
                          <button onClick={toggleExpanded}>
                              {post.expanded
                                  ? "Collapse comments"
                                  : "See previous comments"}
                          </button>
                      )
                    : null}
                <CommentForm
                    comments={comments[post.id] || []}
                    setComments={setComments}
                    post={post}
                    updateComment={updateComment}
                />
            </div>
        </div>
    );
}

export default PostItem;
