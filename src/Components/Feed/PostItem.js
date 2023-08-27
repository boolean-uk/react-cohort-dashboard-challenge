import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getInitials, getRandomUserId, isObjectEmpty } from "../../Utils";
import DataContext from "../../DataContext";
import CommentForm from "../../Forms/CommentForm";
import CommentsLists from "../Comment/CommentsList";

function PostItem(props) {
    const { post, index, author } = props;

    const { comments, posts, setPosts, setComments } = useContext(DataContext);

    async function getData(postId) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        ).then((response) => response.json());
        console.log(response);
        const commentsWithUserId = response.map((comment) => ({
            ...comment,
            userId: getRandomUserId(),
        }));
        setComments((prevComments) => ({
            ...prevComments,
            [postId]: commentsWithUserId,
        }));
        console.log("Calling getData with post ID:", post.id);
        console.log("Comments: ", comments);
    }

    useEffect(() => {
        getData(post.id);
    }, [post.id]);

    let authorInitials = "";

    const toggleExpanded = () => {
        const updatedPosts = [...posts];
        updatedPosts[index].expanded = !updatedPosts[index].expanded;
        setPosts(updatedPosts);
    };

    if (!author || !post || comments[post.id] === undefined) {
        return <p>Loading.. .</p>;
    } else {
        authorInitials = getInitials(author.name);
    }

    return (
        <div class="post">
            <Link
                to={`/view/profile/${author.id}`}
                // state={{ author}}
            >
                <div class="user-circle">{authorInitials}</div>
            </Link>
            <div class="post-content">
                <div class="user-info">
                    <div class="user-name">{author.name}</div>
                    <Link
                        to={`/view/post/${post.id}`}
                        state={{
                            data: { currentPost: post, comments },
                        }}
                    >
                        <div class="post-title">{post.title}</div>
                    </Link>
                </div>
                <div class="post-text">{post.body}</div>
                <CommentsLists
                    comments={
                        post.expanded
                            ? comments[post.id]
                            : comments[post.id].slice(0, 3) || []
                    }
                />
                {comments[post.id].length > 3 && (
                    <button onClick={toggleExpanded}>
                        {post.expanded
                            ? "Collapse comments"
                            : "See previous comments"}
                    </button>
                )}
                <CommentForm
                    comments={comments[post.id] || []}
                    setComments={setComments}
                    post={post}
                />
            </div>
        </div>
    );
}

export default PostItem;
