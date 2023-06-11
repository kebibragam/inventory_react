import React, { useContext, useEffect, useState } from "react";

import StatsService from "../services/StatsService";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import { AuthContext } from "../context/AuthContext";

const data = [
  { name: "Category 1", value: 10 },
  { name: "Category 2", value: 20 },
  { name: "Category 3", value: 30 },
  { name: "Category 4", value: 15 },
  { name: "Category 5", value: 25 },
];
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user, "user");
  const [mostSoldProduct, setMostsoldProduct] = useState([]);
  const [lowStockProduct, setLowStockProduct] = useState([]);

  const getLowStock = () =>
    StatsService.lowstock().then((res) => {
      // console.log(res.data);
      const products = res.data.slice(0, 5);
      console.log(products, "products low");
      setLowStockProduct(products);
    });
  const getMostSold = () => {
    StatsService.mostSold().then((res) => {
      // console.log(res.data);
      const products = res.data.slice(0, 5);
      console.log(products, "products sold");
      setMostsoldProduct(products);
    });
  };
  useEffect(() => {
    user && getLowStock();
    user && getMostSold();
  }, [user]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="container-lg pt-5 ">
            <div className="col-sm-14  pb-5 text-center">
              <h4>
                <b>Most Sold Products</b>
              </h4>
            </div>

            <div className="chart-container">
              <ResponsiveContainer>
                <BarChart data={mostSoldProduct}>
                  {/* <CartesianGrid strokeDasharray="2 2"  /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend
                    formatter={() => (
                      <span className="text-color-class">Quantity Sold</span>
                    )}
                  />
                  <Bar dataKey="soldQuantity" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-lg">
            <div className="container-lg">
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-14 text-center">
                        <h2>
                          <b>Low Stock Products</b>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lowStockProduct &&
                        lowStockProduct.map((product) => {
                          const { _id, name, price, quantity } = product;
                          return (
                            <tr key={_id}>
                              <td>{name}</td>
                              <td>{quantity}</td>
                              <td>{price}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
