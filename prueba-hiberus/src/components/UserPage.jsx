import User from "./User";
import "../App.css";

import useUsers from "../hooks/useUsers";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import DeleteModal from "./DeleteModal";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router";
//al entrar en /users salta el useEffect
//En la function getUsers se crea la variable users
//La variable users recoge todo lo de la function usersService

//al llamar a una funcion asincrona tienes que esperarla con el await

const UserPage = () => {
  const navigate = useNavigate();
  const { isOpen, openDeleteModal, updateId, userId } = useUsers();
  const { users, setLoading, loading } = useContext(UserContext);
  console.log(users, "USERPAGE");

  const closeSession = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
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
                  {users.length > 0 &&
                    users?.map((userInfo, key) => {
                      return (
                        <tr key={key}>
                          <User
                            {...userInfo}
                            openDeleteModal={openDeleteModal}
                            updateId={updateId}
                          />
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <button className="closeSession" onClick={() => closeSession()}>
              Cerrar sesión
            </button>
          </div>
          {isOpen ? (
            <DeleteModal openDeleteModal={openDeleteModal} userId={userId} />
          ) : null}
        </div>
      )}
    </>
  );
};

export default UserPage;
