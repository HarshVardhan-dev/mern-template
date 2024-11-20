import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Update as per the backend URL
});

export default API;
