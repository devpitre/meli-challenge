import axios from 'axios';

const appInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default appInstance;