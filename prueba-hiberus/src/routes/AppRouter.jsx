import Login from "../components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Register from "../components/Register";
import UserPage from "../components/UserPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
