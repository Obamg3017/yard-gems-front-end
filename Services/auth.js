import api from "./apiConfig";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/auth/signup", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    toast.success("Registered Successfully");
    return user;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/auth/signin", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    toast.success("Signed In Successfully");

    return user;
  } catch (error) {
    toast.error("Something went wrong");

    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    toast.success("Signed Out Successfully");

    return true;
  } catch (error) {
    toast.error("Something went wrong");

    throw error;
  }
};

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post("/");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/verify");
    return res.data;
  }
  return false;
};
