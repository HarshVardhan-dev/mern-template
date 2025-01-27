// src/services/api.js

/**
 * Fetches data from the backend API.
 * @returns {Promise<Object>} The response data from the backend.
 */
export const fetchDataFromBackend = async () => {
  try {
    const response = await fetch("/api/data"); // Use the proxy endpoint
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from backend:", error);
    throw error; // Re-throw the error for handling in the component
  }
};
