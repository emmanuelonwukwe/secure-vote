import axios from "axios";
const app_environment = "production";
const baseURL =
  app_environment == "development"
    ? "http://localhost:3000/api/v1"
    : "https://secure-vote.onrender.com/api/v1";

const axiosRequest = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: { "static-header": "Pass Static data" },
});

export default axiosRequest;
