import axios from "axios";
import { BACKEND_SITE, BACKEND_API_BASE_URL } from "../config/app.js";


const axiosRequest = axios.create({
  baseURL: BACKEND_SITE + BACKEND_API_BASE_URL,
  timeout: 60000,
  headers: { "static-header": "Pass Static data only else dynamic data will break" },
});

export default axiosRequest;
