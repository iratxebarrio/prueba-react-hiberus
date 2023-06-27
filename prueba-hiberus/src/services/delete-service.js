import { BASE_URL } from "./constants";
import axios from "axios";

const getToken = localStorage.getItem("token");
const tokenUser = JSON.parse(getToken);

export const deleteService = async (id) => {
  await axios.delete(BASE_URL + "/users/" + id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",

      Authorization: `Bearer ${tokenUser.accessToken}`,
    },
    data: { body: JSON.stringify(id) },
  });
};
