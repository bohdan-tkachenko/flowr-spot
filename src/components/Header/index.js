import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.scss';
import Logo from '../../assets/images/logo.svg';
import RegisterModal from '../modals/RegisterModal';
import LoginModal from '../modals/LoginModal';
import ProfileModal from '../modals/ProfileModal';
import {API} from '../../api';
import { fetchCurrentUser } from '../../store/auth/actions';
import MeImg from '../../assets/images/profile-holder.png';

const Header = ({user, token}) => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    API.defaults.headers.common['Authorization'] = token;
    dispatch(fetchCurrentUser());
  }, [dispatch, token]);

  return <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
    <Navbar.Brand href="/">
      <div className="logo" href="/">
        <img src={Logo} alt="logo"/>
        <h1>FlowrSpot</h1>
      </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="right-section">
        <ul>
          <li>
            <Nav.Link href="/">Flowers</Nav.Link>
          </li>
          <li>
            <Nav.Link href="/latest-sightings">Latest Sightings</Nav.Link>
          </li>
          <li>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </li>
        </ul>
        {user ? <div className="user-info" onClick={() => setShowProfile(true)}>
            {`${user.first_name} ${user.last_name}`}
            <img src={MeImg} alt="me"/>
          </div> : <div className="buttons">
          <button className="login" onClick={() => setShowLogin(true)}>Login</button>
          <button className="new-account" onClick={() => setShowRegister(true)}>New Account</button>
        </div>}
      </Nav>
    </Navbar.Collapse>
    <RegisterModal show={showRegister} onHide={() => setShowRegister(false)}/>
    <LoginModal show={showLogin} onHide={() => setShowLogin(false)}/>
    <ProfileModal show={showProfile} onHide={() => setShowProfile(false)}/>
  </Navbar>;
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  token: state.auth.token
});

export default connect(mapStateToProps)(Header);