import React, { Fragment, useEffect } from 'react';
import { Button } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';
import { firebase } from '../../firebase/fire';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/profileActions';

const Account = ({ fetchProfile, profileDetail, loading, dispatchRider }) => {
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
    history.push('/');
    window.location.reload();
  };

  const renderPage = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    } else
      return (
        <Fragment>
          <h2>Account</h2>

          {profileDetail.status && <h3>Status: {profileDetail.status}</h3>}
          {dispatchRider && <h3>Status: {dispatchRider.name}</h3>}

          <Button color="danger" onClick={() => logOut()}>
            Sign Out
          </Button>
          <div style={{ fontSize: 20 }}>
            <Link to="/">Back Home</Link>
          </div>
        </Fragment>
      );
  };
  return (
    <div style={{ textAlign: 'center', padding: 200 }}>{renderPage()}</div>
  );
};

const mapStateToProps = ({ profile }) => ({
  profileDetail: profile.data,
  dispatchRider: profile.data.dispatchRider,
  loading: profile.loading,
});

const mapDispatchToProps = {
  fetchProfile: actions.fetchProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
