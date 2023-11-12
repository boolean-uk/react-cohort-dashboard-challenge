import LoggedInProfileCircle from '../../../Shared/LoggedInProfileCircle'
import AddCommentForm from './AddCommentForm'
import PostComments from './PostComments'
import AddNewComment from './AddNewComment'

function CommentContent({ loggedInUserInitials }) {

    return (
        <section className="comment grid">
            <PostComments />
            <AddNewComment loggedInUserInitials={loggedInUserInitials} />
        </section>
    )
}

export default CommentContent