import UserBanner from "../../../components/UserBanner"
import CommentsList from "./CommentsList"
import NewCommentForm from "./NewCommentForm"

function PostHeader({ author, title }) {
  return (
    <div className='post-header'>
      <UserBanner />
      <h4 className='author'>{author}</h4>
      <p className='title'><strong>{title}</strong></p>
    </div>
  )
}

function PostContent({ content }) {
  return (
    <p className='post-content'>{content}</p>
  )
}

function Delimeter() {
  return <hr className='delimeter' />
}

export default function Post({ post }) {

  return (
    <div className='post white-box'>
      <PostHeader author={post.author} title={post.title} />
      <PostContent content={post.content} />
      <Delimeter/>
      {post.comments &&
        <CommentsList comments={post.comments} />
      }
      <NewCommentForm />
    </div>
  )
}