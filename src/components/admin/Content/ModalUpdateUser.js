import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import {FcPlus} from 'react-icons/fc';
import {ToastContainer, toast} from 'react-toastify';
import {postCreateNewUser, putUpdateUser} from "../../../services/apiService";
import _ from "lodash";

const ModelStateUpdateUser = (props) => {
  const {show, setShow, dataUpdate} = props;
  const handleClose = () => {
    setShow(false);
    setEmail('');
    setUsername('');
    setPassword('');
    setRole('USER');
    setImage('');
    setPreviewImage('');
    props.resetUpdateData();
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('User');
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    console.log(dataUpdate);

    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setUsername(dataUpdate.username);
      setRole(dataUpdate.role);
      setImage('');
      if (dataUpdate.image)
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
    }
  }, [dataUpdate]);
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else
      // setPreviewImage('');
      console.log('Upload file', event.target.files[0]);
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmitCreateUser = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error('Invalid email');
      return;
    }

    const data = await putUpdateUser(dataUpdate.id, username, role, image);
    console.log('>>>Check data: ', data);

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
      {/*<Button variant="primary" onClick={handleShow}>*/}
      {/*  Launch demo modal*/}
      {/*</Button>*/}

      <Modal show={show} onHide={handleClose} size='xl' backdrop='static' className='model-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
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
                     onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select" onChange={(event) => setRole(event.target.value)} value={role}>
                <option value='USER'>USER</option>
                <option value='ADMIN'>ADMIN</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor='labelUpload'>
                <FcPlus/>
                Upload file Image</label>
              <input type="file" hidden id='labelUpload' onChange={(event) => handleUploadImage(event)}/>
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
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>);
}

export default ModelStateUpdateUser;