import { useContext, useEffect, useState } from "react";
import DataContext from "../../DataContext";
import PostItem from "./PostItem";
import { findById, getInitials, getRandomUserId } from "../../Utils";
import { Link, useLocation } from "react-router-dom";
import PostForm from "../../Forms/PostForm";

function FeedSection() {
    const { posts, loggedUser, users } = useContext(DataContext);

    return (
        <main className="main-section">
            <section class="feed-section">
                <div class="section-header">
                    <div class="user-circle-own">
                        <Link
                            to={`/view/profile/${loggedUser.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            {getInitials(loggedUser.name)}
                        </Link>
                    </div>
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
