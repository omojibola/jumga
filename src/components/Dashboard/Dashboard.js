import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { firebase } from '../../firebase/fire';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/profileActions';

const Dashboard = ({ fetchProfile, profile }) => {
  const history = useHistory();

  //fetch profile details
  const fetchProfileDetails = async () => {
    await fetchProfile();
  };

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  //log out user
  const logOut = async () => {
    await firebase.auth().signOut();
    window.location.reload();
    history.push('/');
  };
  return (
    <div style={{ textAlign: 'center', padding: 200 }}>
      <h2>Dashboard</h2>
      <h3>Status:{profile.status}</h3>
      <Button color="danger" onClick={() => logOut()}>
        Sign Out
      </Button>
    </div>
  );
};

const mapStateToProps = ({ profile }) => ({
  profile: profile.data,
});

const mapDispatchToProps = {
  fetchProfile: actions.fetchProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
