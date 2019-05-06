import axios from "axios";
const api = axios.create({
  // baseURL: "https://esportes2api.herokuapp.com/api",
  base_url: "http://192.168.1.14:3333/api"
});

export default api;
/*tente com o frisbee:
https://niftylettuce.com/frisbee/#/*/
