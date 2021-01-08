import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/profileActions';

import Dashboard from '../components/Dashboard/Dashboard';

const DashboardPage = ({ fetchProfile, ...allProps }) => {
  //fetch profile details
  const fetchProfileDetails = async () => {
    await fetchProfile();
  };

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  return (
    <div>
      <Dashboard {...allProps} />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
