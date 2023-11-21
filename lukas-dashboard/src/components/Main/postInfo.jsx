/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import ProfileLogo from "../Reusable/profileLogo"
import CommentForm from "./commentForm";
import CommentContent from "./commentContent";
import { useContext } from "react";
import { UserAndPostContext } from "../../App";

export default function PostInfo() {

    const {users, posts, setPosts} = useContext(UserAndPostContext)
    
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
                            <CommentContent users={users} postInfo={post}/>
                            <CommentForm postInfo={post} setPosts={setPosts}/>
                        </div>)
                })
            }
        </>
    )
}