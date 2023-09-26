import axios from "axios";

const token = localStorage.getItem("jwt_token");


const axiosRequest = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 60000,
  headers: { "token": token ?? null },
});

export default axiosRequest;
