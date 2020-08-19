import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import FsTextInput from '../../controls/FsTextInput';
import { register, resetAuthError } from '../../../store/auth/actions';
import './index.scss';

const RegisterModal = ({show, onHide, error}) => {
  const initData = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    date_of_birth: ""
  };

  const [data, setData] = useState(initData);
  const dispatch = useDispatch();

  return <Modal
    show={show}
    onHide={() => {
      setData(initData);
      dispatch(resetAuthError())
      onHide();
    }}
    dialogClassName="register-modal-container"
    centered
  >
    <Modal.Header closeButton bsPrefix="fs-modal-header">
      <Modal.Title>
        Create an Account
      </Modal.Title>
    </Modal.Header>
    <Modal.Body bsPrefix="fs-modal-body">
      <div className="name mb-10">
        <FsTextInput
          label="First Name"
          inputProps={{
            type: "text",
            placeholder: "Michael",
            value: data.first_name,
            onChange: (e) => setData({...data, first_name: e.target.value})
          }}/>
        <FsTextInput
          label="Last Name"
          inputProps={{
            type: "text",
            placeholder: "Berry",
            value: data.last_name,
            onChange: (e) => setData({...data, last_name: e.target.value})
          }}/>
      </div>
      <FsTextInput
        label="Date of Birth"
        className="mb-10"
        inputProps={{
          type: "text",
          placeholder: "YYYY-MM-DD",
          value: data.date_of_birth,
          onChange: (e) => setData({...data, date_of_birth: e.target.value})
        }}/>
      <FsTextInput
        label="Email Address"
        className="mb-10"
        inputProps={{
          type: "email",
          placeholder: "test@example.com",
          value: data.email,
          onChange: (e) => setData({...data, email: e.target.value})
        }}/>
      <FsTextInput
        label="Password"
        className="mb-20"
        inputProps={{
          type: "password",
          placeholder: "***",
          value: data.password,
          onChange: (e) => setData({...data, password: e.target.value})
        }}/>
      {error && <Alert variant="danger">
        {error}
      </Alert>}
      <button className="fs-button full-width" onClick={() => {
        dispatch(register(data)).then(() => {
          setData(initData);
          dispatch(resetAuthError())
          onHide();
        });
      }} disabled={!data.email || !data.password || !data.date_of_birth || !data.first_name || !data.last_name}>Create Account</button>
    </Modal.Body>
  </Modal>;
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps)(RegisterModal);