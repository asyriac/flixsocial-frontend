import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate, Link } from "react-router-dom";
import Loading from "../../../common/components/Loading/Loading";
import useFetchCurrentUser from "../../../common/hooks/useFetchCurrentUser";
import { register } from "../authSlice";
import "./Register.css";

const Register = () => {
  let { isLoggedIn, loading } = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const dispatch = useDispatch();
  useFetchCurrentUser();
  const path = state?.from || "/home";

  const handleRegister = () => {
    dispatch(register({ firstName, lastName, email, username, password }));
  };

  if (loading) return <Loading />;

  if (isLoggedIn) return <Navigate to={path} replace />;

  return (
    <div className="flex flex-center login-container">
      <div className="login-form">
        <h3 className="text-center pb-1">Register</h3>
        <div className="form-row">
          <div className="form-group">
            <label className="" htmlFor="firstname">
              First Name
            </label>
            <input className="form-control" type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="off" />
          </div>
          <div className="form-group">
            <label className="" htmlFor="lastname">
              Last Name
            </label>
            <input className="form-control" type="text" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="off" />
          </div>
        </div>
        <div className="form-group">
          <label className="" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
        </div>
        <div className="form-group">
          <label className="" htmlFor="username">
            Username
          </label>
          <input className="form-control" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="off" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="" htmlFor="password">
              Password
            </label>
            <input className="form-control" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
          </div>
          <div className="form-group">
            <label className="" htmlFor="password">
              Confirm Password
            </label>
            <input className="form-control" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
          </div>
        </div>

        <span>
          Have an account?{" "}
          <Link to="/login" className="primary-text">
            Login.
          </Link>
        </span>
        <div className="flex flex-center mt-1">
          <button className="btn btn-secondary btn-sm" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
