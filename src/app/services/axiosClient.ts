import axios, { AxiosInstance } from 'axios'

const axiosClient: AxiosInstance = axios.create({
    baseURL: 'https://b115-2804-14d-4c83-8626-1880-ea59-19d0-e07f.ngrok-free.app/',
    timeout: 5000,
    headers: {
        "ngrok-skip-browser-warning": "69420"
    }
});

export default axiosClient
