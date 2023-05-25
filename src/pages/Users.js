import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";
import { FaEdit, FaPlus, FaSave } from "react-icons/fa";
import SingleUser from "../components/Users/SingleUser";
const Users = () => {
  const [users, setUsers] = useState([]);
  // const [icon, setIcon] = useState(<FaEdit />);
  const [isEditing, setIsEditing] = useState(false);
  const saveUser = (_id) => {
    setIsEditing(false);
  };
  const editUser = (_id) => {
    // setIcon(<FaSave />);
    setIsEditing(true);
  };
  const addUser = () => {};
  const deleteUser = (_id) => {};
  useEffect(() => {
    retrieveUsers();
  }, []);
  const retrieveUsers = () => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="container-lg">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    Employee <b>Details</b>
                  </h2>
                </div>
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-info add-new"
                    onClick={() => addUser}
                  >
                    <FaPlus />
                    Add New
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {users &&
                users.map((user) => {
                  return (
                    <>
                      {/* <div key={_id}>
                <h3>Name: {name}</h3>
                <h4>Email: {email}</h4>
                <h4>Role: {role}</h4>
              </div> */}

                      <tbody>
                        <SingleUser
                          {...user}
                          // icon={icon}
                          saveUser={saveUser}
                          editUser={editUser}
                          deleteUser={deleteUser}
                          isEditing={isEditing}
                        />
                      </tbody>
                    </>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
