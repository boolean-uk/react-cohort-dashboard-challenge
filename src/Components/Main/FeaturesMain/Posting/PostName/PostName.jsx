import { Link } from "react-router-dom"
import ProfilePicture from "../../../../ProfilePicture"
import PropTypes from 'prop-types'

export default function PostName(props) {
    // Destructuring props to obtain author, title, and id
    const {author, title, id} = props
    return (
        <div className="post-bar">
            <ProfilePicture author={author}/>
            <div>
                <h3>{author && Object.keys(author).length > 0 ? author.firstName + " " + author.lastName :""}</h3>
                <Link to={`/post/${id}`}><p>{title}</p></Link>
            </div>
        </div>
    )
}

// PropTypes validation for the PostName component props
PostName.propTypes = {
    // Validating the author prop to be an object with firstName and lastName properties
    author: PropTypes.shape({
        firstName: PropTypes.string, // firstName should be a string
        lastName: PropTypes.string // lastName should be a string
    }).isRequired, // author prop is required

    title: PropTypes.string, // title prop should be a string
    id: PropTypes.string // id prop should be a string
    //Check that these have correct repsonse in the console.
};