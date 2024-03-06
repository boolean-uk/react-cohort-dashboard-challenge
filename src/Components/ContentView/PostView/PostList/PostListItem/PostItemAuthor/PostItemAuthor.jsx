import AccountIcon from '@/Components/AccountIcon/AccountIcon'
import PropTypes from 'prop-types'

const PostItemAuthor = ({user, post}) => {
    return (
        <div className="post-user-information-container">
            <AccountIcon user={user} />
            <div className='post-user-information'>
            <span>
                {user.firstName} {user.lastName}
            </span> <br/>
            <span className='post-title'>
                {post.title}
            </span>
            </div>
        </div>
    )
}

PostItemAuthor.propTypes = {
    user: PropTypes.object,
    post: PropTypes.object,
}

export default PostItemAuthor