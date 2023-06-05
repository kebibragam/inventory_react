import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import { FaPlus } from "react-icons/fa";
import SingleProduct from "../components/Products/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const addProduct = () => {
    // console.log("add");
    setProducts((pre) => {
      let old_data = [...pre];
      let newProduct = {
        _id: "new",
        name: "",
        email: "",
        role: "cashier",
        password: "password",
        isEdit: "true",
      };
      old_data = old_data.map((a) => ({ ...a, isEdit: false }));
      old_data.push(newProduct);

      return old_data;
    });
  };
  useEffect(() => {
    retrieveProducts();
  }, []);
  const retrieveProducts = () => {
    ProductService.getAllProducts()
      .then((response) => {
        let data = response.data.products;
        data = data.map((a) => ({
          ...a,
          isEdit: false,
        }));

        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product) => {
                    return (
                      <>
                        <SingleProduct
                          {...product}
                          setProducts={setProducts}
                          retrieveProducts={retrieveProducts}
                        />
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
