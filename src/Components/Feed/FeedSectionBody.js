import { useContext } from "react";
import DataContext from "../../DataContext";
import { findById } from "../../Utils";
import PostItem from "./PostItem";

function FeedSectionBody() {
    const { posts,  users } = useContext(DataContext);

    return (
        <div class="post-feed">
            {posts.map((post, index) => {
                const user = findById(users, post.userId);
                return (
                    <PostItem
                        key={index}
                        post={post}
                        index={index}
                        author={user}
                    />
                );
            })}
        </div>
    );
}

export default FeedSectionBody;
