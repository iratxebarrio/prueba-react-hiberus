import Login from "../components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Register from "../components/Register";
import UserPage from "../components/UserPage";
import UpdateUser from "../components/UpdateUser";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/update-users" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
