import React, { useState, useEffect } from "react";
import OrderService from "../services/OrderService";
import { FaTimes } from "react-icons/fa";
import SingleOrder from "../components/SingleOrder";

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [detailId, setDetailId] = useState(null);
  const [orderDetails, setOrdersDetails] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    retrieveOrders();
  }, []);

  useEffect(() => {
    const retrieveSingleOrder = () => {
      OrderService.getSingleOrder(detailId)
        .then((res) => {
          console.log(res.data);
          setOrdersDetails(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (detailId) {
      retrieveSingleOrder();
    }
  }, [detailId]);

  useEffect(() => {
    setTotalPages(Math.ceil(orders.length / itemsPerPage));
  }, [orders, itemsPerPage]);

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
      .catch((error) => {
        console.log(error);
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {/* Modal code here */}

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
                {currentItems
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
                  .map((order, index) => (
                    <SingleOrder
                      key={order.id}
                      {...order}
                      detailId={detailId}
                      setDetailId={setDetailId}
                      setOrders={setOrders}
                      retrieveOrders={retrieveOrders}
                      setIsModalOpen={setIsModalOpen}
                    />
                  ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`page-link ${
                      page === currentPage ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
