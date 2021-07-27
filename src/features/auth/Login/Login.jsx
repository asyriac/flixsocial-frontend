import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { login } from "../authSlice";
import { useLocation, Navigate, Link } from "react-router-dom";
import Loading from "../../../common/components/Loading/Loading";
import useFetchCurrentUser from "../../../common/hooks/useFetchCurrentUser";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  let { isLoggedIn, loading, serverError } = useSelector((state) => state.auth);
  const { state } = useLocation();
  const dispatch = useDispatch();

  useFetchCurrentUser();

  const path = state?.from || "/home";

  const initialValues = {
    username: "robdoe",
    password: "qwert123",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleLogin = () => {
    const { username, password } = formik.values;
    dispatch(login({ username, password }));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });

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
          <input className="form-control" type="text" id="username" value={formik.values.username} onChange={formik.handleChange} autoComplete="off" onBlur={formik.handleBlur} />
          {formik.touched.username && formik.errors.username && <span className="invalid-feedback">{formik.errors.username}</span>}
        </div>
        <div className="form-group">
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            autoComplete="off"
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && <span className="invalid-feedback">{formik.errors.password}</span>}
        </div>
        <span>
          Don't have an account?{" "}
          <Link to="/register" className="primary-text">
            Register.
          </Link>
        </span>
        <div className="flex flex-center mt-1">
          <button className="btn btn-secondary btn-sm" onClick={formik.handleSubmit} type="button" disabled={!formik.isValid}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
