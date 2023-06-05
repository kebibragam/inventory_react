import React from "react";
import { CgMoreO } from "react-icons/cg";

const SingleOrder = ({
  _id,
  total,
  createdAt,
  customerName,
  setDetailId,
  setIsModalOpen,
}) => {
  //converting date into local date
  const date = new Date(createdAt);
  const options = { timeZone: "Asia/Kathmandu" }; // replace with user's timezone
  const localDate = date.toLocaleString("en-US", options);

  const changeDetailId = (_id) => {
    console.log(_id);
    setDetailId(_id);
  };
  return (
    <>
      <tr key={_id}>
        <td>{customerName}</td>
        <td>{total}</td>
        <td>{localDate}</td>
        <td>
          <button
            className="show-more button-icon"
            title="Show Details"
            data-toggle="tooltip"
            onClick={() => {
              setIsModalOpen(true);
              changeDetailId(_id);
            }}
          >
            <CgMoreO />
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleOrder;
