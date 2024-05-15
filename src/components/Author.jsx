import { useContext } from "react"
import { Link } from "react-router-dom"
import { StateContext } from "../App"

export default function Author(props) {
    const { post } = props
    const { authors } = useContext(StateContext)

    const authorFound = authors.find(author => author.id === post.contactId)

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
                </>
            }    
        </div>
    )
}