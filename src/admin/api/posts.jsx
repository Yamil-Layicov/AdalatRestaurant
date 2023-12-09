import axios from 'axios';

const instance = axios.create({
  baseURL: 'https:/api.edal-et.az/api',
});

export default instance;