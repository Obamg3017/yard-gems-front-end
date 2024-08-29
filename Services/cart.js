import api from './apiConfig.js'

export const getCart = async (userId) => {
  try {
    const response = await api.get(`/cart/${userId}`)
    return response.data;
  } catch (error) {
    console.error(error)
  }
}

export const addToCart = async (userId, itemId) => {
  try {
    const response = await api.post(`/cart/${userId}`, { itemId })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateCartItem = async (userId, itemId, quantity) => {
  try {
    const response = await api.put(`/cart/${userId}/${itemId}`, { quantity })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const removeFromCart = async (userId, itemId) => {
  try {
    const response = await api.delete(`/cart/${userId}/${itemId}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
