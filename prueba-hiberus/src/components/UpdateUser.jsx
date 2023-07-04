import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = ({}) => {
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {}, [loading]);

  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    updateUser({ userId: id, body: formJson }).then(() => navigate("/users")); //meto en el objeto body el formJson y el id
    //con .then espera a que llegue la respuesta de la funcion updateUser y ahi se ejecuta lo de dentro del then
  }
  return (
    <>
      <div className="register_container">
        <form onSubmit={handleSubmit}>
          <h3>Modificar datos</h3>
          <fieldset>
            <input
              type="text"
              name="name"
              required="true"
              placeholder="nombre"
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="surname"
              required="true"
              placeholder="apellidos"
            />
          </fieldset>
          <fieldset>
            <input
              type="email"
              name="email"
              required="true"
              placeholder="email"
            />
          </fieldset>

          <fieldset>
            <button type="submit">Actualizar datos</button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
