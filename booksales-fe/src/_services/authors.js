import { API } from "../_api";
import { getToken } from "./token";

export const getAuthors = async () => {
  const { data } = await API.get("/authors");
  return data.data;
};

export const createAuthor = async (data) => {
  try {
    const response = await API.post("/authors", data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const showAuthor = async (id) => {
  try {
    const { data } = await API.get(`/authors/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateAuthor = async (id, payload) => {
  try {
    const response = await API.post(`/authors/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteAuthor = async (id) => {
  try {
    await API.delete(`/authors/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
