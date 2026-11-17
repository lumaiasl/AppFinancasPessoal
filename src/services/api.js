import axios from "axios";

const api = axios.create({
    //baseURL: 'http://localhost:3333'
    baseURL: 'http://200.235.83.114:3333'
})

export default api;