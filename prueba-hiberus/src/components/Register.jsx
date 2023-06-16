import { registerService } from "../services/register-service";
import "../App.css";

const Register = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    registerService({ body: formJson });
  }
  return (
    <div className="register_container">
      <form method="post" onSubmit={handleSubmit}>
        <h3>Register</h3>
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
          <input
            type="password"
            name="password"
            required="true"
            placeholder="password"
          />
        </fieldset>
        <fieldset>
            <button type="submit">Registrarse</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
