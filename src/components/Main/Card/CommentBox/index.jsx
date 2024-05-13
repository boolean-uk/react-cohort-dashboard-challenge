import ProfileImage from '../../../ProfileImage'
import Comment from './Comment'

export default function CommentBox() {
    return (
        <>
            <ul>
                <Comment/>
            </ul>

            <div>
                <ProfileImage />
                <form>
                    <input type="text" />
                    <button type="submit">
                        {'>'}
                    </button>
                </form>
            </div>
        </>
    )
}
