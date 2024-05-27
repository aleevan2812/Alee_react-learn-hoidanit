import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {deleteUser} from "../../../services/apiService";
import {toast} from "react-toastify";

function ModalDeleteUser(props) {
  const {show, setShow, dataDelete} = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitDelete = async (id) => {
    const data = await deleteUser(dataDelete.id);
    console.log('>>>Check data to delele: ', data);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose(false);
      await props.fetchUsers();
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
      handleClose(false);
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comfirm delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are deleting <b>{dataDelete.email}</b>!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            handleSubmitDelete(dataDelete.id);
            handleClose();
          }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;