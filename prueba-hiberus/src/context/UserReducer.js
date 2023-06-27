import { useReducer } from "react";

//PASAR TYPES A UN ARCHIVO A PARTE

const UseReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        users: action.payload,
        //cambia el initialState de users vacío por el action.payload
      };

    case "DELETE_USERS":
      const usersFilter = state.users.filter((usuario) => {
        return usuario.id != action.payload;
      });
      return {
        users: usersFilter,
      };

    case "UPDATE_USERS":
      return {
        users: action.payload,
      };

    default:
      return state;
  }
};

export default UseReducer;
//
