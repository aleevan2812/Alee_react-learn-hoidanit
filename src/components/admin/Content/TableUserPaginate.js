import ReactPaginate from 'react-paginate';
import {useEffect, useState} from "react";

const TableUserPaginate = (props) => {
  const {listUsers, handleClickBtnUpdate, handleClickBtnDelete, pageCount} = props;

  const handlePageClick = (event) => {
    props.fetchUsersWithPaginate(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
  };

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
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  )
}
export default TableUserPaginate;