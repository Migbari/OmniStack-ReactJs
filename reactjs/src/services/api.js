// Importamos o axios para chamadas das APIs externas do Node.js
import axios from 'axios';


const api = axios.create({
    baseURL:  'http://localhost:3333'
});

export default api;