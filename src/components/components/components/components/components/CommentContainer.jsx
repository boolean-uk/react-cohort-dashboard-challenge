import AuthorContainer from "./components/AuthorContainer"
import Comment from "./components/Comment"

export default function CommentContainer() {
    return(
        <>
            <div>
                <AuthorContainer />
                <Comment />
            </div>
        </>
    )
}