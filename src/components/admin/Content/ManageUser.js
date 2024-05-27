import ModelCreateUser from "./ModelCreateUser";
import './ManageUser.scss';
import {useState} from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <div className='manage-user-container'>
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className='btn-add-new'>
          <button onClick={() => setShowModalCreateUser(true)}>Add new user</button>
        </div>
        <div className='table-users-container'>
          <TableUser/>
        </div>
        <ModelCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser}/>
      </div>
    </div>
  );
};

export default ManageUser;
