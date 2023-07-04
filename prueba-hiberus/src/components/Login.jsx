import { useState } from "react";
import "../App.css";
import { loginService } from "../services/login-service";
import { useNavigate } from "react-router";
import ErrorModal from "./ErrorModal";

const Login = () => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    loginService({ body: formJson })
      .then(() => navigate("/users"))
      .catch(() => setError(true));
  }

  return (
    <div className="login_container login-box">
      <h3>Iniciar Sesión</h3>
      <form method="post" onSubmit={handleSubmit}>
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
        <fieldset className="user-submit">
          <button type="submit">Enviar</button>
          <h6>
            Si no estas registrada{" "}
            <a onClick={() => navigate("/register")} href="#">
              haz click aqui.
            </a>
          </h6>
          {error ? <ErrorModal error={error} setError={setError} /> : ""}
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
