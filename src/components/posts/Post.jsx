import PropTypes from 'prop-types'
import Certificate from '../profile/Certificate'
import { useContext, useEffect, useState } from 'react'
import { InstanceContext } from '../../App'

import Comment from './Comment'
import { Link } from 'react-router-dom'

Post.propTypes = {
    info: PropTypes.object,
    postDeletedCallback: PropTypes.func,
    ignoreCommentLimit: PropTypes.bool
}

export default function Post({ info, postDeletedCallback, ignoreCommentLimit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [comments, setComments] = useState([])
    const [seeAllComments, setSeeAllComments] = useState(false)
    const _instance = useContext(InstanceContext)

    if (typeof(ignoreCommentLimit) !== "boolean") ignoreCommentLimit = false

    useEffect(() => {
        fetch(_instance.baseURL + "post/" + info.id + "/comment")
        .then((res) => res.json())
        .then(setComments)
    }, [ _instance, info.id ])

    function commentOnPost(event, postID) {
        event.preventDefault()

        if (event.target.comment.value === "") return // we don't need to comment empty strings
        
        const _commentInfo = {
            postId: postID,
            content: event.target.comment.value,
            contactId: _instance.userID
        }

        fetch(_instance.baseURL + "post/" + postID + "/comment", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_commentInfo)
        })

        event.target.comment.value = ""
        event.target.comment.blur()

        setComments([...comments, _commentInfo])
        setSeeAllComments(true)
    }

    function editPost(event) {
        event.preventDefault()

        setIsEditing(false)

        if (event.target.title.value === "" || event.target.content.value === "") return
        if (info.title === event.target.title.value && info.content === event.target.content.value) return

        info.title = event.target.title.value
        info.content = event.target.content.value

        fetch(_instance.baseURL + "post/" + info.id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
    }

    function deletePost() {
        fetch(_instance.baseURL + "post/" + info.id, {
            method: "DELETE"
        })

        postDeletedCallback(info.id)
    }

    function deletedComment(commentID) {
        const _index = comments.findIndex((elm) => { return elm.id === commentID })
        if (_index < 0) return
        const _newComments = [...comments]
        _newComments.splice(_index, 1)
        setComments(_newComments)
    }

    return (
        <div className="post">
            {!isEditing &&
                <>
                <Certificate scale={0.5} status={
                <>
                {!ignoreCommentLimit &&
                    <Link to={"post/" + info.id}>{info.title}</Link>
                }
                {ignoreCommentLimit &&
                    <>{info.title}</>
                }
                </>
            } userID={info.contactId} />
            <p>{info.content}</p>
            <div style={{height: 2, backgroundColor: "rgb(231, 231, 231)", marginBottom: 24}}></div>
            {!ignoreCommentLimit &&
                <>
                {comments.length > 3 &&
                    <button onClick={() => setSeeAllComments(!seeAllComments)} style={{marginBottom: 10}}>{seeAllComments ? "Show Less Comments" : "Show More Comments"}</button>
                }
                </>
            }
            {comments.map((elm, index) => (
                <>
                {(index < 3 || seeAllComments || ignoreCommentLimit) &&
                    <Comment key={index} info={elm} deleteCallback={deletedComment} />
                }
                </>
            ))}
            <div className='comment'>
                <Certificate scale={0.3} userID={_instance.userID} forceCompact={true} />
                <div></div>
                <form autoComplete='off' onSubmit={(event) => commentOnPost(event, info.id)}>
                    <input autoComplete='false' name='comment' style={{width: "95%"}} type="text" placeholder='Write a Comment...' />
                    <button style={{position: "relative", float: "right"}}>Send</button>
                </form>
            </div>
            {(info.contactId == _instance.userID) &&
                <div style={{marginTop: 8}}>
                    <button onClick={() => setIsEditing(true)} style={{marginRight: 4}}>Edit Post</button>
                    <button onClick={deletePost}>Delete Post</button>
                </div>
            }
                </>
            }
            {isEditing &&
                <form autoComplete='off' onSubmit={editPost}>
                    <Certificate scale={0.5} status={
                    <>
                        <input name='title' type='textarea' autoComplete='false' defaultValue={info.title} style={{width: "500%"}} />
                    </>
                    } userID={info.contactId} />
                    <br />
                    <input name='content' type='textarea' autoComplete='false' defaultValue={info.content} style={{width: "100%"}} />
                    <br />
                    <button style={{position: "relative", top: 6}}>Confirm Edit</button>
                </form>
            }
        </div>
    )
}
