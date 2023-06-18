import http from "../api/http-common";

const mostSold = () => {
  return http.get("/stats/mostsold");
};
const lowstock = () => {
  return http.get("/stats/lowstock");
};
const salesAndProfit = () => {
  return http.get("/stats/salesandprofit");
};

const weeklySalesData = () => {
  return http.get("/stats/weeklysalesdata");
};

const StatsService = {
  mostSold,
  lowstock,
  salesAndProfit,
  weeklySalesData,
};

export default StatsService;
