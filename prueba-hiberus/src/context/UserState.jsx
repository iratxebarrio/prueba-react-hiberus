import { useReducer } from "react";
import { UserContext } from "./UserContext";
import UseReducer from "./UserReducer";
import { usersService } from "../services/users- service";
import { deleteService } from "../services/delete-service";
import { updateService } from "../services/update-service";

export const UserState = ({ children }) => {
  const initialState = {
    users: [],
  };
  const [state, dispatch] = useReducer(UseReducer, initialState);
  //state es lo que pasamos en el segundo argumento del useReducer --> initialState

  const getUsers = async () => {
    const data = await usersService(); //obtengo toda la información del fetch
    dispatch({ type: "GET_USERS", payload: data.items }); //esto es el action
  };

  const deleteUser = async (userId) => {
    await deleteService(userId);
    dispatch({ type: "DELETE_USERS", payload: userId });

    //payload es lo que mandas
    //dispatch es la funcion que ejecutas para actualizar el estado: DELETE_USERS
  };

  const updateUser = async (body) => {
    console.log(body, "HOLA");
    await updateService(body);
    dispatch({ type: "UPDATE_USERS", payload: body });
  };

  return (
    <UserContext.Provider
      value={{ users: state.users, getUsers, deleteUser, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

//useReducer te cambia los valores del estado de la aplicación
//al llamar al dispatch apuntas al useReducer, con el action (type y payload) le indicas a que caso tiene que llamar del reducer para cambiar el estado de la aplicación.
//payload es lo que queremos colocar en el estado de la aplicación
