import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as actions from '../../store/actions/authActions';

const Logout = ({ signOut }) => {
  const history = useHistory();
  const logOut = () => {
    signOut();
    history.push('/');
  };

  useEffect(() => {
    logOut();
    window.location.reload(false);
  }, []);

  return null;
};

const mapDispatchToProps = {
  signOut: actions.SignOut,
};

export default connect(null, mapDispatchToProps)(Logout);
