import React, { useState, useEffect } from "react";
import OrderService from "../services/OrderService";

const Orders = () => {
  const [Order, setOrder] = useState([]);
  useEffect(() => {
    retrieveOrder();
  }, []);
  const retrieveOrder = () => {
    OrderService.getAllOrders()
      .then((response) => {
        setOrder(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h1>OrderS</h1>
      {Order &&
        Order.map((product) => {
          const { id, orderItems, total, customerID, createdAt } = product;

          return (
            <>
              <div key={id}>
                <div>
                  {orderItems.map((item) => {
                    const { name, price, quantity, productID } = item;
                    return (
                      <article key={productID}>
                        <h3>{name}</h3>
                        <h3>{price}</h3>
                        <h3>{quantity}</h3>
                      </article>
                    );
                  })}
                </div>
                <h4>{total}</h4>
                <h4>{customerID}</h4>
                <h4>{createdAt}</h4>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Orders;
