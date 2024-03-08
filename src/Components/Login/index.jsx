import { useContext } from "react";
import { LoginContext } from "../../App.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const { setCurrentUser, users } = useContext(LoginContext);
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentUser(
      users.find((useritem) => Number(useritem.id) === Number(id))
    );
    navigate(`/home/${id}`);
    localStorage.setItem("loggedInId", id);
  };
  return (
    <div className="profile">
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">Write your id</label>
        <input
          type="text"
          id="first"
          name="first"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />

        <input type="submit" value="Login!" />
      </form>
    </div>
  );
}
