import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../authSlice";
import Loading from "../../../common/components/Loading/Loading";

const Logout = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  if (loading) return <Loading />;

  return <Navigate replace to="/login" />;
};

export default Logout;
