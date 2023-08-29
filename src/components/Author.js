import { Link } from "react-router-dom";

export default function Author({ name, id }) {
  return (
    <Link to={`/profile/${id}`}>
      <h4 className='author'>{name}</h4>
    </Link>
  )
}