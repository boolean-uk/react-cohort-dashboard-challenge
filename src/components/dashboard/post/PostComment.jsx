import { useContext, useState } from "react";
import "../../../style/dashboard/postComment.css"
import axios from "axios";
import { HttpRequestsContextAPIContext } from "../../../contextAPI/HttpRequestsContextAPI";
import { PostContextAPIContext } from "../../../contextAPI/PostContextAPI";


const PostComment = (props) => {


    const [inputPost, setInputPost] = useState("");

    const {baseURL} = useContext(HttpRequestsContextAPIContext)
    const {postsHistory, setPostsHistory} = useContext(PostContextAPIContext)

    const {post} = props ?? {}

     const comment = {
        postId: post.id,
        contactId: 1,
        content: inputPost,
      
    };




    const handleSubmit =  (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
            const response = await axios.post(baseURL + `/${post.id}/comment`, comment)
            if(response) {
                //Loops through postsHistory, checks for correct id and changes history of that item to be response data
                const updatedList = postsHistory.map(historyItem =>  historyItem.postId === post.id 
                    ? {...historyItem, 
                        history : 
                        [...historyItem.history,  response.data]} 
                        : historyItem);
                console.log(updatedList)
                setPostsHistory(updatedList)
      
            }

            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
        setInputPost("");
    }


    return(

        <form onSubmit={handleSubmit} className="postComment-form">
        <input 
            name="postComment"
            type="text"
            placeholder="Add a comment"
            id="postComment"
            value={inputPost} 
            onChange={(e) => {setInputPost(e.target.value)}}           
        />
        <button type="submit">Post</button>
        </form>

    )
}

export default PostComment;