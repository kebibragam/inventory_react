import React from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/AuthContext";
function Profile() {
  const navigate = useNavigate();
  const { user, removeUser } = useGlobalContext();
  const logout = () => {
    AuthService.logout()
      .then(removeUser())
      .then(navigate("/login"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>Hello, {user.name}</div>
      <div>Role: {user.role}</div>
      <div>Id: {user.userId}</div>
      <button onClick={logout}>log out</button>
    </div>
  );
}

export default Profile;
