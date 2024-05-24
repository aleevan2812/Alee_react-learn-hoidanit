import ModelCreateUser from "./ModelCreateUser";
import './ManageUser.scss';
import {useState} from "react";

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
          Table users
        </div>
        <ModelCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser}/>
      </div>
    </div>
  );
};

export default ManageUser;
