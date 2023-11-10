/* eslint-disable react/prop-types */
import { useState } from "react"
import ProfileLogo from "../Reusable/profileLogo"

export default function PostInfo({ users, posts }) {

    return (
        <>
            {
                posts.map((post) => (
                    <div key={post.contactId + post.title}>
                        <div className="postInfo">
                            <ProfileLogo/>
                            <section>
                                <h2>{post.contactId}</h2>
                                <p>{post.title}</p>
                            </section>
                        </div>
                        <p className="postContent">{post.content}</p>
                        <hr />
                    </div>
               ))
            }
        </>
    )
}