import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { StateContext } from "../App"

export default function Author(props) {
    const { post } = props
    const { authors, loadedPosts } = useContext(StateContext)

    const authorFound = authors.find(author => author.id === post.contactId)

    const navigate = useNavigate()

    const handleClick = () => {
        fetch(`https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/post/${post.id}`, {
            method: 'DELETE'
        }).then(() => {
            loadedPosts()
        })
    }

    return (
        <div className="author">
            {authorFound &&
                <>
                    <Link to={`/contact/${authorFound.id}`}>
                        <figure style={{ backgroundColor: `${authorFound.favouriteColour}` }}>
                            <figcaption>
                                {authorFound.firstName[0]}{authorFound.lastName[0]}
                            </figcaption>
                        </figure>
                    </Link>

                    <div className="name-title">
                        <Link to={`/contact/${authorFound.id}`}>
                            <h4>
                                {authorFound.firstName} {authorFound.lastName}
                            </h4>
                        </Link>
                        
                        <Link to={`/post/${post.id}`}>
                            <b>{post.title}</b>
                        </Link>
                    </div>

                    <button onClick={() => navigate(`/post/update/${post.id}`)}>Update</button>

                    <button onClick={handleClick}>Delete</button>
                </>
            }    
        </div>
    )
}