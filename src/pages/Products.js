import React, { useState, useEffect } from "react";
import ProductService from "../services/ProductService";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    retrieveProducts();
  }, []);
  const retrieveProducts = () => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h1>products</h1>
      {products &&
        products.map((product) => {
          const { id, name, price, image, quantity } = product;

          return (
            <>
              <div key={id}>
                <h3>{name}</h3>
                <h4>{price}</h4>
                <h4>{quantity}</h4>
                <img src="http:localhost:5000/img/product.jpg" alt={image} />
              </div>
            </>
          );
        })}
    </>
  );
};

export default Products;
