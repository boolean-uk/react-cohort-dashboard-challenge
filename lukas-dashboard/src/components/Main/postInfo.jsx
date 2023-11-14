/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import ProfileLogo from "../Reusable/profileLogo"
import CommentForm from "./commentForm";
import CommentContent from "./commentContent";

export default function PostInfo({ users, posts, setPosts }) {

    return (
        <>
            {
                posts.toReversed().map((post) => {
                    const name = users.find((user) => user.id === post.contactId);
                    const id = post.contactId
                    return (
                        <div className="post" key={post.id}>
                            <div className="postInfo">
                                <ProfileLogo id={id} />
                                <section>
                                    <h2>{name.firstName} {name.lastName}</h2>
                                    <Link
                                        className="title"
                                        to={`/post/${post.id}`}
                                        >{post.title}
                                    </Link>
                                </section>
                            </div>
                            <p className="postContent">{post.content}</p>
                            <hr />
                            <br />
                            <CommentContent users={users} posts={posts} postInfo={post}/>
                            <CommentForm users={users} posts={posts} postInfo={post} setPosts={setPosts}/>
                        </div>)
                })
            }
        </>
    )
}