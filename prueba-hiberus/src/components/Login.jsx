import "../App.css";
import { loginService } from "../services/login-service";

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    console.log(formData.values(), "formData");

    loginService({ body: formJson });
  }

  return (
    <div className="login_container">
      <h3>Login</h3>
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
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
