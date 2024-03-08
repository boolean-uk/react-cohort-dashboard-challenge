import { useContext } from "react";
import { MyContext } from "../App";


export default function Profile() {
  const context = useContext(MyContext);

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-card">
        <label className="profile-label">
          <strong>First name: </strong>
          <input type="text" name="firstName" value={context.user.firstName} />
        </label>
        <label className="profile-label">
          <strong>Last name: </strong>
          <input type="text" name="lastName" value={context.user.lastName} />
        </label>
        <label className="profile-label">
          <strong>Gender: </strong>
          <input type="text" name="gender" value={context.user.gender} />
        </label>
        <label className="profile-label">
          <strong>Email: </strong>
          <input type="text" name="email" value={context.user.email} />
        </label>
      </div>
    </div>
  );
}
