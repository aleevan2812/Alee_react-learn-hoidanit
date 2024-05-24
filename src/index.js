import React, {Provider} from "react";
import ReactDOM from "react-dom/client";
import "./views/App.scss";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import HomePage from "./components/home/HomePage";
import DashBoard from "./components/admin/Content/DashBoard";
import ManageUser from "./components/admin/Content/ManageUser";



  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
  // <React.StrictMode>


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<HomePage/>}/>
        <Route path="users" element={<User/>}/>
      </Route>
      <Route path="/admins" element={<Admin/>}>
        <Route index element={<DashBoard/>}/>
        <Route path="manage-users" element={<ManageUser/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

  // </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
