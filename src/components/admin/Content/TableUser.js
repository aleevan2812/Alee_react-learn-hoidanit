// import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../services/apiService";

const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    let res = await getAllUsers();
    console.log(res);
    setListUsers(res.DT);
  }

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
          return (
            <tr key={`table-user-${index}`}>
              <th scope="row">{index}</th>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>
                <button className='btn'>View</button>
                <button className='btn btn-warning'>Update</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          );
        })}

        {listUsers && listUsers.length === 0 && <tr>
          <td colSpan={'4'}>Not found data</td>
        </tr>}


        </tbody>
      </table>
    </>
  )
}
export default TableUser;