import axios from 'axios';
const API_URL = 'https://rest-mock-server.herokuapp.com/';

const api = axios.create({
    baseURL: API_URL,
});
export default  api