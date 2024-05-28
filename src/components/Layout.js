import { Route, Routes } from "react-router-dom";
import App from "../views/App";
import HomePage from "./home/HomePage";
import User from "./user/User";
import Admin from "./admin/Admin";
import DashBoard from "./admin/Content/DashBoard";
import ManageUser from "./admin/Content/ManageUser";
import Login from "./Auth/Login";
import React from "react";
import { ToastContainer } from "react-toastify";

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<User />} />
        </Route>
        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
