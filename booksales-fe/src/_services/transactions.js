import { API } from "../_api";
import { getToken } from "./token";

export const getTransactions = async () => {
  const { data } = await API.get("/transactions", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return data.data;
};

export const createTransaction = async (data) => {
  try {
    const response = await API.post("/transactions", data, {
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
