import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "./Api"
import PostListItem from "./PostListItem"

let post = {
    contactId: 1,
    title: '',
    content: ''

}
function ShowOnePost() {
    const [currentPost, setCurrentPost] = useState({ ...post })
    const { id } = useParams()


    useEffect(() => { getPostById(id).then((response) => setCurrentPost(response)) }, [])

    return (
        <PostListItem post={currentPost} one={true} />
    )
}

export default ShowOnePost