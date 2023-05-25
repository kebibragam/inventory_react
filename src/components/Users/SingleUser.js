import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const SingleUser = ({
  _id,
  name,
  email,
  role,
  //   icon,
  saveUser,
  editUser,
  deleteUser,
  isEditing,
}) => {
  //   console.log(user);
  //   const { _id, name, email, role } = user;
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <button
          className="edit button-icon"
          title="Edit"
          data-toggle="tooltip"
          onClick={() => editUser(_id)}
        >
          {/* {icon} */}
          <FaEdit />
        </button>

        <button
          className="delete button-icon"
          title="Delete"
          data-toggle="tooltip"
          onClick={() => deleteUser(_id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default SingleUser;
