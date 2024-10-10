
export default function Post_Title({newPost, setNewPost}){

    return (
        <label className="post_title">
            Title:
            <input
                type="text"
                name="newPost_title"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
            />
            
        </label>
    )
}