import { UserContext } from "./context/UserContext";
import Login from "./components/Login";
import AppRouter from "./routes/AppRouter";
import { UserState } from "./context/UserState";

function App() {
  return (
    <UserState>
      <AppRouter />
    </UserState>
  );
}

export default App;
