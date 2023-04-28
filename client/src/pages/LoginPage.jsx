import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await axios.post("/login", { email, password });
      alert("login succefull");
    } catch (error) {
      alert("Login fail");
    }
  }

  return (
    <div className="mt-4  grow flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="adc123@gmail.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500 ">
            Don't have account yet?{" "}
            <Link className="underline text-black" to={"/register"}>
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
