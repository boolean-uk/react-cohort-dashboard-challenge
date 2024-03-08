import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { HttpRequestsContextAPIContext } from "../../../contextAPI/HttpRequestsContextAPI";
import SinglePostComment from "./SinglePostComment";
import { PostContextAPIContext } from "../../../contextAPI/PostContextAPI";

const PostHistory = (props) => {

    const {post} = props ?? {}


    const {baseURL} = useContext(HttpRequestsContextAPIContext)

    const {postsHistory, setPostsHistory} = useContext(PostContextAPIContext)

    const [historyLength, setHistoryLength] = useState(3);

    useEffect(() => {
        //Fetch  history of a post using id
        const fetchData = async () => {

            try {

                
                const response = await axios.get(baseURL +`/${post.id}/comment`, {
                });


                // //Only getting the last 5 comments
                // const limitedPostData = [...response.data.slice(response.data.length-3, response.data.length)];
       


                //If post doesnt exist in context add it  with a history and postId tag
                if(!postsHistory.find((history) => history.postId === post.id)) {
                    setPostsHistory((prevList) => [...prevList, {"postId" : post.id, "history" : response.data}])
     
                }
             
            } catch (error) {
                console.error(error);
            }
  
        }
        fetchData();

    }, []);

    if(!postsHistory) {
        return <div>Loading...</div>
    }
  
    const getHistoryLength = () => {
        if(historyLength === 3) {
            const length = postsHistory
            .filter(historyItem => historyItem.postId === post.id)  // Filter to find the history item for the current post
            .map((historyItem) => (
            historyItem.history.length))                            //Get history length of this post
            return length;
        }
        return 3;

    }

    return(
        <>
        <button 
            className="postHistory-showPreviousCommentsButton"
            onClick={() => setHistoryLength(getHistoryLength())}
        >  {historyLength === 3 ? "Show previous comments" : "Show less comments"}
        </button>
            {
            
            postsHistory
                .filter(historyItem => historyItem.postId === post.id)  // Filter to find the history item for the current post
                .map((historyItem, historyIndex) => (
                historyItem.history.slice(0, historyLength).map((comment, commentIndex) => (
                    <SinglePostComment comment={comment} key={`${historyIndex}-${commentIndex}` }/>
                ))
                ))
            }
        </>
    )
}

export default PostHistory;