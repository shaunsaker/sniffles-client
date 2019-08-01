import React from 'react';

import Device from '../../layouts/Device';

const Page = (props) => {
  return <Device {...props} />;
};

Page.getInitialProps = async () => {
  return {};
};

export default Page;
