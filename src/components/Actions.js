import { useContext } from "react";
import Author from "./Author";
import EditIcon from "./EditIcon";
import DataContext from "../DataContext";
import DeleteIcon from "./DeleteIcon";

function ActionButtons({ id, handleDelete }) {
  return (
    <div className='action-buttons'>
      <button className='action-button edit-button'>
        <EditIcon />
      </button>
      <button
        className='action-button delete-button'
        onClick={() => handleDelete(id)}
      >
        <DeleteIcon />
      </button>
    </div>
  )
}

export default function Actions({ id, author, handleDelete }) {
  const { user } = useContext(DataContext)
  const isAuthor = author.id === user.id

  return (
    <div className='actions'>
      <Author name={author.name} id={author.id} />
      {isAuthor &&
        <ActionButtons id={id} handleDelete={handleDelete} />
      }
    </div>
  )
}