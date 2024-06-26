// import "bootstrap/dist/css/bootstrap.min.css";


const TableUser = (props) => {
  const {listUsers, handleClickBtnUpdate, handleClickBtnDelete} = props;

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
        <tr>
          <th scope="col">ID</th>
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
              <th scope="row">{item.id}</th>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>
                <button className='btn' onClick={() => props.handleClickBtnView(item)}>View</button>
                <button className='btn btn-warning' onClick={() => handleClickBtnUpdate(item)}>Update</button>
                <button className='btn btn-danger' onClick={() => handleClickBtnDelete(item)}>Delete</button>
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