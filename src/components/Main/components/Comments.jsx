import LoggedInProfileCircle from '../../Shared/LoggedInProfileCircle'
import AddCommentForm from './AddCommentForm'

function Comments({ loggedInUserInitials }) {

    return (
        <section className="comment grid">
            <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            <AddCommentForm />
        </section>
    )
}

export default Comments