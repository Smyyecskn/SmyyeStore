import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  return user.email ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
