import React from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/AuthContext";
function Profile() {
  const navigate = useNavigate();
  const { user, removeUser } = useGlobalContext();
  const logout = () => {
    AuthService.logout()
      .then(removeUser())
      .then(navigate("/login"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* <div>Hello, {user.name}</div>
      <div>Role: {user.role}</div>
      <div>Id: {user.userId}</div> */}

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: 80 }}
                    />
                    <h5>{user.name}</h5>
                    <p>{user.role}</p>
                    <i className="far fa-edit mb-5" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Personal Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{user.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{user.phone}</p>
                        </div>
                      </div>
                      <h6>Change Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Change Password</h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Change Name</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3" />
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3" />
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg" />
                        </a>
                      </div>
                    </div>
                    <button onClick={logout} className="btn btn-warning">
                      log out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
