import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { firebase } from '../../firebase/fire';

import Sidebar from '../Sidebar/Sidebar';

const Dashboard = ({ profileDetail, loading, dispatchRider, ...allProps }) => {
  const history = useHistory();

  //log out user
  const logOut = async () => {
    await firebase.auth().signOut();
    history.push('/');
    window.location.reload();
  };

  function reloadPage() {
    // The last "domLoading" Time //
    var currentDocumentTimestamp = new Date(
      performance.timing.domLoading
    ).getTime();
    // Current Time //
    var now = Date.now();
    // Ten Seconds //
    var tenSec = 10 * 1000;
    // Plus Ten Seconds //
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
      window.location.reload();
    } else {
    }
  }
  useEffect(() => {
    reloadPage();
  }, []);

  return (
    <div>
      <Fragment>
        <Sidebar profileDetail={profileDetail} />

        {/* {profileDetail.status && <h3>Status: {profileDetail.status}</h3>}
          {dispatchRider && <h3>Rider: {dispatchRider.name}</h3>}

          <Button color="danger" onClick={() => logOut()}>
            Sign Out
          </Button> */}
      </Fragment>
    </div>
  );
};

export default Dashboard;
