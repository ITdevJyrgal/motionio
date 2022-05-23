import axios from 'axios';

const api = axios.create({
    baseURL: `https://motionweb-studio.herokuapp.com`,
});

export default api;
