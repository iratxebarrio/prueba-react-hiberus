import { BASE_URL } from "./constants";

export const loginService = ({ body }) => {
  fetch(BASE_URL + "/auth/log-in", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

