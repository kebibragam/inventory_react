import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const SingleCustomer = ({
  _id,
  name,
  address,
  contact,

  //   icon,
  saveCustomer,
  editCustomer,
  deleteCustomer,
  isEditing,
}) => {
  //   console.log(user);
  //   const { _id, name, email, role } = user;
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{address}</td>
      <td>{contact}</td>

      <td>
        <button
          className="edit button-icon"
          title="Edit"
          data-toggle="tooltip"
          onClick={() => editCustomer(_id)}
        >
          {/* {icon} */}
          <FaEdit />
        </button>

        <button
          className="delete button-icon"
          title="Delete"
          data-toggle="tooltip"
          onClick={() => deleteCustomer(_id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default SingleCustomer;
