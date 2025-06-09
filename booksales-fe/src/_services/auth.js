import { useJwt } from "react-jwt";
import { API } from "../_api";
// import jwt_decode from "jwt-decode";

export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post("/login", { email, password });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logout = async ({ token, user }) => {
  try {
    const { data } = await API.post(
      "/logout",
      { token, user },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    localStorage.removeItem("accessToken");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useDecodeToken = (token) => {
  const { decodedToken, isExpired } = useJwt(token);

  try {
    if (isExpired) {
      return {
        success: false,
        message: "Token Expired",
        data: null,
      };
    }

    return {
      success: true,
      message: "Token Valid",
      data: decodedToken,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};
