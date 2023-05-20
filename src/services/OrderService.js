import http from "../api/http-common";

const getAllOrders = () => {
  return http.get("/orders");
};
const createOrder = (data) => {
  return http.post("/orders", data);
};

const getSingleOrder = (id) => {
  return http.get(`/orders/${id}`);
};

const OrderService = {
  getAllOrders,
  createOrder,
  getSingleOrder,
};

export default OrderService;
