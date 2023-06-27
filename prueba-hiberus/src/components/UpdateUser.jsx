import { updateService } from "../services/update-service";

const UpdateUser = ({}) => {
  const id = localStorage.getItem("id");
  console.log(id, "ID UPDATEUSER");
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    updateService({ body: { ...formJson, ...{ id } } }); //meto en el objeto body el formJson y el id
  }
  return (
    <div className="register_container">
      <form onSubmit={handleSubmit}>
        <h3>Modificar datos</h3>
        <fieldset>
          <input type="text" name="name" required="true" placeholder="nombre" />
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
          <button type="submit">Registrarse</button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateUser;
