import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Layout from '../../components/Layout';
import Typography from '../../components/Typography';

const Device = ({ macAddress }) => {
  return (
    <Layout>
      <div className="container">
        <div className="title-text-container">
          <Typography type="heading">{macAddress}</Typography>
        </div>
      </div>

      <style jsx>{styles}</style>
    </Layout>
  );
};

Device.propTypes = {
  macAddress: PropTypes.string,
};
Device.defaultProps = {};

export default Device;
