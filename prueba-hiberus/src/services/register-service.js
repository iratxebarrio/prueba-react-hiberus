import { BASE_URL } from "./constants";

export const registerService = ({ body }) => {
  fetch(BASE_URL + "/auth/sign-up", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};