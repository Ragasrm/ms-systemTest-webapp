import axios from "axios";
import { REST_API_BASE_URL } from "./config.service";
/*********************************User****************************************************************/
export const singUpFunction = async (data) => {
  return await axios.post(`${REST_API_BASE_URL}/api/v1/user`, data);
};

export const authenticateLogin = async (credentials) => {
  return await axios.post(
    `${REST_API_BASE_URL}/api/v1/user/authenticate`,
    credentials
  );
};
