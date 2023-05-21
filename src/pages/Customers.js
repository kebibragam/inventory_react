import React, { useState, useEffect } from "react";
import CustomerService from "../services/CustomerService";
const Customers = () => {
  const [Customer, setCustomer] = useState([]);
  useEffect(() => {
    retrieveCustomer();
  }, []);
  const retrieveCustomer = () => {
    CustomerService.getAllCustomers()
      .then((response) => {
        setCustomer(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h1>Customer</h1>
      {Customer &&
        Customer.map((customer) => {
          const { id, name, address, contact } = customer;

          return (
            <>
              <div key={id}>
                <h3>Name: {name}</h3>
                <h4>Address:{address}</h4>
                <h4>Contact: {contact}</h4>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Customers;
