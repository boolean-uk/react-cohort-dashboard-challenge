/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function InitialIcon({ user }) {
  if (!user) {
    return <p>...</p>;
  }

  return (
    <Link to={`/profile/${user.id}`}>
      <p
        className='w-9 h-9 text-sm grid place-items-center rounded-full' style={{ backgroundColor: `${user.favouriteColour}` }}>{`${user.firstName[0]}${user.lastName[0]}`}</p>
    </Link>
  );
}


