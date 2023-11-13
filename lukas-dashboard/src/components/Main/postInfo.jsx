/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import ProfileLogo from "../Reusable/profileLogo"
import CommentForm from "./commentForm";

export default function PostInfo({ users, posts }) {

    return (
        <>
            {
                posts.map((post) => {
                    const name = users.find((user) => user.id === post.contactId);
                    const id = post.contactId
                    return (
                        <div className="post" key={post.contactId + post.title}>
                            <div className="postInfo">
                                <ProfileLogo id={id}/>
                                <section>
                                    <h2>{name.firstName} {name.lastName}</h2>
                                    <Link className="title" to={`/post/${post.id}`}>{post.title}</Link>
                                </section>
                            </div>
                            <p className="postContent">{post.content}</p>
                            <hr />
                            <br />
                            <CommentForm />
                        </div>)
                })
            }
        </>
    )
}