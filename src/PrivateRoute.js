import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const history = useHistory();
    const { isAuthenticated, uid } = props;

    const checkAuthentication = async () => {
      if ((uid === null && !isAuthenticated) || uid === undefined) {
        history.replace('/');
      }
    };

    useEffect(() => {
      checkAuthentication();

      // eslint-disable-next-line
    }, [uid]);

    const render = () => {
      if (uid) {
        return <WrappedComponent />;
      }
    };
    return <Fragment>{render()}</Fragment>;
  };

  const mapStateToProps = ({ auth }) => ({
    uid: auth.uid,
    isAuthenticated: auth.authenticated,
  });
  return connect(mapStateToProps, null)(AuthenticatedComponent);
};

export default PrivateRoute;
