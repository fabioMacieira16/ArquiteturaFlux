import axios from 'axios';

//comando para rodar api 'json-server server.json -p 7777'
const api = axios.create({
  baseURL: 'http://localhost:7777',
});
export default api;