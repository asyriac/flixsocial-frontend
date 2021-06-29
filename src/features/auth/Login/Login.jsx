import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { login } from "../authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  return (
    <div className="flex flex-center login-container">
      <div className="login-form">
        <h3 className="text-center pb-1">Login</h3>
        <div className="form-group">
          <label className="" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
