import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./common/components/PrivateRoute";

import Login from "./features/auth/Login/Login";
import Register from "./features/auth/Register/Register";
import Logout from "./features/auth/Logout/Logout";
import HomePage from "./pages/Home.page";
import PostPage from "./pages/Post.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute path="/home" element={<HomePage />} />
        <PrivateRoute path="/logout" element={<Logout />} />
        <PrivateRoute path="/post/:postId" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
