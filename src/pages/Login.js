import React, { useState, useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { useGlobalContext } from "../context/AuthContext";

const Login = () => {
  const { addUser, user } = useGlobalContext();
  const userRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        const credentials = {
          email,
          password,
        };
        const response = await AuthService.login(credentials);
        // console.log(JSON.stringify(response?.data.user));
        const token = response.data.token;
        const name = response.data.user.name;
        const userId = response.data.user.userId;
        const role = response.data.user.role;
        addUser({ token, userId, name, role });
        navigate("/");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No server Response");
      } else if (!error?.response?.status === 400) {
        setErrMsg("Missing email or password");
      } else if (!error?.response?.status === 401) {
        setErrMsg("unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };
  return (
    <section>
      {user && <Navigate to="/" />}
      {errMsg && <p aria-live="assertive">{errMsg}</p>}
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            ref={userRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button>log in</button>
      </form>
    </section>
  );
};

export default Login;
