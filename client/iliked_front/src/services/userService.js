import jwt_decode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";

const apiURL = config.apiURL;
const tokenProperty = "token";

async function login(user) {
  const response = await http.post(apiURL + "/auths", {
    ...user,
  });
  const token = response.headers["x-auth-token"];
  localStorage.setItem(tokenProperty, token);

  return jwt_decode(token);
}

function loginWithToken(token) {
  localStorage.setItem(tokenProperty, token);

  return jwt_decode(token);
}

function logout() {
  localStorage.removeItem(tokenProperty);
}

async function register(user) {
  const response = await http.post(apiURL + "/users", {
    ...user,
  });
  const token = response.headers["x-auth-token"];
  localStorage.setItem(tokenProperty, token);

  return token;
}

function getCurrentUser() {
  try {
    const token = localStorage.getItem(tokenProperty);
    return jwt_decode(token);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  loginWithToken,
  logout,
  getCurrentUser,
  register,
};
