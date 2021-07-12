import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./common/components/PrivateRoute";

import Login from "./features/auth/Login/Login";
import Register from "./features/auth/Register/Register";
import Logout from "./features/auth/Logout/Logout";
import HomePage from "./pages/Home.page";
import PostPage from "./pages/Post.page";
import ProfilePage from "./pages/Profile.page";
import SearchPage from "./pages/Search.page";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <PrivateRoute path="/" element={<HomePage />} />
          <PrivateRoute path="/home" element={<HomePage />} />
          <PrivateRoute path="/logout" element={<Logout />} />
          <PrivateRoute key="user-post" path="/post/:postId" element={<PostPage />} />
          <PrivateRoute key="profile" path="/profile" element={<ProfilePage />} />
          <PrivateRoute key="user-profile" path="/profile/:username" element={<ProfilePage />} />
          <PrivateRoute path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
