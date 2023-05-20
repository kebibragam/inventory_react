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
          const { id, name, email } = user;

          return (
            <>
              <div key={id}>
                <h3>{name}</h3>
                <h4>{email}</h4>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Users;
