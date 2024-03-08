import { useContext, useState } from "react";
import { MyContext } from "../App.jsx";

function getInitialPost() {
    const title = localStorage.getItem("title")
    const content = localStorage.getItem("content")

    return {
      title: title || '',
      content: content || '',
      contactId: 1
    }
}

export default function CreatePost() {
    const [post, setPost] = useState(getInitialPost())
    const context = useContext(MyContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({
          ...post,
          [name]: value,
        })
        localStorage.setItem(name, value)
    }
    /*
contactId
: 
1
14
content
: 
title
: 
*/ 

    const handleSubmit = async (e) => {
      e.preventDefault();

      const postToSend = {
        ...post,
        contactId: 1,
    };
      console.log("Post Data:", postToSend);
      

      const response = await fetch("https://boolean-api-server.fly.dev/hassanhussa1n/post", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(postToSend),
      });

      if (response.ok) {
          const newPost = await response.json();
          context.setPosts([...context.posts, newPost]);
          localStorage.clear();
          setPost(getInitialPost());
      } else {
          console.error("Failed to create a new post", e);
      }
  };
  
    return (
        <div className="rounded-box yellow">
        <form onSubmit={handleSubmit} className="form">
              <input type="text" name="title" onChange={handleChange} value={post.title} className="postInput" placeholder="Title: "></input>
          
            <br/>
            <label>
              <textarea className="inputTextarea" 
                name="content" 
                onChange={handleChange}
                value={post.content}
                cols={50} rows={5}
                placeholder="What are you thinking?">
              </textarea> 
            </label>
           
            <input type="submit" value="Post!" className="postButton"></input>
        </form>
        </div>
    )
}
