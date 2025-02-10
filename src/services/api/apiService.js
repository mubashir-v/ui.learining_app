import axiosInstance from "./axiosInstance";

export const apiService = {
  get: async (endpoint) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  patch: async (endpoint, data) => {
    try {
      const response = await axiosInstance.patch(endpoint, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await axiosInstance.delete(endpoint);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

// Centralized error handling function
const handleError = (error) => {
  if (error.response) {
    console.error(`API Error: ${error.response.status} - ${error.response.data.message}`);
  } else if (error.request) {
    console.error("No response from the server. Please check your network.");
  } else {
    console.error(`Error: ${error.message}`);
  }
  throw error; // Optionally rethrow the error if you want to catch it higher up
};
