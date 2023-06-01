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
const updateUser = ({ _id, data }) => {
  const { name, email, role } = data[0];
  const updatedUser = {
    name,
    email,
    role,
  };
  // console.log(updatedUser, "updated");
  return http.patch(`/user/${_id}`, updatedUser);
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
