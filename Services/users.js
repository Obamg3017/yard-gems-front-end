import api from "./apiConfig";

export const getUser = async (userId) => {
  try {
    const token = localStorage.getItem("token");

    const response = await api.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    return response;
  } catch (error) {
    console.error("Error Getting User:", error);
  }
};

export const updateUser = async (userId, userData) => {
  try {
    // Retrieve the token from local storage
    const token = localStorage.getItem("token");

    // Add the Authorization header to the existing axios instance
    const response = await api.put(`/users/${userId}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userId) => {
  try {
        // Retrieve the token from local storage
        const token = localStorage.getItem("token");

        // Add the Authorization header to the existing axios instance
        const response = await api.delete(`/users/${userId}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
