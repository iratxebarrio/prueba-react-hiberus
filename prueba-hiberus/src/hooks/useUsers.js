import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const useUsers = () => {
  const [userData, setUserData] = useState([]);
  const { getUsers, deleteUser, setLoading } = useContext(UserContext);
  const [userId, setUserId] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const openDeleteModal = (value) => {
    //creo aqui la funcion para usarla en el componente UserPage.jsx y desde ahi poder enviarla por props a User.jsx
    //Desde User.jsx al hacer click en el button eliminar, se llama a esta función y se setea el isOpen

    setIsOpen(value);
  };

  const updateId = (id) => {
    setUserId(id);
  };

  useEffect(() => {
    setLoading(true)
    getUsers().then(() => {
      setLoading(false);
    });
  }, []);

  return {
    userData,
    isOpen,
    setIsOpen,
    openDeleteModal,
    userId,
    updateId,
  };
};
export default useUsers;
