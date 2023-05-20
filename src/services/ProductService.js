import http from "../api/http-common";

const getAllProducts = () => {
  return http.get("/product");
};
const createProduct = (data) => {
  return http.post("/product", data);
};

const getSingleProduct = (id) => {
  return http.get(`/product/${id}`);
};
const updateProduct = ({ id, data }) => {
  return http.patch(`/product/${id}`, data);
};
const deleteProduct = (id) => {
  return http.delete(`/product/${id}`);
};
const ProductService = {
  getAllProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};

export default ProductService;
