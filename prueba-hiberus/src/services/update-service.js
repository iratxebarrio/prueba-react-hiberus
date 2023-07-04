import { BASE_URL } from "./constants";
import axios from "axios";

const getToken = localStorage.getItem("token");
const tokenUser = JSON.parse(getToken);


export const updateService = async ({ userId, body }) => {
  const response = await axios.put(BASE_URL + "/users/" + userId, 
  body, 
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenUser.accessToken}`,
    },
  });
  return response;
};
