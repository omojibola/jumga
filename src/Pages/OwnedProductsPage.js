import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import OwnedProducts from '../components/Product/OwnedProducts';
import * as actions from '../store/actions/profileActions';

const OwnedProductsPage = ({ fetchProfile, ...allProps }) => {
  //fetch profile details
  const fetchProfileDetails = async () => {
    await fetchProfile();
  };

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  return <OwnedProducts {...allProps} />;
};

const mapStateToProps = ({ profile }) => ({
  profileDetail: profile.data,
  dispatchRider: profile.data.dispatchRider,
  loading: profile.loading,
});

const mapDispatchToProps = {
  fetchProfile: actions.fetchProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnedProductsPage);
