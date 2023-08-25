import Author from "../../../components/Author"
import Delimeter from "../../../components/Delimeter"
import UserBanner from "../../../components/UserBanner"
import CommentsList from "./CommentsList"
import NewCommentForm from "./NewCommentForm"

function PostHeader({ author, title }) {
  return (
    <div className='post-header'>
      <UserBanner name={author} />
      <Author author={author} />
      <p className='title'><strong>{title}</strong></p>
    </div>
  )
}

function PostBody({ body }) {
  return (
    <p className='post-body'>{body}</p>
  )
}

export default function Post({ post }) {
  // post = {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  // }

  /** TODO: use post.userId to retieve the name of the user who posted */
  const authorName = 'Sam Fletcher'

  /** TODO:
   * fetch comments for this post, from this url:
   * https://jsonplaceholder.typicode.com/posts/${id}/comments
  */
  const comments = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    }
  ]

  return (
    <div className='post box-container box-container-white'>
      <PostHeader author={authorName} title={post.title} />
      <PostBody body={post.body} />
      <Delimeter />
      {comments &&
        <CommentsList comments={comments} />
      }
      <NewCommentForm />
    </div>
  )
}