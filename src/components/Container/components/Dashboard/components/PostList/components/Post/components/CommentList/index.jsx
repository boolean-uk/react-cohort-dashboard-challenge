import Comment from "./components/Comment"
import PostComment from "./components/PostComment"
import "../../../../../../../../../../assets/css/CommentList.css"
import * as API from "../../../../../../../../../../API"
import { createContext, useEffect, useState } from "react"

const CommentCrudContext = createContext()

function CommentList({ postId }) {
    const [comments, setComments] = useState({
        comments: [],
        showLimit: -1
    })

    useEffect(() => async function () {
        setComments({ comments: (await API.get("post/" + postId + "/comment")).data.reverse(), showLimit: 3 });
    }, [])

    /*
    obj = {
      "postId": int,
      "content": string,
      "contactId": int
    }
  */
    const addComment = async (postId, obj) => {
        const response = await API.post("post/" + postId + "/comment", obj)
        switch (response.httpRes.status) {
            case 201:
                console.log("201 created")
                setComments({
                    comments: (await API.get("post/" + postId + "/comment")).data,
                    showLimit: comments.showLimit
                });
                console.log(comments)
                break;
            case 400:
                console.log("400 bad request")
                break;
            case 401:
                console.log("401 username provided not part of boolean org")
                break;
            default:
                console.log("Unknown status code received in addComment.")
        }
        console.log(response)
        return response
    }

    const getAllComments = async (postId) => {
        const response = await API.get("post/" + postId + "/comment")
        switch (response.httpRes.status) {
            case 200:
                console.log("200 ok")
                break;
            case 400:
                console.log("400 bad request")
                break;
            case 401:
                console.log("401 username provided not part of boolean org")
                break;
            default:
                console.log("Unknown status code received in getAllComments.")
        }
        console.log(response)
        return response.data
    }

    const handleLimit = () => {
        setComments({ comments: comments.comments, showLimit: comments.comments.length })
    }

    const commentsToShow = comments.comments.slice(0, comments.showLimit).map((comment, ix) => (
        <Comment key={ix} comment={comment} />
    )) 

    return (
        <>
            <CommentCrudContext.Provider value={{ getAllComments, addComment }}>
                <div className="CommentList-main">
                    {comments.comments.length > 3 ? <p onClick={handleLimit}>Show more comments</p> : null}
                    {commentsToShow.length ? commentsToShow : "Loading comments..."}
                </div>
                <PostComment postId={postId} />
            </CommentCrudContext.Provider>
        </>
    )
}

export { CommentList, CommentCrudContext };
