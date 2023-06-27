import { BASE_URL } from "./constants";
import axios from "axios";

const getToken = localStorage.getItem("token");
const tokenUser = JSON.parse(getToken);

export const updateService = async ({ body }) => {
  await axios.put(
    BASE_URL + "/users/" + body.id,
    {
      body: JSON.stringify(body),
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${tokenUser.accessToken}`,
      },
    }
  );
  return body;
};
