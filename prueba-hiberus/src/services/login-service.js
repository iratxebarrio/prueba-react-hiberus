import { BASE_URL } from "./constants";
import axios from "axios";

export const loginService = async ({ body }) => {
  console.log(body, "body");
  await axios
    .post(
      BASE_URL + "/auth/log-in",
      JSON.stringify(body),

      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) =>
      localStorage.setItem("token", JSON.stringify(response.data))
    );
};

//post tiene tres parametros: url, data (la info que enviamos, el body) y config que son los headers.
//IMPORTANTE: el body NO va entre llaves porque da error.
//se puede mirar cuantos parametros son si es axios o fetch poniendo el raton encima de post.
