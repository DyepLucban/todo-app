import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',        
  }
});

export default axiosInstance;