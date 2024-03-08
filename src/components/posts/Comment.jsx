import PropTypes from 'prop-types'
import Certificate from '../profile/Certificate'
import { useContext, useState } from 'react'
import { InstanceContext } from '../../App'

Comment.propTypes = {
    info: PropTypes.object,
    deleteCallback: PropTypes.func
}

export default function Comment({ info, deleteCallback }) {
    const _instance = useContext(InstanceContext)
    const [isEditing, setIsEditing] = useState(false)

    function editComment(event, i) {
        event.preventDefault()

        setIsEditing(false)

        // edit mode is cancelled when -> element loses focus or pressing escape or when pressing enter whilst also the field has had no changes set
        if (event.target.comment.value === i.content) return
        i.content = event.target.comment.value

        fetch(_instance.baseURL + "post/" + i.postId + "/comment/" + i.id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(i)
        })
    }

    function deleteComment(postID, commentID) {
        fetch(_instance.baseURL + "post/" + postID + "/comment/" + commentID, {
            method: "DELETE"
        })

        // do some callback stuff here, so that we can remove it from the browser's memory
        deleteCallback(commentID)
    }

    return (
        <div className='comment'>
            <Certificate scale={0.3} userID={info.contactId} forceCompact={true} />
            <div style={{backgroundColor: "#dce3ea", borderRadius: 8, padding: "12px", gridColumnStart: 3, gridColumnEnd: 4}}>
                {!isEditing &&
                    <>
                    {info.content}
                    {_instance.userID === info.contactId &&
                        <div style={{position: "relative", float: "right"}}>
                            <button onClick={() => setIsEditing(true)}>Edit</button>
                            <button onClick={() => deleteComment(info.postId, info.id)}>Delete</button>
                        </div>
                    }
                    </>
                }
                {isEditing &&
                    <form autoComplete='off' onSubmit={(e) => editComment(e, info)} >
                        <input name='comment' type='textarea' autoComplete='off' style={{width: "90%"}} onBlur={() => setIsEditing(false)} autoFocus={true} defaultValue={info.content} />
                    </form>
                }
            </div>
        </div>
    )
}
