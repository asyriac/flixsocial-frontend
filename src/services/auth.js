import axios from "axios";
import { API_ENDPOINT } from "./apiEndpoint";
axios.defaults.withCredentials = true;

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/current-user`);
    return response;
  } catch (err) {
    return err;
  }
};

export const loginUser = async (args) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/login`, args);
    return response;
  } catch (err) {
    return err;
  }
};
