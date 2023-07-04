import "../App.css";
import updateIcon from "../assets/images/editar.png";
import deleteIcon from "../assets/images/cancelar.png";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./UpdateUser";

const User = ({ name, surname, email, id, openDeleteModal, updateId }) => {
  const navigate = useNavigate();

  const getDelete = (id) => {
    openDeleteModal(true);
    updateId(id);
  };

  return (
    <>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>
        <button
          className="tableImgButton"
          onClick={() => navigate(`/update-users/${id}`)}
        >
          <img className="tableImg" src={updateIcon} alt="" />
        </button>
      </td>
      <td>
        <button onClick={() => getDelete(id)} className="tableImgButton">
          <img className="tableImg" src={deleteIcon} alt="" />
        </button>
      </td>
    </>
  );
};

export default User;
