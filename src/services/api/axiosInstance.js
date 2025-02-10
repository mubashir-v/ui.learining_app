import axios from "axios";
import { auth } from "../firebase/firebase";

// Create an instance of Axios with common configurations
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Base URL for your API
  timeout: 20000, // Set a timeout of 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (for setting common headers like tokens)
axiosInstance.interceptors.request.use(
  async (config) => {
    // You can set authorization headers or other common headers here
    const token = await auth?.currentUser?.getIdToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (for global error handling)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common response errors here
    if (error.response) {
      // Server responded with a status other than 200 range
      if (error.response.status === 401) {
        console.error("Unauthorized - Redirecting to login...");
        // Handle unauthorized errors, maybe redirect to login
      } else if (error.response.status === 404) {
        console.error("Resource not found.");
      } else if (error.response.status === 400) {
        throw Error(
          error?.response?.data?.error[0]?.msg || "Please provide a valid input"
        );
      } else {
        console.error(`Error: ${error.response.status}`);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error("Network error: No response from the server.");
    } else {
      // Something else happened while setting up the request
      console.error("Error setting up request:", error.message);
    }

    // Optionally rethrow the error to be handled in the calling function
    return Promise.reject(error);
  }
);

export default axiosInstance;
