import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../components/RegisterForm.styles.css";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = "http://localhost:4000";
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      password,
      email,
    };
    console.log(user);

    axios
      .post(`${API_URL}/createUser`, JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input
            id="email"
            required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="button-icon">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
