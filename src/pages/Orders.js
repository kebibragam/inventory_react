import React, { useState, useEffect } from "react";
import OrderService from "../services/OrderService";
import { FaTimes } from "react-icons/fa";
import SingleOrder from "../components/SingleOrder";
// import SingleOrder from "../components/Orders/SingleOrder";
const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [detailId, setDetailId] = useState(null);
  const [orderDetails, setOrdersDetails] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchDate, setSearchDate] = useState("");
  useEffect(() => {
    retrieveOrders();
  }, []);
  useEffect(() => {
    const retriveSingleOrder = () => {
      OrderService.getSingleOrder(detailId).then((res) => {
        console.log(res.data);
        setOrdersDetails(res.data);
      });
    };
    detailId && retriveSingleOrder();
  }, [detailId]);

  const retrieveOrders = () => {
    OrderService.getAllOrders()
      .then((response) => {
        console.log("orders=>", response.data);
        let data = response.data;
        data = data.map((a) => ({
          ...a,
          isEdit: false,
        }));

        setOrders(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const date = new Date(orderDetails.createdAt);
  const options = { timeZone: "Asia/Kathmandu" }; // replace with user's timezone
  const localDate = date.toLocaleString("en-US", options);
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchDateChange = (event) => {
    // setSearchDate(event.target.value);
    const selectedDate = event.target.value;

    // Get the current date
    const currentDate = getCurrentDate();

    // Compare the selected date with the current date
    if (selectedDate <= currentDate) {
      setSearchDate(selectedDate);
    }
  };
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return (
    <>
      <div
        className={` ${
          isModalOpen ? "  modal-overlay show-modal " : "modal-overlay "
        }  `}
      >
        <div className="modal-container">
          <div className="container-sm-2">
            <div className="table-responsive">
              <div className="table-wrapper">
                <div className="table-title"></div>
                <h4>order info</h4>
                {/* <h4>{detailId}</h4> */}
                <h5>Customer Name: {orderDetails.customerName}</h5>
                <h5>Created at: {localDate}</h5>
                <table className="table table-bordered modal-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails.orderItems &&
                      orderDetails.orderItems.map((item) => {
                        console.log(item);
                        const { name, price, quantity } = item;
                        return (
                          <>
                            <tr>
                              <td>{name}</td>
                              <td>{quantity}</td>
                              <td>{price}</td>
                            </tr>
                          </>
                        );
                      })}
                    <tr>
                      <td colSpan={2}>Total Amount</td>
                      <td>{orderDetails.total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
      <div className="container-lg">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    Order <b>Details</b>
                  </h2>
                </div>
                <div className="search-bar col-sm-4 ">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search by name"
                    // class="w-25 "
                  />
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={searchDate}
                    onChange={handleSearchDateChange}
                    max={getCurrentDate()}
                  />
                </div>
                {/* <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-info add-new"
                    // onClick={() => setAddingUser(true)}
                    // onClick={addOrder}
                  >
                    <FaPlus />
                    Add New
                  </button> */}
                {/* </div> */}
              </div>
            </div>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Total</th>
                  <th>Created at</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders
                    .filter((product) =>
                      product.customerName
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    )
                    .filter((product) =>
                      product.createdAt
                        .toLowerCase()
                        .includes(searchDate.toLowerCase())
                    )
                    .map((order, index) => {
                      if (index < 10) {
                        return (
                          <>
                            <SingleOrder
                              {...order}
                              detailId={detailId}
                              setDetailId={setDetailId}
                              setOrders={setOrders}
                              retrieveOrders={retrieveOrders}
                              setIsModalOpen={setIsModalOpen}
                            />
                          </>
                        );
                      }
                      return null;
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
