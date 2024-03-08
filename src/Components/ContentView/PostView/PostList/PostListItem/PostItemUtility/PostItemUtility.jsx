import { basePostUrl } from "@/Utils/apiUtils"
import "./PostItemUtility.css"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { PostsContext } from "@/Utils/contexts"

const PostItemUtility = ({editMode, setEditMode, handleFinishEditing, postID}) => {
    const { fetchPosts } = useContext(PostsContext)
    
    const deletePost = async (id) => {
        const request = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }

        await fetch(`${basePostUrl}/${id}`, request)
        await fetchPosts()
    }

    return (
        <div className='utility-container'>
            {!editMode && <>
                <img 
                    alt="Edit button"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/pencil-icon.png"
                    onClick={() => setEditMode(true)}
                    />
                <img 
                    alt="Delete button"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/delete-icon.png"
                    onClick={() => deletePost(postID)}
                />
            </>}
            {editMode && 
                    <>
                    <button onClick={() => handleFinishEditing(postID)}>Confirm</button> 
                    <button onClick={() => setEditMode(false)}>Cancel</button> 
                    </>
                }
        </div>
    )
}

PostItemUtility.propTypes = {
    editMode: PropTypes.bool,
    setEditMode: PropTypes.func,
    deletePost: PropTypes.func,
    handleFinishEditing: PropTypes.func,
    postID: PropTypes.number,
}

export default PostItemUtility