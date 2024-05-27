import { useState } from "react";
import UserIcon from "./UserIcon";

export default function CreatePost ({users, setPosts, posts}) {
    const [newPostValue, setNewPostValue] = useState("")

    function handleSubmit (event) {
        event.preventDefault()
        console.log(newPostValue)

        const idNumber = posts.length + 1


        console.log(idNumber)
        // add logic to set up new post

        fetch("https://boolean-uk-api-server.fly.dev/Alistair1080/post", {
                method: "POST",
                body: JSON.stringify({
                    contactId: 1,
                    title: "Added post title",
                    content: newPostValue,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
                })
                .then((response) => response.json())
                .then((json) => console.log(json))
                // .then(fetch('https://boolean-uk-api-server.fly.dev/Alistair1080/post')
                //     .then(res => res.json())
                //     .then(data => setPosts(data)))
        
        setPosts([...posts, {contactId: 1, title: "Added post title", content: newPostValue, id: idNumber}])
        
        setNewPostValue("")
    }

    function handleChange (event) {
        setNewPostValue(event.target.value)
    }
    return (
        <section id="createPostContainer">
            <UserIcon userInfo={users[0] || {firstName: "A", lastName: "W"}} />
            <div id="createPostFormContainer">
                <form id="postForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="What's on your mind?" value={newPostValue} onChange={handleChange}/>
                    <button id="postSubmitButton" type="submit">Post</button>
                </form>
            </div> 
        </section>
    )
}