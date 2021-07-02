import axios from "axios";
import { API_ENDPOINT } from "./apiEndpoint";

const postNewTweet = async ({ content }) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/posts`, { content });
    return response;
  } catch (error) {
    return error.response;
  }
};

const fetchTweets = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/posts`);
    return response;
  } catch (error) {
    return error.response;
  }
};

const fetchSingleTweet = async (postId) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/posts/${postId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};

const likeTweet = async (postId) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/posts/${postId}/like`);
    return response;
  } catch (error) {
    return error.response;
  }
};

const retweetTweet = async (postId) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/posts/${postId}/retweet`);
    return response;
  } catch (error) {
    return error.response;
  }
};

const replyToTweet = async (postId, content) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/posts/${postId}/reply`, { content });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const postAPI = {
  postNewTweet,
  fetchTweets,
  fetchSingleTweet,
  likeTweet,
  retweetTweet,
  replyToTweet,
};
