import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/AuthContext";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const { user } = useGlobalContext();
  if (user.role === "cashier") {
    return (
      <>
        <nav className="navbar-dark  navbar-expand-lg bg-body-tertiary">
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
              <span className="navbar-toggler-icon">
                <FaBars />
              </span>
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
                      className="nav-link "
                      activeclassname="active"
                      aria-current="page"
                      to="/products"
                    >
                      <span data-bs-dismiss="offcanvas">Products</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
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
                      to="/profile"
                    >
                      <span data-bs-dismiss="offcanvas">Profile</span>
                    </NavLink>
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
                    to="/"
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
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    activeclassname="active"
                    aria-current="page"
                    to="/profile"
                  >
                    <span data-bs-dismiss="offcanvas">Profile</span>
                  </NavLink>
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
