/* eslint-disable react/prop-types */
import { useState } from "react"
import ProfileLogo from "../Reusable/profileLogo"
import CommentForm from "./commentForm"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function SinglePostPage({ users, posts }) {

    const { postId } = useParams()
    console.log(postId)

    const [singlePersonPost, setSinglePersonPost] = useState(
        {
            id: 0,
            contactId: 0,
            title: "",
            content: "",
        }
    )

    const [singleUser, setSingleUser] = useState(
        {
            firstName: "",
            lastName: "",
            id: 1,
        }
    )

    useEffect(() => {
        if (postId) {
            setSinglePersonPost(posts.find((post) => Number(post.id) === Number(postId)))
        }
    }, [postId, posts])


    console.log(singlePersonPost)

    useEffect(() => {
        if (singlePersonPost) {
            setSingleUser(users.find((user) => user.id === singlePersonPost.contactId))
        }
    }, [singlePersonPost, users])
    console.log(singleUser)




    return (
        // <div><p>hi</p></div>
        
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
    )
}

