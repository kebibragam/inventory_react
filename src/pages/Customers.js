import React, { useState, useEffect } from "react";
import CustomerService from "../services/CustomerService";
import SingleCustomer from "../components/Customers/SingleCustomer";
import { FaPlus } from "react-icons/fa";
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    retrieveCustomer();
  }, []);
  const retrieveCustomer = () => {
    CustomerService.getAllCustomers()
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addCustomer = () => {};
  const saveCustomer = () => {};
  const editCustomer = () => {};
  const deleteCustomer = () => {};

  return (
    <>
      <div className="container-lg">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    Customers <b>Details</b>
                  </h2>
                </div>
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-info add-new"
                    onClick={() => addCustomer}
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
                  <th>Address</th>
                  <th>Contact</th>

                  <th>Actions</th>
                </tr>
              </thead>
              {customers &&
                customers.map((customer) => {
                  return (
                    <>
                      {/* <div key={_id}>
                <h3>Name: {name}</h3>
                <h4>Email: {email}</h4>
                <h4>Role: {role}</h4>
              </div> */}

                      <tbody>
                        <SingleCustomer
                          {...customer}
                          // icon={icon}
                          saveCustomer={saveCustomer}
                          editCustomer={editCustomer}
                          deleteCustomer={deleteCustomer}
                          isEditing={isEditing}
                          setIsEditing={setIsEditing}
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

export default Customers;
