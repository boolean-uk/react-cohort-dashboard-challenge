import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deletePost, getPostById } from "./Api"
import PostListItem from "./PostListItem"
import { PostContext } from "./App"

let post = {
    contactId: 1,
    title: '',
    content: ''

}
function ShowOnePost() {
    const [currentPost, setCurrentPost] = useState({ ...post })
    const { posts, setPosts } = useContext(PostContext)
    const navigate = useNavigate()
    const { id } = useParams()

    const removePost = (post) => {
        deletePost(post.id)
        posts.splice(posts.indexOf(post), 1)
        setPosts([...posts])
        navigate('/')
    }

    useEffect(() => { getPostById(id).then((response) => setCurrentPost(response)) }, [])

    return (
        <PostListItem post={currentPost} one={true} removePost={removePost} />
    )
}

export default ShowOnePost