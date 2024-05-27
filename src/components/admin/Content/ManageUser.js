import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import {useEffect, useState} from "react";
import TableUser from "./TableUser";
import {getAllUsers} from "../../../services/apiService";
import ModelUpdateUser from "./ModalUpdateUser";
import ModelViewUser from "./ModalViewUser";

import user from "../../user/User";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});

  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    let res = await getAllUsers();
    console.log(res);
    if (res.EC === 0)
      setListUsers(res.DT);
  }
  
  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  }

  const handleClickBtnView = (user) => {
    console.log('>>>View User: ', user);
    setShowModalViewUser(true);
    setDataView(user);
  }
  
  const resetData = () => {
    setDataUpdate({});
    setDataView({});
  }
  return (
    <div className='manage-user-container'>
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className='btn-add-new'>
          <button onClick={() => setShowModalCreateUser(true)}>Add new user</button>
        </div>
        <div className='table-users-container'>
          <TableUser listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView}/>
        </div>
        <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchUsers={fetchUsers}/>
        <ModelUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} fetchUsers={fetchUsers} dataUpdate={dataUpdate} resetUpdateData = {resetData} />
        <ModelViewUser show={showModalViewUser} setShow={setShowModalViewUser} fetchUsers={fetchUsers} dataView={dataView} resetViewData = {resetData} />
        
      </div>
    </div>
  );
};

export default ManageUser;
