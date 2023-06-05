import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const data = useContext(AuthContext);
  // console.log(data);
  return (
    <>
      <div>Welcome, {data.user.name}</div>
      <section>
        <aside>most sold products</aside>
        <aside>low stock products</aside>
      </section>
    </>
  );
};

export default Dashboard;
