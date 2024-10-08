import api from './apiConfig'
import { getUser } from './users';

export const createYardSale = async (yardSaleData) => {
  try {
    const token = localStorage.getItem("token");
    const userId = yardSaleData.yardOwner

    const response = await api.post(`/yard-sales/${userId}`, yardSaleData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error Creating yard-sales Data:", error)
  }
};

export const getYardSales = async () => {
  try {
    const response = await api.get('/yard-sales');
    return response.data;
  } catch (error) {
    console.error("Error Getting Yard-Sales:", error)
  }
};

export const getYardSale = async (yardId) => {
  try {
    const response = await api.get(`/yard-sales/${yardId}`)
    return response.data;
  } catch (error) {
    console.error(error)
  }
};

export const getYardSaleByOwnerId = async (yardOwnerId) => {
  try {
    const response = await getUser(yardOwnerId)
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(error)
  }
};

export const updateYardSale = async (userId, yardId, yardSaleData) => {
  try {
    const response = await api.put(`/yard-sales/${userId}/${yardId}`, yardSaleData);
    return response.data;
  } catch (error) {
    console.error(error)
  }
};

export const deleteYardSale = async (userId, yardId) => {
  try {
    const response = await api.delete(`/yard-sales/${userId}/${yardId}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
};
