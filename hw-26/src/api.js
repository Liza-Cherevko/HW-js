import axios from "axios";

const api = axios.create({
    baseURL:'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/',
})

export default api
// 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';