import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const portfolioAPI = {
  getAll: () => api.get('/portfolio'),
  getSection: (section) => api.get(`/portfolio/${section}`),
};

export default api;