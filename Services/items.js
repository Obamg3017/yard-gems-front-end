import api from "./apiConfig";

export const getItems = async () => {
  try {
    const response = await api.get("/items");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getItem = async (itemId) => {
  try {
    const response = await api.get(`/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createItem = async (itemData, userId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post(`/items/${userId}`, itemData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Items working");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateItem = async (userId, itemId, itemData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.put(`/items/${userId}/${itemId}`, itemData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = async (userId,itemId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.delete(`/items/${userId}/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
