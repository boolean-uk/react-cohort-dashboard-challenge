import CreateComment from "./CreateComment"
import CommentList from "./CommentList"
import { useContext, useEffect, useState } from "react"
import { AppContext } from '../App'
import UserCircle from './UserCircle'
import AuthorName from "./Author"
import { Link, useNavigate, useParams } from 'react-router-dom'

function Post({post}) {
    const { authors, posts, setPosts } = useContext(AppContext)

    const [author, setAuthor] = useState(undefined)
    const [statePost, setStatePost] = useState(undefined)

    const [editing, setEditing] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // Check if we are accessing a post with an id from the url...
        let initPost = post
        if (id) {
            initPost = posts.find((p) => Number(p.id) === Number(id))
        }
        // If we have an initialized post, find the author for the post...
        if (initPost) {
            const newAuthor = authors.find((a) => a.id === initPost.contactId)
            setAuthor(newAuthor)
            setStatePost(initPost)
        }
    }, [authors, author, id, posts, post])

    if (!statePost) return <p>Loading...</p>

    const handleChange = (event) => {
        const {name, value } = event.target 
        setStatePost({ ...post, [name]: value });
    };

    const handleEdit = () => {
        setEditing(true)
    }

    const handleSave = () => {
        // Update the existing post...
        const newPosts = posts.map((p) => {
            if (Number(p.id) === Number(statePost.id)) {
                return statePost
            } else {
                return p
            }
        })

        // Update the database...
        fetch(`https://boolean-uk-api-server.fly.dev/tvaltn/post/${statePost.id}`, {
            method: "PUT",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(statePost),
        })

        // Set the new posts...
        setPosts(newPosts)
        setEditing(false)
    }

    const handleDelete = () => {
        // Filter it out from the posts...
        const newPosts = posts.filter((p) => p !== statePost)
        setPosts(newPosts)

        // Remove it from the database...
        fetch(`https://boolean-uk-api-server.fly.dev/tvaltn/post/${statePost.id}`, {
            method: "DELETE",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            }
        })

        // Navigate back to root
        navigate("/")
    }


    return (
        <li className="viewPost">
            <div className="viewPostHeader">
                <UserCircle user={author}/>
                <div className="viewPostHeaderText">
                    <h4><AuthorName author={author}/></h4>
                    {editing ?
                        <h5>
                            <input
                            type="text"
                            name="title"
                            value={statePost.title}
                            onChange={handleChange}
                            style={{font: "inherit"}}
                            size={statePost.title.length}
                            />
                        </h5> :
                        <Link to={`/post/${statePost.id}`} style={{ textDecoration: 'none' }}>
                            <h5>{statePost.title}</h5>
                        </Link>
                    }
                </div>
                <div className="viewPostHeaderButtons">
                    {editing ?
                    <button onClick={handleSave}>Save</button>
                    :
                    <button onClick={handleEdit}>Edit</button>
                    }
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            {editing ?
                <p>
                    <input
                    type="text"
                    name="content"
                    value={statePost.content}
                    onChange={handleChange}
                    style={{font: "inherit"}}
                    size={`${statePost.content.length}`}
                    />
                </p> :
                <p>{statePost.content}</p>
            }
            <div className="commentSection">
                <CommentList post={statePost}/>
                <CreateComment post={statePost}/>
            </div>
        </li>
    )
}

export default Post