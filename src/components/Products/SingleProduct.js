import React, { useRef } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import ProductService from "../../services/ProductService";

const SingleProduct = ({
  _id,
  name,
  price,
  quantity,
  isEdit,
  setProducts,
  retrieveProducts,
}) => {
  const edit_focus = useRef();

  const editProduct = (_id) => {
    if (_id == null || _id == "") {
      return;
    }

    setTimeout(() => {
      edit_focus.current.focus();
    }, 500);

    setProducts((pre) => {
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
  const saveProduct = (_id) => {
    if (_id == null || _id == "") {
      return;
    }
    if (_id == "new") {
      setProducts((pre) => {
        let old_data = [...pre];
        console.log("old data", old_data);
        old_data = old_data.map((a) => ({ ...a }));

        const data = old_data.filter(
          (product) =>
            product._id === _id && delete product._id && delete product.isEdit
        );
        // console.log("updated data", data[0]);
        ProductService.createProduct(data[0]).then((response) => {
          let tempProduct = response.data.product;
          tempProduct = { ...tempProduct, isEdit: false };
          old_data.push(tempProduct);
        });
        old_data = old_data.filter((a) => a._id !== undefined);
        console.log(old_data, "new");

        return old_data;
      });
      setTimeout(() => retrieveProducts(), 500);
    } else {
      setProducts((pre) => {
        let old_data = [...pre];

        old_data = old_data.map((a) => ({ ...a }));
        let index = old_data.map((a) => a._id).findIndex((a) => a == _id);

        if (index == -1) {
          return;
        }

        const data = old_data.filter(
          (product) =>
            product._id === _id && delete product.isEdit && delete product._id
        );
        // console.log("updated data", data, _id);
        ProductService.updateProduct({ _id, data });
        old_data[index].isEdit = false;

        return old_data;
      });
    }
  };

  function handleEditName(_id, e) {
    let current_val = e.target.value;
    console.log("data=>", current_val);

    setProducts((pre) => {
      let old_data = [...pre];

      let index = old_data.map((a) => a._id).findIndex((a) => a == _id);

      if (index == -1) {
        return;
      }

      old_data[index].name = current_val;

      return old_data;
    });
  }
  function handleEditPrice(_id, e) {
    let current_val = e.target.value;
    console.log("data=>", current_val);

    setProducts((pre) => {
      let old_data = [...pre];

      let index = old_data.map((a) => a._id).findIndex((a) => a == _id);

      if (index == -1) {
        return;
      }

      old_data[index].price = current_val;

      return old_data;
    });
  }
  function handleEditQuantity(_id, e) {
    let current_val = e.target.value;
    console.log("data=>", current_val);

    setProducts((pre) => {
      let old_data = [...pre];

      let index = old_data.map((a) => a._id).findIndex((a) => a == _id);

      if (index == -1) {
        return;
      }

      old_data[index].quantity = current_val;

      return old_data;
    });
  }

  // function handleBlur() {
  //   setProducts((pre) => {
  //     let old_data = [...pre];
  //     old_data = old_data.map((a) => ({
  //       ...a,
  //       isEdit: false,
  //     }));

  //     return old_data;
  //   });
  // }

  function deleteProduct(_id) {
    if (_id && _id !== "new") {
      ProductService.deleteProduct(_id);
    }

    setProducts((pre) => {
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
            type="number"
            value={price}
            onChange={(e) => handleEditPrice(_id, e)}
            // onBlur={handleBlur}
          />
        ) : (
          <>{price}</>
        )}
      </td>
      <td>
        {isEdit ? (
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleEditQuantity(_id, e)}
            // onBlur={handleBlur}
          />
        ) : (
          <>{quantity}</>
        )}
      </td>
      {/* <td>
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
      </td> */}

      <td>
        <button
          className={isEdit ? ` button-icon add` : `button-icon edit`}
          title={isEdit ? "Add" : "Edit"}
          data-toggle="tooltip"
          onClick={() => (isEdit ? saveProduct(_id) : editProduct(_id))}
        >
          {isEdit ? <FaSave /> : <FaEdit />}
        </button>

        <button
          className="delete button-icon"
          title="Delete"
          data-toggle="tooltip"
          onClick={() => deleteProduct(_id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default SingleProduct;
