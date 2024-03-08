import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Post from "./Post"
import { InstanceContext } from "../../App"

export default function SinglePost() {
    const _id = Number(useParams().id)
    const _isValid = typeof(_id) === "number"
    const [post, setPost] = useState({})
    const _instance = useContext(InstanceContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!_isValid) return

        fetch(_instance.baseURL + "post/" + _id)
        .then((res) => res.json())
        .then(setPost)
    }, [ _instance, _id, _isValid ])

    function onPostDeleted() {
        navigate("/")
    }

    return (
        <div>
            {!_isValid &&
                <p style={{color: "red"}}>INVALID POST ID</p>
            }
            {_isValid &&
                <Post info={post} postDeletedCallback={onPostDeleted} ignoreCommentLimit={true} />
            }
        </div>
    )
}
