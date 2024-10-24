import { useState, useContext } from 'react'
import { PostContext } from '../App'

function PostCreate(){
    const {createPost, post, setPost} = useContext(PostContext)
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setPostContent] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        post.contactId = 1
        post.title = postTitle
        post.content = postContent                     
        createPost(post)
    }

    function handleChange(event){
        const inputName = event.target.name
        const inputValue = event.target.value   
        switch (inputName) {
            case 'postTitle':
                setPostTitle(inputValue);
                break;
            case 'postContent':
                setPostContent(inputValue);
                break;
            default:
                break;
        }
        setPost({...post, [inputName]: inputValue})
    }

    return(
        <div class="main green">
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <input 
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={postTitle} 
                            placeholder="Title..."
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <input 
                            type="text" 
                            id="postContent"
                            name="postContent"
                            value={postContent}
                            placeholder="What's on your mind?"
                            onChange={handleChange}
                        />
                    </li>
                    <li>
                        <button type="submit">Post</button> 
                    </li>
                </ul>                
            </form>
        </div>
    )
}

export default PostCreate