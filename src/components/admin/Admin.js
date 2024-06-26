import SideBar from "./SideBar";
import './Admin.scss';
import {FaBars} from 'react-icons/fa';
import {useState} from "react";
import {Outlet} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className='admin-sidebar'>
        <SideBar collapsed={collapsed}/>
      </div>
      <div className="admin-content">
        <FaBars onClick={() => setCollapsed(!collapsed)}/>
        {/*This is admin-content*/}
        <div className='admin-header'>
          this is admin-header
        </div>
        <div className='admin-main'>
          <Outlet/>
        </div>
      </div>
      
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
    </div>
  )
}

export default Admin;