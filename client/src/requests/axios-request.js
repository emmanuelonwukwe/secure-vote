import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 60000,
  headers: { "static-header": "Pass Static data" },
});

export default axiosRequest;
