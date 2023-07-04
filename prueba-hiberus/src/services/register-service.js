import { BASE_URL } from "./constants";
import axios from "axios";

export const registerService = async ({ body }) => {
  try {
    await axios.post(BASE_URL + "/auth/sign-up", JSON.stringify(body), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    //console.log(error.response.data.statusCode, "ERROR");
    // alert (error)
    return (error.response.data.statusCode)
  }
};
