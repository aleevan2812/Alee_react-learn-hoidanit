import ModelCreateUser from "./ModelCreateUser";
import './ManageUser.scss';
import {useEffect, useState} from "react";
import TableUser from "./TableUser";
import {getAllUsers} from "../../../services/apiService";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

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

  return (
    <div className='manage-user-container'>
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className='btn-add-new'>
          <button onClick={() => setShowModalCreateUser(true)}>Add new user</button>
        </div>
        <div className='table-users-container'>
          <TableUser listUsers={listUsers}/>
        </div>
        <ModelCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchUsers={fetchUsers}/>
      </div>
    </div>
  );
};

export default ManageUser;
