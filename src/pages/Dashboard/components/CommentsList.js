import { useState, useEffect } from "react"
import Author from "../../../components/Author"
import UserBanner from "../../../components/UserBanner"

const demoUser = {
  "id": 4,
  "name": "Patricia Lebsack",
  "username": "Karianne",
  "email": "Julianne.OConner@kory.org",
  "address": {
    "street": "Hoeger Mall",
    "suite": "Apt. 692",
    "city": "South Elvis",
    "zipcode": "53919-4257",
    "geo": {
      "lat": "29.4572",
      "lng": "-164.2990"
    }
  },
  "phone": "493-170-9623 x156",
  "website": "kale.biz",
  "company": {
    "name": "Robel-Corkery",
    "catchPhrase": "Multi-tiered zero tolerance productivity",
    "bs": "transition cutting-edge web services"
  }
}

function LoadMoreButton({ setShowAll }) {
  /** TODO: implement logic of loading all comments */
  const handleLoadMoreComments = (event) => {
    // event.preventDefault()
    setShowAll(true)
  }

  return (
    <button onClick={handleLoadMoreComments} className='load-more-button'>
      See previous comments
    </button>
  )
}

function CommentBody({ author, body }) {
  return (
    <div className='comment-body box-container box-container-colored'>
      <Author author={author} />
      <p>{body}</p>
    </div>
  )
}

function Comment({ comment }) {
  const [author, setAuthor] = useState(null)

  async function getAuthor() {
    /** TODO: find user who wrote this comment */
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    let user = json.find(elem => elem.email === comment.email)
    if (!user) {
      user = demoUser
    }
    setAuthor(user)
  }

  useEffect(() => {
    getAuthor()
  }, [])

  return (
    author &&
      <div className='comment'>
        <UserBanner name={author.name} id={author.id} />
        <CommentBody author={author.name} body={comment.body} />
      </div>
  )
}

export default function CommentsList({ comments, showAllComments }) {
  const [showAll, setShowAll] = useState(showAllComments || comments.length <= 3)
  
  if (!showAll)
    comments = comments.slice(0,3)

  return (
    <div className='comments-list'>
      {!showAll && <LoadMoreButton setShowAll={setShowAll} />}

      {comments.map(comment =>
        <Comment comment={comment} key={comment.id} />
      )}
      
    </div>
  )
}
