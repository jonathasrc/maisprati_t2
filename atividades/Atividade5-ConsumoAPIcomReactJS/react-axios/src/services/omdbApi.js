import axios from 'axios'

const API_KEY = '5176ccd'
// const BASE_URL = `http://www.omdbapi.com/?i=tt3896198&`
const BASE_URL = 'http://www.omdbapi.com/';

const omdbApi = axios.create({
    baseURL: BASE_URL,
});

omdbApi.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        apikey: API_KEY,
    };
    return config;
});

export default omdbApi;
