

export default function Post_Input({newPost, setNewPost}){

    return (
        <label className="post_input">
            Message:
            <input
                className="title_box"
                type="text"
                name="newPost_message"
                value={newPost.message}
                onChange={(e) => setNewPost({...newPost, message: e.target.value})}
            />
            
        </label>
    )
}