import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3535",
});

export const CustomerApi = axios.create({
  baseURL: "http://localhost:3333",
});

export const DEVELOPMENT_URL = "http://localhost:3535";

export default api;
