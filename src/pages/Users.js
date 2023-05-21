import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    retrieveUsers();
  }, []);
  const retrieveUsers = () => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response.data.users);
        console.log(response.data.users);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h1>Users</h1>
      {users &&
        users.map((user) => {
          const { _id, name, email, role } = user;
          console.log(user);
          return (
            <>
              <div key={_id}>
                <h3>Name: {name}</h3>
                <h4>Email: {email}</h4>
                <h4>Role: {role}</h4>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Users;
