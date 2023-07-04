import { useReducer } from "react";

//PASAR TYPES A UN ARCHIVO A PARTE

const UseReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state, //al tener mas de una variable en el initialState hay que poner ...state para que traiga todo lo del state y en users pones lo que le pases (action.payload)
        users: action.payload,
        //cambia el initialState de users vacío por el action.payload
      };

    case "DELETE_USERS":
      const usersFilter = state.users.filter((usuario) => {
        return usuario.id != action.payload;
      });
      return {
        ...state,
        users: usersFilter,
      };

    case "UPDATE_USERS":
      return {
        //no necesito ...state porque no cambio el estado, lo devuelvo como está. No cambio el estado porque navega a la pantalla donde llamo a la funcion GET_USERS
        users: state,
      };

    case "LOADING":
      console.log(state.loading);
      return {
        ...state,
        loading: action.payload, //siempre que llamemos a setLoading cambiará de true a false
      };

    default:
      return state;
  }
};

export default UseReducer;
