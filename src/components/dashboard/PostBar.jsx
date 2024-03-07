import { useCallback, useContext, useState } from "react";
import '../../style/dashboard/postBar.css';
import { PostContextAPIContext } from "../../contextAPI/PostContextAPI";
import axios from "axios";
import { HttpRequestsContextAPIContext } from "../../contextAPI/HttpRequestsContextAPI";

const PostBar = () => {

    const [inputPost, setInputPost] = useState({
        title : "",
        content: "",
        contactId : 1,
    });

    const {setPosts} = useContext(PostContextAPIContext)
    const {baseURL} = useContext(HttpRequestsContextAPIContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputPost)
        const fetchData = async () => {
            try {
                const response = await axios.post(baseURL, inputPost);
                console.log(response.data)
                }
             catch (error) {
                console.error(error)
            }
            
        }
        fetchData();
        setPosts((prevList) => [...prevList, inputPost])
        setInputPost({        
            title : "",
            content: "",
            contactId : 1,
        });
    }


    return(
        <>
        <div className="circle">
            <span className="initials">AB</span>
        </div>
        <form onSubmit={handleSubmit} className="postBar-form">
                <input
                    name="postBar"
                    type="text"
                    placeholder="Post Your Thoughts"
                    className="postBar"
                    value={inputPost.content}
                    onChange={(e) => { setInputPost({ ...inputPost, content: e.target.value }); } } />

                <input
                    name="postTitleBar"
                    type="text"
                    placeholder="Title"
                    className="postBar"
                    value={inputPost.title}
                    onChange={(e) => { setInputPost({ ...inputPost, title: e.target.value }); } } />
                <button type="submit">Post</button>
            </form></>

    )
}

export default PostBar;