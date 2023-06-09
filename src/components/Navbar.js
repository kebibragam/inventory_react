import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/AuthContext";
const Navbar = () => {
  const { user } = useGlobalContext();
  if (user.role === "cashier") {
    return (
      <>
        <nav className="navbar  navbar-expand-lg bg-body-tertiary nav-custom">
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
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      activeclassname="active"
                      aria-current="page"
                      to="/products"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      activeclassname="active"
                      aria-current="page"
                      to="/customers"
                    >
                      Customers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      activeclassname="active"
                      aria-current="page"
                      to="/orders"
                    >
                      Orders
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link "
                      activeclassname="active"
                      aria-current="page"
                      to="/profile"
                    >
                      Profile
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
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    aria-current="page"
                    to="/customers"
                  >
                    Customers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    activeclassname="active"
                    aria-current="page"
                    to="/orders"
                  >
                    Orders
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    activeclassname="active"
                    aria-current="page"
                    to="/users"
                  >
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    activeclassname="active"
                    aria-current="page"
                    to="/profile"
                  >
                    Profile
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
