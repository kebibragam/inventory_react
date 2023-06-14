import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/AuthContext";
import AuthService from "../services/AuthService";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, removeUser } = useGlobalContext();
  const logout = () => {
    AuthService.logout()
      .then(removeUser())
      .then(navigate("/"))
      .catch((error) => console.log(error));
  };
  if (user === null) {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-custom">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Aananda Mart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Aananda Mart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-controls="offcanvasNavbar"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/login"
                  >
                    <span data-bs-dismiss="offcanvas">Login</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  if (user.role === "cashier") {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-custom">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Aananda Mart
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Aananda Mart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-controls="offcanvasNavbar"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassname="active"
                      aria-current="page"
                      to="/home"
                    >
                      <span data-bs-dismiss="offcanvas">Home</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassname="active"
                      aria-current="page"
                      to="/products"
                    >
                      <span data-bs-dismiss="offcanvas">Products</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassname="active"
                      aria-current="page"
                      to="/customers"
                    >
                      <span data-bs-dismiss="offcanvas">Customers</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      activeclassname="active"
                      aria-current="page"
                      to="/orders"
                    >
                      <span data-bs-dismiss="offcanvas">Orders</span>
                    </NavLink>
                  </li>

                  <li class="nav-item dropdown p-0 m-0">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FaUser />
                    </a>
                    <ul
                      class="dropdown-menu p-0 m-0"
                      aria-labelledby="navbarDropdown w-25"
                    >
                      <li className="nav-item p-0 m-0">
                        <NavLink
                          className="nav-link "
                          activeclassname="active"
                          aria-current="page"
                          to="/profile"
                        >
                          <span data-bs-dismiss="offcanvas">Profile</span>
                          {/* <FaUser /> */}
                        </NavLink>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          class="dropdown-item p-1 align-center text-center "
                          onClick={logout}
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-custom">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Aananda Mart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Aananda Mart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-controls="offcanvasNavbar"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/dashboard"
                  >
                    <span data-bs-dismiss="offcanvas">Dashboard</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/products"
                  >
                    <span data-bs-dismiss="offcanvas">Products</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/customers"
                  >
                    <span data-bs-dismiss="offcanvas">Customers</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    activeclassname="active"
                    aria-current="page"
                    to="/orders"
                  >
                    <span data-bs-dismiss="offcanvas">Orders</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    activeclassname="active"
                    aria-current="page"
                    to="/users"
                  >
                    <span data-bs-dismiss="offcanvas">Users</span>
                  </NavLink>
                </li>

                <li class="nav-item dropdown p-0 m-0">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUser />
                  </a>
                  <ul
                    class="dropdown-menu p-0 m-0"
                    aria-labelledby="navbarDropdown w-25"
                  >
                    <li className="nav-item p-0 m-0">
                      <NavLink
                        className="nav-link "
                        activeclassname="active"
                        aria-current="page"
                        to="/profile"
                      >
                        <span data-bs-dismiss="offcanvas">Profile</span>
                        {/* <FaUser /> */}
                      </NavLink>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        class="dropdown-item p-1 align-center text-center "
                        onClick={logout}
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
