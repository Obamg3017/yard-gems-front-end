import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signIn } from "../../../../Services/auth";

import "./signin.css";

const SignIn = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signIn({ username, password });
      setUser(response);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign In to Yard 💎</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Let's Go
        </button>
      </form>
    </div>
  );
};

export default SignIn;
