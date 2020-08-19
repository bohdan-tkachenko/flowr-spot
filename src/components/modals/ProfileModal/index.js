import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { logout } from '../../../store/auth/actions';
import ProfileImage from '../../../assets/images/profile-holder.png';
import './index.scss';

const ProfileModal = ({show, onHide, user}) => {  
  const dispatch = useDispatch();

  return <Modal
    show={show}
    onHide={onHide}
    dialogClassName="profile-modal-container"
    centered
  >
    <Modal.Header closeButton bsPrefix="fs-modal-header"></Modal.Header>
    <Modal.Body bsPrefix="fs-modal-body">
      <div className="avatar-name">
        <img src={ProfileImage} alt="avatar"/>
        <div className="name-sightings">
          <span className="name">{`${(user || {}).first_name} ${(user || {}).last_name}`}</span>
          <span className="sightings">47 sightings</span>
        </div>
      </div>
      <label>First Name</label>
      <p>{(user || {}).first_name}</p>
      <label>Last Name</label>
      <p>{(user || {}).last_name}</p>
      <label>Date of Birth</label>
      <p></p>
      <label>Email Address</label>
      <p></p>
      <button className="fs-button" onClick={() => {
        dispatch(logout());
        onHide();
      }}>Logout</button>
    </Modal.Body>
  </Modal>;
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileModal);