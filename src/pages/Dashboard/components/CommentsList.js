import Author from "../../../components/Author"
import UserBanner from "../../../components/UserBanner"

// function LoadMoreButton() {
//   const handleLoadMoreComments = (event) => {
//     // event.preventDefault()
//   }
//   return (
//     <button onClick={handleLoadMoreComments} className='load-more-button'>
//       See previous comments
//     </button>
//   )
// }

function CommentBody({ author, body }) {
  return (
    <div className='comment-body box-container box-container-colored'>
      <Author author={author} />
      <p>{body}</p>
    </div>
  )
}

function Comment({ comment }) {
  // comment = {
  //   "postId": 1,
  //   "id": 1,
  //   "name": "id labore ex et quam laborum",
  //   "email": "Eliseo@gardner.biz",
  //   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  // }

  /** TODO:
   * find user who wrote this comment:
   * fetch all users from url:
   * https://jsonplaceholder.typicode.com/users
   * find user whose email is comment.email
   * 
   */

  const author = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  return (
    <div className='comment'>
      <UserBanner name={author.name} />
      <CommentBody author={author.name} body={comment.body} />
    </div>
  )
}

export default function CommentsList({ comments }) {
  
  return (
    <div className='comments-list'>
      {/* {comments.length > 3 && <LoadMoreButton />} */}

      {comments.map(comment =>
        <Comment comment={comment} />
      )}
      
    </div>
  )
}