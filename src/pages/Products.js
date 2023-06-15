import React, { useState, useEffect, useContext } from "react";
import ProductService from "../services/ProductService";
import { FaPlus } from "react-icons/fa";
import SingleProduct from "../components/Products/SingleProduct";
import { AuthContext } from "../context/AuthContext";

const Products = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const addProduct = () => {
    setProducts((pre) => {
      let old_data = [...pre];
      let newProduct = {
        _id: "new",
        name: "",
        quantity: 0,
        purchasePrice: 0,
        profit: 0,
        isEdit: "true",
      };
      old_data = old_data.map((a) => ({ ...a, isEdit: false }));
      old_data.unshift(newProduct);

      return old_data;
    });
  };

  useEffect(() => {
    retrieveProducts();
  }, [currentPage]);

  const retrieveProducts = () => {
    ProductService.getAllProducts()
      .then((response) => {
        let data = response.data.products;
        data = data.map((a) => ({
          ...a,
          isEdit: false,
        }));
        data.sort((a, b) => a.quantity - b.quantity);
        setProducts(data);

        const totalPages = Math.ceil(data.length / 10);
        setTotalPages(totalPages);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentProducts = products
      .filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(startIndex, endIndex);

    return currentProducts.map((product) => (
      <SingleProduct
        key={product._id}
        {...product}
        setProducts={setProducts}
        retrieveProducts={retrieveProducts}
      />
    ));
  };

  if (user.role === "manager") {
    return (
      <>
        <div className="container-lg">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-4">
                    <h2>
                      Product <b>Details</b>
                    </h2>
                  </div>
                  <div className="search-bar col-sm-4 ">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      placeholder="Search by name"
                    />
                  </div>
                  <div className="col-sm-4">
                    <button
                      type="button"
                      className="btn btn-info add-new"
                      onClick={addProduct}
                    >
                      <FaPlus />
                      Add New
                    </button>
                  </div>
                </div>
              </div>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Purchase Price</th>
                    <th>Selling Price</th>
                    <th>Profit</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{renderProducts()}</tbody>
              </table>

              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`page-link ${
                        page === currentPage ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-lg">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    Product <b>Details</b>
                  </h2>
                </div>
                <div className="search-bar col-sm-4 ">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search by name"
                  />
                </div>
              </div>
            </div>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>{renderProducts()}</tbody>
            </table>

            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`page-link ${
                      page === currentPage ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
