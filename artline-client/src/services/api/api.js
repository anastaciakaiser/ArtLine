// services/api/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/auth'; // Замените на ваш URL бэкенда

const api = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Другие методы для входа, выхода и т. д.

};

export default api;
