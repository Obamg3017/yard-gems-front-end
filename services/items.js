import api from './apiConfig'

export const getItems = async () => {
  try {
    const response = await api.get('/items')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getItem = async (itemId) => {
  try {
    const response = await api.get(`/items/${itemId}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createItem = async (itemData) => {
  try {
    const response = await api.post('/items', itemData)
    return response.data
  } catch (error) {
    console.error(error)
  }
};

export const updateItem = async (itemId, itemData) => {
  try {
    const response = await api.put(`/items/${itemId}`, itemData)
    return response.data
  } catch (error) {
    console.error(error)
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await api.delete(`/items/${itemId}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
