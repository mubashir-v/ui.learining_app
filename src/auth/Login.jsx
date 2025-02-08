import  { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const location = useLocation();

  const handleLogin = () => {
    const userData = { name: username }; // Mocked user data
    login(userData);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {location.state?.from && <p>You must log in to access that page.</p>}
    </div>
  );
};

export default Login;
