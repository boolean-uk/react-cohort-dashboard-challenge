import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import DataContext from "../../DataContext"

export default function PostBodyInfo(props) {
    const {author, title, id, userId} = props
    const {users, tabs} = useContext(DataContext)
    const navigate = useNavigate()

    const handleClickUser = () => {
        if(users.find(u => u.id === userId) !== undefined){
            tabs.map(t => {
                if (t.label === 'Profile'){
                    t.active = true
                } else {
                    t.active = false
                }
            })
            navigate(`/user/${userId}`)
        }
    }

    const handleClickPost = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="post-body-info">
            <p className="post-body-author" onClick={handleClickUser}>{author}</p>
            <p className="post-body-title" onClick={handleClickPost}>{title}</p>
        </div>
    )
}