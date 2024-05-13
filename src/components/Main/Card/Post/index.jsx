import CommentBox from '../CommentBox'
import PostTitle from './PostTitle'

export default function Post({ author, title, body }) {
    return (
        <article>
            <PostTitle author={'Tim Drake'} title={'The 2nd 2nd Robin'} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis ut similique odit distinctio eius neque, voluptate
                doloribus eum animi minus voluptatibus rerum enim natus error
                nisi quia porro commodi repudiandae!
            </p>
            <CommentBox />
        </article>
    )
}
