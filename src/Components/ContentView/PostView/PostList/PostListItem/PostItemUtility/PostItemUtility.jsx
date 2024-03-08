import "./PostItemUtility.css"
import PropTypes from 'prop-types'

const PostItemUtility = ({editMode, setEditMode, deletePost, handleFinishEditing, postID}) => {
    return (
        <div className='utility-container'>
            {!editMode && <>
                <img 
                    src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/pencil-icon.png"
                    onClick={() => setEditMode(true)}
                    />
                <img 
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