import { useContext, useEffect, useState } from "react"

import Post from './Post'
import { InstanceContext } from "../../App"

export default function Posts() {
    const [posts, setPosts] = useState([])
    const _instance = useContext(InstanceContext)

    useEffect(() => {
        fetch(_instance.baseURL + "post")
        .then((res) => res.json())
        .then((res) => setPosts(res.reverse()))
    }, [ _instance ])

    function postOnThread(event) {
        event.preventDefault()
        
        if (event.target.content.value === "" || event.target.title.value === "") return

        const _postInfo = {
            title: event.target.title.value,
            content: event.target.content.value,
            contactId: _instance.userID
        }

        fetch(_instance.baseURL + "post", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_postInfo)
        })

        event.target.title.value = ""
        event.target.title.blur()

        event.target.content.value = ""
        event.target.content.blur()

        setPosts([_postInfo, ...posts])
    }

    function postDeleted(postID) {
        const _index = posts.findIndex((elm) => { return elm.id === postID })
        if (_index === -1) return
        
        const _newPostsList = [...posts]
        _newPostsList.splice(_index, 1)
        setPosts(_newPostsList)
    }

    return (
        <div>
            <div className="poster">
            <form autoComplete='off' onSubmit={postOnThread} >
                <input name="title" autoComplete='false' style={{fontSize: 24, width: "100%"}} type="text" placeholder="Write about a topic" />
                <br />
                <textarea name="content" autoComplete='false' style={{fontSize: 24, width: "90%"}} type="text" placeholder="What's on your mind..." />
                <button style={{fontSize: 24, margin: 18}}>Post</button>
            </form>
            </div>
            {posts.map((elm, index) => (
                <Post key={index} info={elm} postDeletedCallback={postDeleted} />
            ))}
        </div>
    )
}
