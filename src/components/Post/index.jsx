import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import { MyContext } from "../../App"
import "./Post.css"
import Avatar from "../Avatar"

export default function Post({ post }) {
    const [author, setAuthor] = useState({
        firstName: " ",
        lastName: " "
    })
    const { API_CONTACTS } = useContext(MyContext)

    async function fetchAuthor(contactId) {
        fetch(`${API_CONTACTS}/${contactId}`, {})
            .then(async response => {
                let contact = await response.json()
                setAuthor(contact)
            }).catch(error => { })
    }
    //useEffect(() => { fetchAuthor(post.contactId) }, [post])

    return (
        <>
            <div className="post-container">
                <div className="post-header">
                    <Link to="/profile" state={{ user: author }} >
                        <div className="post-avatar-wrapper">
                            <Avatar nameInitials={author.firstName[0] + "" + author.lastName[0]} />
                        </div>
                    </Link>
                    <div className="post-intro">
                        <Link to="/profile" state={{ user: author }} >
                            <div className="post-author">
                                <p>{author.firstName + " " + author.lastName}</p>
                            </div>
                        </Link>
                        <Link to="/post" state={{ post: post }} >
                            <div className="post-title">
                                <p>post title{/*post.title*/}</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="post-content">
                    <p>{/*post.content*/}post content</p>
                </div>
                <hr></hr>
            </div>
        </>
    );
};