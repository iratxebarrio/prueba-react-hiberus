import { registerService } from "../services/register-service";
import "../App.css";

import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const [response, setResponse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const responseAxios = await registerService({ body: formJson });
    setResponse(responseAxios);

    responseAxios != 409 && navigate("/login");
  }

  console.log(response);
  return (
    <div className="register_container">
      <form method="post" onSubmit={handleSubmit}>
        <h3>Registro</h3>
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
            placeholder="contraseña"
          />
        </fieldset>
        <fieldset>
          <button type="submit" >Enviar</button>
          <h6>
            Si ya estas registrada{" "}
            <a onClick={() => navigate("/login")} href="#">
              haz click aqui.
            </a>
          </h6>
          {response == 409 && <h6 className="loginError">Error</h6>}
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
