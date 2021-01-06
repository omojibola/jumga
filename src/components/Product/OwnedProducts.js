import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OwnedProducts = ({
  profileDetail,
  loading,
  dispatchRider,
  ...allprops
}) => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default OwnedProducts;
