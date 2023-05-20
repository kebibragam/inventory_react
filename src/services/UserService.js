import http from "../api/http-common";

const getAllUsers = () => {
  return http.get("/user");
};
const createUser = (data) => {
  return http.post("/auth/register", data);
};

const getSingleUser = (id) => {
  return http.get(`/user/${id}`);
};
const updateUser = ({ id, data }) => {
  return http.patch(`/user/${id}`, data);
};
const deleteUser = (id) => {
  return http.delete(`/user/${id}`);
};
const UserService = {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
};

export default UserService;
