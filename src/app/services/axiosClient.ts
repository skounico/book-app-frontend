import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
    baseURL: 'https://localhost:7236/',
    timeout: 5000,
});

export default axiosClient;
