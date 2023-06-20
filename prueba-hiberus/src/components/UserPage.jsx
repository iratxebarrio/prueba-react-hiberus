import { useEffect, useState } from "react";
import { usersService } from "../services/users- service";

//al entrar en /users salta el useEffect
//En la function getUsers se crea la variable users
//La variable users recoge todo lo de la function usersService

//al llamar a una funcion asincrona tienes que esperarla con el await
const UserPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await usersService(); //obtengo toda la información del fetch

      const prueba = data.items.map((usuario) => {
        //hago map solo de los items que hay dentro de data
        return usuario.email; //devuelvo el email de cada item
      });
      setUserData(prueba);
    };
    getUsers();
  }, []);

  console.log(userData);

  return (
    <>
      <h1>Lista de usuarios</h1>
      <p>{userData}</p>

    </>
  );
};

export default UserPage;
