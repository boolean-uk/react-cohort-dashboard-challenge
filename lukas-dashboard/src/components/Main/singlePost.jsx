/* eslint-disable react/prop-types */
import { useState } from "react"
import ProfileLogo from "../Reusable/profileLogo"
import CommentForm from "./commentForm"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
// import { contactURL, get, postURL } from "../client"

export default function SinglePostPage({ users, posts }) {

    const { postId } = useParams()

    const [singlePersonPost, setSinglePersonPost] = useState()
    const [singleUser, setSingleUser] = useState()

    useEffect(() => {
        if (postId && posts) {
            setSinglePersonPost(posts.find((post) => Number(post.id) === Number(postId)))
        }
    }, [postId, posts])


    useEffect(() => {
        if (singlePersonPost && users) {
            setSingleUser(users.find((user) => user.id === singlePersonPost.contactId))
        }
    }, [singlePersonPost, users])
    

    return ( singlePersonPost && singleUser && (
        <div className="post" key={singlePersonPost.id}>
            <div className="postInfo">
                <ProfileLogo id={"1"} />
                <section>
                    <h2>{singleUser.firstName} {singleUser.lastName}</h2>
                    <title className="title">{singlePersonPost.title}</title>
                </section>
            </div>
            <p className="postContent">{singlePersonPost.content}</p>
            <hr />
            <br />
            <CommentForm />
        </div>
    ))
}

