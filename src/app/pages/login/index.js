import React from 'react';

import Login from '../../layouts/Login';

const Page = (props) => {
  return <Login {...props} />;
};

Page.getInitialProps = async () => {
  return {};
};

export default Page;
