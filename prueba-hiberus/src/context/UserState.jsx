import { useReducer } from "react";
import { UserContext } from "./UserContext";
import UseReducer from "./UserReducer";
import { usersService } from "../services/users- service";
import { deleteService } from "../services/delete-service";
import { updateService } from "../services/update-service";

export const UserState = ({ children }) => {
  const initialState = {
    users: [],
    loading: false
  };
  const [state, dispatch] = useReducer(UseReducer, initialState);

  //state es lo que pasamos en el segundo argumento del useReducer --> initialState

  const getUsers = async () => {
    const data = await usersService(); //obtengo toda la información del fetch
    dispatch({ type: "GET_USERS", payload: data.items }); //esto es el action
    return true
  };

  const deleteUser = async (userId) => {
    await deleteService(userId);
    dispatch({ type: "DELETE_USERS", payload: userId });

    //payload es lo que mandas
    //dispatch es la funcion que ejecutas para actualizar el estado: DELETE_USERS
  };

  const updateUser = async ({ userId, body }) => {
  await updateService({ userId, body });
  dispatch({ type: "UPDATE_USERS", payload: body.body });
  setLoading(false)
  return true
  };

  const setLoading = (value) => {
    dispatch({type: "LOADING", payload: value})
  }

  return (
    <UserContext.Provider
      value={{ users: state.users, getUsers, deleteUser, updateUser, loading: state.loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

//useReducer te cambia los valores del estado de la aplicación
//al llamar al dispatch apuntas al useReducer, con el action (type y payload) le indicas a que caso tiene que llamar del reducer para cambiar el estado de la aplicación.
//payload es lo que queremos colocar en el estado de la aplicación
