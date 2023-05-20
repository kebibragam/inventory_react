import http from "../api/http-common";

const getAllCustomers = () => {
  return http.get("/customers");
};
const createCustomer = (data) => {
  return http.post("/customers", data);
};

const getSingleCustomer = (id) => {
  return http.get(`/customers/${id}`);
};
const updateCustomer = ({ id, data }) => {
  return http.patch(`/customers/${id}`, data);
};
const deleteCustomer = (id) => {
  return http.delete(`/customers/${id}`);
};
const CustomerService = {
  getAllCustomers,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};

export default CustomerService;
