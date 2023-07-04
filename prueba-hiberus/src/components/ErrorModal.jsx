const ErrorModal = ({ setError, error }) => {
  console.log(error, "ERROR");
  return (
    <div>
      <p className="messageError">
        Error al iniciar sesión, pruebe más tarde o con un usuario distinto.
      </p>
      <button className="messageErrorButton" onClick={() => setError(false)}>Cerrar</button>
    </div>
  );
};

export default ErrorModal;
