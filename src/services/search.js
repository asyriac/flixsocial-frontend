import axios from "axios";
import { API_ENDPOINT } from "./apiEndpoint";

const searchPost = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/search/posts`, { params: { search: searchTerm } });
    return response;
  } catch (error) {
    return error.response;
  }
};

const searchUsers = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/search/users`, { params: { search: searchTerm } });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const searchAPI = {
  searchPost,
  searchUsers,
};
