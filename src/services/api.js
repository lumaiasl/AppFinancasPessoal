import axios from "axios";

const api = axios.create({
    //baseURL: 'http://localhost:3333'
    baseURL: 'http://172.17.48.1:3333'
})

export default api;