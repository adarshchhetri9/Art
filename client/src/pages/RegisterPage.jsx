import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(e) {
    e.preventDefault();
    try {
      axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration succesfull. Now you can log in");
    } catch (error) {
      alert('Registration failed. Please try again later')
    }
  }
  return (
    <div className="mt-4  grow flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form onSubmit={registerUser} className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="adc123@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500 ">
            Already a menber?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
