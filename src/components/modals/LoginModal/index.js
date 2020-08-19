import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { login, resetAuthError } from '../../../store/auth/actions';
import FsTextInput from '../../controls/FsTextInput';
import './index.scss';

const LoginModal = ({show, onHide, error}) => {
  const initData = {email:"", password: ""};
  const [data, setData] = useState(initData);
  
  const dispatch = useDispatch();

  return <Modal
    show={show}
    onHide={() => {
      setData(initData);
      dispatch(resetAuthError())
      onHide();
    }}
    dialogClassName="login-modal-container"
    centered
  >
    <Modal.Header closeButton bsPrefix="fs-modal-header">
      <Modal.Title>
        Welcome Back
      </Modal.Title>
    </Modal.Header>
    <Modal.Body bsPrefix="fs-modal-body">
      <FsTextInput
        label="Email Address"
        className="mb-10"
        inputProps={{
          type: "email",
          value: data.email,
          placeholder: "test@example.com",
          onChange: (e) => setData({...data, email: e.target.value})
        }}/>
      <FsTextInput
        label="Password"
        className="mb-20"
        inputProps={{
          type: "password",
          value: data.password,
          placeholder: "***",
          onChange: (e) => setData({...data, password: e.target.value})
        }}/>
      {error && <Alert variant="danger">
        {error}
      </Alert>}
      <button className="fs-button full-width" onClick={() => {
        dispatch(login(data)).then(() => {
          setData(initData);
          dispatch(resetAuthError())
          onHide();
        });
      }} disabled={!data.email || !data.password}>Login to your Account</button>
    </Modal.Body>
  </Modal>;
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps)(LoginModal);