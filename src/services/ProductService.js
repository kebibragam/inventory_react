import http from "../api/http-common";

const getAllProducts = () => {
  return http.get("/product");
};
const createProduct = (data) => {
  return http.post("/product", data);
};

const getSingleProduct = (_id) => {
  return http.get(`/product/${_id}`);
};
const updateProduct = ({ _id, data }) => {
  const { name, price, quantity } = data[0];
  data = {
    name,
    price,
    quantity,
  };
  return http.patch(`/product/${_id}`, data);
};
const deleteProduct = (_id) => {
  return http.delete(`/product/${_id}`);
};
const ProductService = {
  getAllProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};

export default ProductService;
