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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2 style={{ color: "black", padding: "2em" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            style={{ backgroundColor: "#f0f5f9", color: "black" }}
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
