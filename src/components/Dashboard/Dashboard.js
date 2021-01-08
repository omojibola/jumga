import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Sidebar from '../Sidebar/Sidebar';
import DashboardCard from './DashboardCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    border: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = ({ profileDetail, loading, dispatchRider, ...allProps }) => {
  const classes = useStyles();

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
    <div className={classes.root}>
      <Sidebar />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <DashboardCard />
      </main>
    </div>
  );
};

export default Dashboard;
