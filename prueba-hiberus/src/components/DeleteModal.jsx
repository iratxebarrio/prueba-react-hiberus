import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const DeleteModal = ({ openDeleteModal, userId }) => {
  const { deleteUser } = useContext(UserContext);

  useEffect(() => {
    document.body.style.overflow = "hidden"; //al entrar en el componente cambia el estilo overflow general de la app, el body
    return () => {
      //se ejecuta al cerrar el modal
      //cuando no existe el modal se ejecuta el return del useEffect
      document.body.style.overflow = "auto";
    };
  }, []);

  const deleteUserButton = () => {
    deleteUser(userId);
    openDeleteModal(false);
  };
  return (
    <>
      <div className="modal-container" />
      <div className="centered">
        <div className="modal">
          <div className="modal-cabecera">
            <h5 className="modal-titulo">Eliminar Usuario</h5>
          </div>

          <div className="modal-contenido">¿Quieres eliminar el usuario ?</div>
          <div className="modal-acciones">
            <div className="modal-container-acciones">
              <button
                className="modal-eliminar-boton"
                onClick={deleteUserButton}
              >
                Eliminar
              </button>
              <button
                className="modal-cancelar-boton"
                onClick={() => openDeleteModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteModal;
