import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import useFetchCurrentUser from "../hooks/useFetchCurrentUser";
import Loading from "./Loading/Loading";

export const PrivateRoute = ({ path, ...props }) => {
  const { isLoggedIn, loading } = useSelector((state) => state.auth);

  useFetchCurrentUser();

  if (loading) return <Loading />;

  return isLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
