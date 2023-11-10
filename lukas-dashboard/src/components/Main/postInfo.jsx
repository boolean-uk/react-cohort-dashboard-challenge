/* eslint-disable react/prop-types */
import { useState } from "react"
import ProfileLogo from "../Reusable/profileLogo"

export default function PostInfo({ users, posts }) {

    return (
        <>
            {
                posts.map((post) => {
                    const name = users.find((user) => user.id === post.contactId);
                    console.log(name);
                    return (<div key={post.contactId + post.title}>
                        <div className="postInfo">
                            <ProfileLogo />
                            <section>
                                <h2>{name.firstName} {name.lastName}</h2>
                                <p>{post.title}</p>
                            </section>
                        </div>
                        <p className="postContent">{post.content}</p>
                        <hr />
                    </div>)
                })
            }
        </>
    )
}