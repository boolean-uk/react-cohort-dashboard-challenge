import { useContext, useState } from "react";
import DataContext from "../../DataContext";
import PostItem from "./PostItem";
import { findById, getInitials } from "../../Utils";
import PostForm from "../../Forms/PostForm";
import { Link } from "react-router-dom";

function FeedSection() {
    const { posts, users, loggedUser } = useContext(DataContext);

    return (
        <main className="main-section">
            <section class="feed-section">
                <div class="section-header">
                    <Link to={`/view/profile/${loggedUser.id}`}>
                        <div class="user-circle-own">
                            {getInitials(loggedUser.name)}
                        </div>
                    </Link>
                    <div class="post-input">
                        <PostForm name="post" />
                    </div>
                </div>
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
            </section>
        </main>
    );
}

export default FeedSection;
