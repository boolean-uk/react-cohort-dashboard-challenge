import { useContext } from "react";
import Author from "./Author";
import EditIcon from "./EditIcon";
import DataContext from "../DataContext";
import DeleteIcon from "./DeleteIcon";

function ActionButtons() {
  return (
    <div className='action-buttons'>
      <button className='action-button edit-button'>
        <EditIcon />
      </button>
      <button className='action-button delete-button'>
        <DeleteIcon />
      </button>
    </div>
  )
}

export default function Actions({ author }) {
  const { user } = useContext(DataContext)
  const isAuthor = author.id === user.id

  return (
    <div className='actions'>
      <Author name={author.name} id={author.id} />
      {isAuthor &&
        <ActionButtons />
      }
    </div>
  )
}