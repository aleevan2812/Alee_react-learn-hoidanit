import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import {useEffect, useState} from "react";
import TableUser from "./TableUser";
import {getAllUsers} from "../../../services/apiService";
import ModelUpdateUser from "./ModalUpdateUser";
import user from "../../user/User";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

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
  
  const resetUpdateData = () => {
    setDataUpdate({});
  }
  return (
    <div className='manage-user-container'>
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className='btn-add-new'>
          <button onClick={() => setShowModalCreateUser(true)}>Add new user</button>
        </div>
        <div className='table-users-container'>
          <TableUser listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate} />
        </div>
        <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchUsers={fetchUsers}/>
        <ModelUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} fetchUsers={fetchUsers} dataUpdate={dataUpdate} resetUpdateData = {resetUpdateData} />
      </div>
    </div>
  );
};

export default ManageUser;
