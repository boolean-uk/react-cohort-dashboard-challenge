import { useContext } from "react"
import DataContext from "../../DataContext"

export default function PostBodyActions(props) {
    const {postId} = props
    const {posts, setPosts} = useContext(DataContext)

    const handleDelete = () => {
        posts.splice(posts.findIndex(p => p.id === postId),1)
        setPosts([...posts])
    }
    
    return (
        <div className="post-body-actions">
            <img
                className="post-action-icon"
                src="https://cdn-icons-png.flaticon.com/512/7398/7398464.png"
                alt="edit-icon"
            />
            <img 
                className="post-action-icon"
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt="delete-icon"
                onClick={handleDelete}
            />
        </div>
    )
}