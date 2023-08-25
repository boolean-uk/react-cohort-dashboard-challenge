import Author from "../../../components/Author"
import Delimeter from "../../../components/Delimeter"
import UserBanner from "../../../components/UserBanner"
import CommentsList from "./CommentsList"
import NewCommentForm from "./NewCommentForm"

function PostHeader({ author, title }) {
  return (
    <div className='post-header'>
      <UserBanner />
      <Author author={author} />
      <p className='title'><strong>{title}</strong></p>
    </div>
  )
}

function PostContent({ content }) {
  return (
    <p className='post-content'>{content}</p>
  )
}

export default function Post({ post }) {

  return (
    <div className='post box-container box-container-white'>
      <PostHeader author={post.author} title={post.title} />
      <PostContent content={post.content} />
      <Delimeter />
      {post.comments &&
        <CommentsList comments={post.comments} />
      }
      <NewCommentForm />
    </div>
  )
}