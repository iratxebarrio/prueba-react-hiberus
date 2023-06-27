import User from "./User";
import "../App.css";

import useUsers from "../hooks/useUsers";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import DeleteModal from "./DeleteModal";

//al entrar en /users salta el useEffect
//En la function getUsers se crea la variable users
//La variable users recoge todo lo de la function usersService

//al llamar a una funcion asincrona tienes que esperarla con el await

const UserPage = () => {
  const { isOpen, openDeleteModal, updateId, userId } =
    useUsers();
  const { users } = useContext(UserContext);

  return (
    <>
      <h1>Lista de usuarios</h1>

      <div className="box-wrap">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Username</th>
                <th>Email</th>
                <th>Modificar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody className="tbodyTable">
              {users.map((userInfo, key) => {
                return (
                  <tr>
                    <User
                      {...userInfo}
                      openDeleteModal={openDeleteModal}
                      updateId={updateId}
                      key={key}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {isOpen ? (
        <DeleteModal openDeleteModal={openDeleteModal} userId={userId} />
      ) : null}
    </>
  );
};

export default UserPage;
