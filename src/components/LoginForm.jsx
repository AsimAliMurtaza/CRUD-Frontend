import "../components/LoginForm.styles.css";

import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "http://localhost:4000";

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    axios
      .post(`${API_URL}/login`, JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="form-container-login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email:
          <input
            required={true} 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            required={true} 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
