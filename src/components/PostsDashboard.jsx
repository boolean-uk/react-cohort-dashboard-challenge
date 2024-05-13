import { useState } from "react";
import ProfileImage from "./ProfileImage";
import PostLi from "./PostLi";

export default function PostsDashboard({ loggedInUser, postData, setPostData, showMore, setShowMore, addComment, setAddComment }) {
    const [addPost, setAddPost] = useState({
        title: '',
        content: '',
        contactId: 0
    })

    function handleChange(e) {
        const {name, value} = e.target
        const title = value.split(' ').slice(0, 5).join(' ')

        setAddPost({
            ...addPost,
            [name] : value,
            title: title,
            contactId: loggedInUser.id
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        async function addNewPost() {
            const options = {
                method: 'POST',
                body: JSON.stringify(addPost),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch('https://boolean-api-server.fly.dev/MyrtheDullaart/post', options)
            const data = await response.json()

            setPostData([
                ...postData,
                data
            ])
        }

        addNewPost()
        
        setAddPost({
            title: '',
            content: '',
            contactId: 0
        })
    }

    return (
        <div className="posts-dashboard">
            <section className="new-post-container">
                <ProfileImage loggedInUser={loggedInUser}/>
                <form className="new-post-form" onSubmit={handleSubmit} >
                    <input type="text" placeholder="What's on your mind?" className="new-post-input" name="content" onChange={handleChange} value={addPost.content}/>
                    <button className="post-button">Post</button>
                </form>
            </section>

            <section className="posts-container">
                <ul className="posts-ul">
                    {postData.map((post, index) => {
                        return <PostLi key={index} post={post} loggedInUser={loggedInUser} showMore={showMore} setShowMore={setShowMore} addComment={addComment} setAddComment={setAddComment}/>
                    })}
                </ul>
            </section>
        </div>
    )
}