import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import {FcPlus} from 'react-icons/fc';
import {ToastContainer, toast} from 'react-toastify';
import {postCreateNewUser, putUpdateUser} from "../../../services/apiService";
import _ from "lodash";

const ModalViewUser = (props) => {
  const {show, setShow} = props;
  const dataUpdate = props.dataView;
  const handleClose = () => {
    setShow(false);
    setEmail('');
    setUsername('');
    setPassword('');
    setRole('USER');
    setImage('');
    setPreviewImage('');
    props.resetViewData();
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('User');
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    console.log('>>> User in View: ' , dataUpdate);

    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setUsername(dataUpdate.username);
      setRole(dataUpdate.role);
      setImage('');
      if (dataUpdate.image)
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
    }
  }, [dataUpdate]);
  

 
  return (
    <>
      {/*<Button variant="primary" onClick={handleShow}>*/}
      {/*  Launch demo modal*/}
      {/*</Button>*/}

      <Modal show={show} onHide={handleClose} size='xl' backdrop='static' className='model-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>View user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={email}
                     onChange={(event) => setEmail(event.target.value)} disabled/>
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" value={password}
                     onChange={(event) => setPassword(event.target.value)} disabled/>
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" value={username}
                     onChange={(event) => setUsername(event.target.value)} disabled/>
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select" value={role} disabled>
                <option value='USER'>USER</option>
                <option value='ADMIN'>ADMIN</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor='labelUpload'>
                <FcPlus/>
                Upload file Image</label>
              <input type="file" hidden id='labelUpload' disabled/>
            </div>

            <div className='col-md-12 img-preview'>
              {previewImage ? <img
                src={previewImage}
                alt=""/> : <span>Preview Image</span>}

            </div>


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>);
}

export default ModalViewUser;