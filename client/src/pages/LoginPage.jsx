import axios from "axios";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../components/Usercontext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const {data} = await axios.post("/login", { email, password });
      setUser(data);
      alert("login succefull");
      setRedirect(true);
    } catch (error) {
      alert("Login fail");
      console.log(error);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4  grow flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto">
          <input
            type="email"
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
