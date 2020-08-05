import axios from "axios";
import { REST_API_BASE_URL } from "./config.service";

/*********************************Product service end points****************************************************************/
export const saveProduct = async (data) => {
  return await axios.post(`${REST_API_BASE_URL}/api/v1/product`, data);
};

export const getProduct = async () => {
  return await axios.get(`${REST_API_BASE_URL}/api/v1/product`);
};

export const updateProduct = async (data, updatedID) => {
  return await axios.put(
    `${REST_API_BASE_URL}/api/v1/product/${updatedID}`,
    data
  );
};

export const deleteProduct = async (delID) => {
  return await axios.put(`${REST_API_BASE_URL}/api/v1/product/${delID}/del`);
};

/*********************************customer****************************************************************/
export const singUpFunction = async (data) => {
  return await axios.post(`${REST_API_BASE_URL}/api/v1/customer`, data);
};

export const authenticateLogin = async (credentials) => {
  return await axios.post(
    `${REST_API_BASE_URL}/api/v1/customer/authenticate`,
    credentials
  );
};
