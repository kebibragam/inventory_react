import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import http from "../api/http-common";
import { useGlobalContext } from "../context/AuthContext";
// import auth from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const { addUser, user } = useGlobalContext();
  useEffect(() => {
    const fetchUser = async () => {
      return await http
        .get("/auth/isAuthenticated")
        .then((res) => {
          // console.log(res);
          if (res.data.msg === true) {
            // console.log(res.data);
            return addUser(res.data.user);
          } else {
            return false;
          }
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
    };
    fetchUser();
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
