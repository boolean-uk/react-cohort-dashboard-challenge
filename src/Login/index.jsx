import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userId", userId);

    navigate("/feed");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label>
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default Login;
