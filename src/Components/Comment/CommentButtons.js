function CommentButtons(props) {
    const { handleDeleteClick, handleEditClick } = props;
    return (
        <div class="comment-buttons">
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick} class="delete-button">
                Delete
            </button>
        </div>
    );
}

export default CommentButtons;
