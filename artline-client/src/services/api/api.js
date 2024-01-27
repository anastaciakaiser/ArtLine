// services/api/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/auth'; // Replace with your backend URL

const api = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Other methods for logout, user details, etc.

};

export default api;
