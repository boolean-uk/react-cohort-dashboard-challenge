import AccountIcon from '@/Components/AccountIcon/AccountIcon'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import "./PostItemHeader.css"

const PostItemHeader = ({user, post}) => {
    const navigate = useNavigate()

    return (
        <div className="post-user-information-container">
            <AccountIcon user={user} />
            <div className='post-user-information'>
            <span onClick={() => navigate(`/profile/${user.id}`)}>
                {user.firstName} {user.lastName}
            </span> <br/>
            <a 
                className='post-title'
                onClick={() => navigate(`/post/${post.id}`)}
            >
                    {post.title}
            </a>
            </div>
        </div>
    )
}

PostItemHeader.propTypes = {
    user: PropTypes.object,
    post: PropTypes.object,
}

export default PostItemHeader