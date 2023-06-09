import http from "../api/http-common";

const mostSold = () => {
  return http.get("/stats/mostsold");
};
const lowstock = () => {
  return http.get("/stats/lowstock");
};

const StatsService = {
  mostSold,
  lowstock,
};

export default StatsService;
