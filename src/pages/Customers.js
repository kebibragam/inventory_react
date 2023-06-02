import React, { useState, useEffect } from "react";
import CustomerService from "../services/CustomerService";
import SingleCustomer from "../components/Customers/SingleCustomer";
import { FaPlus } from "react-icons/fa";
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const addCustomer = () => {
    setCustomers((pre) => {
      let old_data = [...pre];
      let newCustomer = {
        _id: "new",
        name: "",
        address: "",
        contact: "",
        isEdit: "true",
      };
      old_data = old_data.map((a) => ({ ...a, isEdit: false }));
      old_data.push(newCustomer);

      return old_data;
    });
  };
  useEffect(() => {
    retrieveCustomer();
  }, []);
  const retrieveCustomer = () => {
    CustomerService.getAllCustomers()
      .then((response) => {
        let data = response.data.map((a) => ({
          ...a,
          isEdit: false,
        }));
        setCustomers(data);
        // console.log(data);
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
                    Customers <b>Details</b>
                  </h2>
                </div>
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-info add-new"
                    onClick={addCustomer}
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
              <tbody>
                {customers &&
                  customers.map((customer) => {
                    return (
                      <>
                        <SingleCustomer
                          {...customer}
                          setCustomers={setCustomers}
                          retrieveCustomer={retrieveCustomer}
                        />
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
