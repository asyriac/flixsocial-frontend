import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { login, resetServerError } from "../authSlice";
import { useLocation, Navigate } from "react-router-dom";
import Loading from "../../../common/components/Loading/Loading";
import useFetchCurrentUser from "../../../common/hooks/useFetchCurrentUser";

const Login = () => {
  let { isLoggedIn, loading, serverError } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const dispatch = useDispatch();

  useFetchCurrentUser();

  const path = state?.from || "/home";

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  const resetErrors = () => {
    if (serverError !== null) dispatch(resetServerError());
  };

  if (loading) return <Loading />;

  if (isLoggedIn) return <Navigate to={path} replace />;

  return (
    <div className="flex flex-center login-container">
      <div className="login-form">
        <h3 className="text-center pb-1">Login</h3>
        {serverError && <div className="alert mb-1">{serverError}</div>}
        <div className="form-group">
          <label className="" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              resetErrors();
            }}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              resetErrors();
            }}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-center">
          <button className="btn btn-secondary btn-sm" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
