import { useContext } from "react";
import DataContext from "../../DataContext";
import PostUserInfo from "./PostUserInfo";
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import PostItemComments from "./PostItemComments";
import ToggleElement from "./ToggleElement";
import CommentForm from "../../Forms/CommentForm/CommentForm";
import Loader from "../Loader";

function PostItem(props) {
    const { post, index, author } = props;

    const { comments, posts, setPosts, setComments, updateComment } =
        useContext(DataContext);

    const toggleExpanded = () => {
        const updatedPosts = [...posts];
        updatedPosts[index].expanded = !updatedPosts[index].expanded;
        setPosts(updatedPosts);
    };

    if (!author || !post) {
        return <Loader />;
    }

    return (
        <div class="post">
            <PostUserInfo author={author} />
            <div class="post-content">
                <PostTitle post={post} />
                <PostBody post={post} />
                <PostItemComments post={post} />
                <ToggleElement post={post} toggleExpanded={toggleExpanded} />
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
