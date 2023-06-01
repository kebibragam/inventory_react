import React, { useEffect, useRef } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import UserService from "../../services/UserService";

const SingleUser = ({ _id, name, email, role, isEdit, setUsers }) => {
  const edit_focus = useRef();

  const editUser = (_id) => {
    if (_id == null || _id == "") {
      return;
    }

    setTimeout(() => {
      edit_focus.current.focus();
    }, 500);

    setUsers((pre) => {
      let old_data = [...pre];

      old_data = old_data.map((a) => ({ ...a, isEdit: false }));
      let index = old_data.map((a) => a._id).findIndex((a) => a == _id);

      if (index == -1) {
        return;
      }

      old_data[index].isEdit = true;

      return old_data;
    });
  };
  const saveUser = (_id) => {
    if (_id == null || _id == "") {
      return;
    }

    setUsers((pre) => {
      let old_data = [...pre];

      old_data = old_data.map((a) => ({ ...a }));
      let index = old_data.map((a) => a._id).findIndex((a) => a == _id);

      if (index == -1) {
        return;
      }

      const data = old_data.filter(
        (user) => user._id === _id && delete user.isEdit && delete user._id
      );
      console.log("updated data", data);
      UserService.updateUser({ _id, data });
      old_data[index].isEdit = false;
      return old_data;
    });
  };
  function handleEditName(_id, e) {
    let current_val = e.target.value;
    console.log("data=>", current_val);

    setUsers((pre) => {
      let old_data = [...pre];

      let index = old_data.map((a) => a._id).findIndex((a) => a == _id);

      if (index == -1) {
        return;
      }

      old_data[index].name = current_val;

      return old_data;
    });
  }
  function handleEditEmail(_id, e) {
    let current_val = e.target.value;
    console.log("data=>", current_val);

    setUsers((pre) => {
      let old_data = [...pre];

      let index = old_data.map((a) => a._id).findIndex((a) => a == _id);

      if (index == -1) {
        return;
      }

      old_data[index].email = current_val;

      return old_data;
    });
  }
  function handleEditRole(_id, e) {
    let current_val = e.target.value;
    console.log("data=>", current_val);

    setUsers((pre) => {
      let old_data = [...pre];

      let index = old_data.map((a) => a._id).findIndex((a) => a == _id);

      if (index == -1) {
        return;
      }

      old_data[index].role = current_val;

      return old_data;
    });
  }

  // function handleBlur() {
  //   setUsers((pre) => {
  //     let old_data = [...pre];
  //     old_data = old_data.map((a) => ({
  //       ...a,
  //       isEdit: false,
  //     }));

  //     return old_data;
  //   });
  // }

  function deleteUser(_id) {
    UserService.deleteUser(_id);

    setUsers((pre) => {
      let old_data = [...pre];
      console.log("old", old_data);
      let new_data = old_data.filter((a) => a._id !== _id);

      console.log("new", new_data);
      return new_data;
    });
  }

  return (
    <tr key={_id}>
      <td>
        {isEdit ? (
          <input
            ref={edit_focus}
            value={name}
            onChange={(e) => handleEditName(_id, e)}
            // onBlur={handleBlur}
          />
        ) : (
          <>{name}</>
        )}
      </td>
      <td>
        {isEdit ? (
          <input
            value={email}
            onChange={(e) => handleEditEmail(_id, e)}
            // onBlur={handleBlur}
          />
        ) : (
          <>{email}</>
        )}
      </td>
      <td>
        {isEdit ? (
          <select
            name="role"
            id="role"
            value={role}
            onChange={(e) => handleEditRole(_id, e)}
          >
            <option value="cashier">cashier</option>
            <option value="manager">manager</option>
          </select>
        ) : (
          <>{role}</>
        )}
      </td>

      <td>
        <button
          className={isEdit ? ` button-icon add` : `button-icon edit`}
          title="Edit"
          data-toggle="tooltip"
          onClick={() => (isEdit ? saveUser(_id) : editUser(_id))}
        >
          {isEdit ? <FaSave /> : <FaEdit />}
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
