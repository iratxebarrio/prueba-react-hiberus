import { BASE_URL } from "./constants";

const getToken = localStorage.getItem("token");
const tokenUser = JSON.parse(getToken);



//se puede usar async - await o .then para resolver promeras
//el fetch tiene dos promesas: 1 para pasar los datos a json; 2 en el que recibes los datos en json y los usas

export const usersService = async () => {
  return await fetch(BASE_URL + "/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenUser.accessToken}`,
    },
  }).then((res) => res.json());
};
