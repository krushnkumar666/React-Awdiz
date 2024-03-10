import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      userData.name &&
      userData.email &&
      userData.password &&
      userData.confirmPassword
    ) {
      try {
        toast.success('Registration successful!', { position: "top-right" });
        setUserData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate('/login');
      } catch (error) {
        console.error("Registration failed:", error.message);
      }
    } else {
      toast.error('Please fill all fields', { position: "top-right" });
    }
  }

  return (
    <>
      <h1>Register</h1>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <label>Name : </label>
          <br />
          <input type="text" name="name" onChange={handleChange} />
          <br />
          <label>Email : </label>
          <br />
          <input type="email" name="email" onChange={handleChange} />
          <br />
          <label>Password : </label>
          <br />
          <input type="password" name="password" onChange={handleChange} />
          <br />
          <label>Confirm Password : </label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    </>
  );
};

export default Register;
