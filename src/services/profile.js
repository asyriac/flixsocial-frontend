import axios from "axios";
import { API_ENDPOINT } from "./apiEndpoint";

const getUserProfile = async (username) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/profile/${username}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

const getUserPosts = async (userId) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/posts`, { params: { postedBy: userId } });
    return response;
  } catch (error) {
    return error.response;
  }
};

const followUser = async (userId) => {
  try {
    const response = await axios.put(`${API_ENDPOINT}/users/${userId}/follow`);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const profileAPI = {
  getUserProfile,
  getUserPosts,
  followUser,
};
