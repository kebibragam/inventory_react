import React, { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState(data);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [customerId, setCustomerId] = useState("");

  const handleProductSelect = (productId) => {
    const selectedProductIndex = selectedProducts.findIndex(
      (p) => p.id === productId
    );
    const productIndex = products.findIndex((p) => p.id === productId);

    if (selectedProductIndex !== -1) {
      const updatedSelectedProducts = [...selectedProducts];
      const selectedProduct = {
        ...updatedSelectedProducts[selectedProductIndex],
      };
      selectedProduct.quantity += 1;
      updatedSelectedProducts[selectedProductIndex] = selectedProduct;

      const updatedProducts = [...products];
      const product = { ...updatedProducts[productIndex] };
      product.quantity -= 1;
      updatedProducts[productIndex] = product;

      setSelectedProducts(updatedSelectedProducts);
      setProducts(updatedProducts);
    } else if (productIndex !== -1 && products[productIndex].quantity > 0) {
      const updatedSelectedProducts = [
        ...selectedProducts,
        { ...products[productIndex], quantity: 1 },
      ];
      const updatedProducts = [...products];
      const product = { ...updatedProducts[productIndex] };
      product.quantity -= 1;
      updatedProducts[productIndex] = product;

      setSelectedProducts(updatedSelectedProducts);
      setProducts(updatedProducts);
    }
  };
  const handleRemoveProduct = (productId) => {
    const updatedSelectedProducts = selectedProducts.map((p) =>
      p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
    );
    const updatedFilteredProducts = products.map((p) =>
      p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
    );

    setSelectedProducts(updatedSelectedProducts.filter((p) => p.quantity > 0));
    setProducts(updatedFilteredProducts);
  };

  const calculateTotal = () => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCustomerIdChange = (event) => {
    setCustomerId(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Order Taking Page</h1>

      <div className="row">
        <div className="col-md-6">
          <h2>Product List</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a product"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <ul className="list-group">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  {product.name} - ${product.price}
                </div>
                <div>
                  <span className="badge bg-primary rounded-pill">
                    {product.quantity || 0}
                  </span>
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => handleProductSelect(product.id)}
                    disabled={product.quantity <= 0}
                  >
                    Add
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          <h2>Selected Products</h2>
          <ul className="list-group">
            {selectedProducts.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  {product.name} - ${product.price} x {product.quantity}
                </div>
                <div>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="mt-4">Total Payable Amount: ${calculateTotal()}</h2>

          <div className="mt-4">
            <label htmlFor="customerId" className="form-label">
              Customer ID:
            </label>
            <input
              type="text"
              id="customerId"
              className="form-control"
              value={customerId}
              onChange={handleCustomerIdChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
