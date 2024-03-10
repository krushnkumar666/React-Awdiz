import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  function resetForm() {
    setUserData({ email: "", password: "" });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (userData.email && userData.password) {
      toast.success('Login successful!', { position: "top-right" });
      resetForm();
    } else {
      toast.error('All fields are required', { position: "top-right" });
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email: </label>
          <br />
          <input type="email" name="email" onChange={handleChange} value={userData.email} />
          <br />
          <label htmlFor="password">Password: </label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={userData.password}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
