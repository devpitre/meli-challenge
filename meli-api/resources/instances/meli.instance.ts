import axios from 'axios';

const meliInstance = axios.create({
  baseURL: 'https://api.mercadolibre.com/',
});

export default meliInstance;
