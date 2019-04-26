import axios from "axios";
const api = axios.create({
  baseURL: "https://esportes2api.herokuapp.com/api"
});

export default api;
